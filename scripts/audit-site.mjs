import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  }));
  return files.flat();
}

const value = (html, pattern) => html.match(pattern)?.[1]?.trim() || '';
const strip = (text) => text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const htmlFiles = (await walk(root)).filter((file) => file.endsWith('.html'));
const pages = [];
const errors = [];

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const path = `/${relative(root, file).replace(/index\.html$/, '').replace(/\\/g, '/')}`.replace(/\/+/g, '/');
  const title = strip(value(html, /<title>([\s\S]*?)<\/title>/i));
  const description = value(html, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const canonical = value(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;
  const noindex = /<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
  if (!noindex && !title) errors.push(`${path}: title absent`);
  if (!noindex && !description) errors.push(`${path}: meta description absente`);
  if (!noindex && !canonical) errors.push(`${path}: canonical absent`);
  if (!noindex && h1Count !== 1) errors.push(`${path}: ${h1Count} H1`);
  pages.push({ path, title, canonical, noindex });
}

for (const field of ['title', 'canonical']) {
  const seen = new Map();
  for (const page of pages.filter((item) => !item.noindex)) {
    if (!page[field]) continue;
    if (seen.has(page[field])) errors.push(`${page.path}: ${field} dupliqué avec ${seen.get(page[field])}`);
    else seen.set(page[field], page.path);
  }
}

const localPages = pages.filter((page) => /\/(?:panneau|installateur)-solaire-/.test(page.path));
console.log(`${pages.length} pages HTML contrôlées, dont ${localPages.length} pages locales.`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Titles, descriptions, canonicals et H1 : contrôle réussi.');
}
