# panneau-solaire-alpes-maritimes.fr

Site Astro statique de génération de leads photovoltaïques pour les Alpes-Maritimes, destiné à Cloudflare Pages.

## Mise en ligne

1. Utiliser Node `>= 22.12`, puis lancer `npm install` et `npm run build`.
2. Dans le projet Supabase PimpSEO, exécuter `supabase/20260723_rank_rent_leads.sql`.
3. Dans Cloudflare Pages, connecter le dépôt GitHub `baguettecroissant/panneau-solaire-alpes-maritimes.fr` avec la commande de build `npm run build` et le répertoire de sortie `dist/client`.
4. Ajouter les secrets Pages suivants : `VUD_API_KEY`, `SUPABASE_URL`, `SUPABASE_ANON_KEY`. Ils ne doivent jamais être ajoutés au dépôt.
5. Ajouter le domaine `panneau-solaire-alpes-maritimes.fr`, configurer DNS/SSL, compléter les coordonnées réelles dans les mentions légales et la politique de confidentialité, puis vérifier la propriété Search Console séparée.

## Formulaire

`/api/lead` et `/api/lead/` valident le consentement, l’origine, le honeypot, la taille du corps, le téléphone et le département 06. Le flux est : idempotence Supabase → insertion `rank_rent_leads` → ping ViteUnDevis → envoi éventuel → mise à jour de la même ligne.

Avant la mise en production, réaliser un essai avec les identifiants de test ViteUnDevis fournis par le partenaire : ne jamais créer un faux lead commercial.

## Vérification

```bash
npm test
npm run build
```
