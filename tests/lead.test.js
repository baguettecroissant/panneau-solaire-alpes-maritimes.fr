import test from 'node:test'; import assert from 'node:assert/strict'; import { handleLead } from '../functions/api/lead.js';
const env = { SUPABASE_URL:'https://project.supabase.co', SUPABASE_ANON_KEY:'anon', VUD_API_KEY:'key' }; const valid = { nom:'Dupont',prenom:'Claire',email:'claire@example.fr',tel:'06 12 34 56 78',adresse:'12 avenue du Soleil',cp:'06000',ville:'Nice',typeBien:'1',delais:'2',consent:true,submissionId:'test-submission-12345',pageUrl:'https://panneau-solaire-alpes-maritimes.fr/devis' };
const request = (body, origin='https://panneau-solaire-alpes-maritimes.fr') => new Request('https://panneau-solaire-alpes-maritimes.fr/api/lead/',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify(body)});
test('refuses a postcode outside the 06 before networking', async () => { let calls=0; const r=await handleLead({request:request({...valid,cp:'75001'}),env},async()=>{calls++;}); assert.equal(r.status,400); assert.equal(calls,0); });
test('refuses an untrusted origin', async () => { let calls=0; const r=await handleLead({request:request(valid,'https://evil.example'),env},async()=>{calls++;}); assert.equal(r.status,403); assert.equal(calls,0); });
test('stops before VUD when Supabase insertion fails', async () => { let calls=0; const fetcher=async()=>{calls++; return new Response('[]',{status:calls===1?200:500,headers:{'Content-Type':'application/json'}});}; const r=await handleLead({request:request(valid),env},fetcher); assert.equal(r.status,502); assert.equal(calls,2); });
test('stores then marks no buyer without sending VUD lead', async () => { const urls=[]; const fetcher=async(url)=>{urls.push(url); if(url.includes('submission_id')) return Response.json([]); if(url.includes('rank_rent_leads') && !url.includes('id=eq')) return Response.json([{id:'lead-1'}]); if(url.includes('ping.php')) return Response.json({accept:0,recommande:0,buyers:0,cpl:0}); return new Response('',{status:204});}; const r=await handleLead({request:request(valid),env},fetcher); const result=await r.json(); assert.equal(result.status,'no_buyer'); assert.equal(urls.some((url)=>url.includes('get.php')),false); assert.equal(urls.length,4); });
test('sends only after a successful Supabase capture and ping', async () => { const urls=[]; const fetcher=async(url)=>{urls.push(url); if(url.includes('submission_id')) return Response.json([]); if(url.includes('rank_rent_leads') && !url.includes('id=eq')) return Response.json([{id:'lead-1'}]); if(url.includes('ping.php')) return Response.json({accept:1,recommande:1,buyers:1,cpl:37}); if(url.includes('get.php')) return new Response(JSON.stringify({code_retour:[{code:200}],devis_data:{devis_id:'D-1'}})); return new Response('',{status:204});}; const r=await handleLead({request:request(valid),env},fetcher); const result=await r.json(); assert.equal(result.status,'sent'); assert.ok(urls.findIndex((url)=>url.includes('ping.php')) > urls.findIndex((url)=>url.includes('rank_rent_leads'))); assert.ok(urls.findIndex((url)=>url.includes('get.php')) > urls.findIndex((url)=>url.includes('ping.php'))); });
test('refuses honeypot and missing consent before networking', async () => {
  for (const body of [{ ...valid, website:'robot' }, { ...valid, consent:false }]) {
    let calls=0;
    const r=await handleLead({request:request(body),env},async()=>{calls++;});
    assert.equal(r.status,400);
    assert.equal(calls,0);
  }
});
test('refuses a commune inconsistent with its postcode', async () => {
  let calls=0;
  const r=await handleLead({request:request({...valid,cp:'06140',ville:'Nice'}),env},async()=>{calls++;});
  assert.equal(r.status,400);
  assert.equal(calls,0);
});
test('refuses an oversized JSON body before networking', async () => {
  let calls=0;
  const r=await handleLead({request:request({...valid,description:'x'.repeat(20_000)}),env},async()=>{calls++;});
  assert.equal(r.status,413);
  assert.equal(calls,0);
});
test('reuses an existing submission without a second insert or VUD call', async () => {
  const urls=[];
  const fetcher=async(url)=>{urls.push(url); return Response.json([{id:'lead-1',vud_status:'sent',vud_devis_id:'D-OLD'}]);};
  const r=await handleLead({request:request(valid),env},fetcher);
  const result=await r.json();
  assert.equal(result.duplicate,true);
  assert.equal(result.status,'sent');
  assert.equal(urls.length,1);
});
test('distinguishes a ping outage from no buyer and keeps the captured lead', async () => {
  const urls=[];
  const fetcher=async(url)=>{
    urls.push(url);
    if(url.includes('submission_id')) return Response.json([]);
    if(url.includes('rank_rent_leads') && !url.includes('id=eq')) return Response.json([{id:'lead-1'}]);
    if(url.includes('ping.php')) throw new Error('timeout');
    return new Response('',{status:204});
  };
  const r=await handleLead({request:request(valid),env},fetcher);
  const result=await r.json();
  assert.equal(r.status,202);
  assert.equal(result.status,'ping_error');
  assert.equal(urls.some((url)=>url.includes('get.php')),false);
});
test('keeps the lead captured when VUD returns a non-JSON response', async () => {
  const fetcher=async(url)=>{
    if(url.includes('submission_id')) return Response.json([]);
    if(url.includes('rank_rent_leads') && !url.includes('id=eq')) return Response.json([{id:'lead-1'}]);
    if(url.includes('ping.php')) return Response.json({accept:1,recommande:1,buyers:1,cpl:37});
    if(url.includes('get.php')) return new Response('<html>maintenance</html>');
    return new Response('',{status:204});
  };
  const r=await handleLead({request:request(valid),env},fetcher);
  const result=await r.json();
  assert.equal(r.status,202);
  assert.equal(result.status,'captured');
});
