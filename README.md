# Mes Règles d’Or

Bibliothèque éditoriale de 75 règles, réparties en cinq catégories de quinze règles.

## Développement

Stack : Next.js 16 App Router, React 19, TypeScript strict et Tailwind CSS 4.

- `npm ci` : installer les versions verrouillées.
- `npm run dev` : démarrer le serveur de développement.
- `npm run lint` : contrôler le code avec ESLint.
- `npm test` : vérifier la recherche et les invariants de la collection (douze tests).
- `npm run build` : compiler, vérifier TypeScript et générer les pages.
- `npm start` : servir le build de production.

## État au 25 septembre 2026

Sprint 1 conservé : accueil, identité crème/bleu nuit/or, composants et typographie Geist.
Sprint 2 complété : collection `/regles`, 75 pages `/regles/[slug]`, index `/categories`, cinq pages `/categories/[slug]`, métadonnées, navigation par domaine et page 404.
La liste initialement placée dans `src/regles/page.tsx` a été intégrée à `src/app/regles/page.tsx` pour être reconnue par l’App Router. Une copie hors App Router subsiste ; la version active est celle de `src/app`.

Les contenus restent dans `src/data/rules.ts` et `src/data/categories.ts`. Les pages utilisent des Server Components et les paramètres asynchrones de Next.js 16. Le slug historique de la première règle est conservé.

À propos est rédigée. Guides et Blog disposent de pages d’attente non indexables. Les liens Mentions légales et Confidentialité sont retirés tant que leurs contenus ne sont pas rédigés ; les rétablir avant publication avec les informations réelles de l’éditeur et de l’hébergement.

## Recherche et navigation

La page `/recherche` utilise un formulaire GET et des Server Components : aucun service externe, aucune dépendance supplémentaire, aucun JavaScript requis pour chercher. Les paramètres `q` et `categorie` permettent de partager les résultats et de revenir en arrière. La requête est limitée à 120 caractères ; les paramètres répétés utilisent la première valeur. Un domaine inconnu est signalé et remplacé par tous les domaines.

La recherche combine tous les termes, ignore les accents et la casse, et explore titres, résumés, conseils et noms de catégories. Les identifiants internes ne sont pas des critères de recherche. Les recherches et les pages d’attente sont exclues de l’indexation via leurs métadonnées.

Le formulaire figure aussi sur `/regles`. La navigation inclut Recherche et un lien d’évitement clavier. Les styles de base des liens sont placés dans la couche CSS appropriée pour préserver les contrastes des boutons Tailwind.

## Validation

- Lint, douze tests et build réussis.
- 75 règles uniques et consécutives, quinze par catégorie.
- 87 pages et destinations internes répondent 200, y compris toutes les règles.
- Cinq scénarios HTTP de recherche et leurs métadonnées noindex vérifiés.
- Recherche par sujet, état sans résultat et résultats filtrés vérifiés dans le navigateur.
- Rendu du formulaire et menu contrôlés sur mobile (390 px) et rendu sur ordinateur vérifié.
- Trois URL inconnues répondaient 404 lors de la validation du Sprint 2.

## Suite

- Sprint 3 : migration des anciens guides, avec leurs contenus originaux et correspondances vers les règles.
- Sprint 4 : articles de blog. Sitemap et visuels de partage sont intégrés.
- Les anciens articles ne figurent ni dans les sources actuelles ni dans l’unique commit Git local. Aucun dépôt distant n’est configuré. Retrouver la copie originale avant la migration.

## Hébergement cible

Cloudflare Workers avec vinext, sans dépendance de service exclusivement Vercel. La configuration Workers est ajoutée et le build vinext est validé localement. Le build Next.js local reste opérationnel.

Diagnostic exécuté avec vinext 1.0.0-beta.12 le 26 septembre 2026 : zéro problème bloquant détecté, une compatibilité partielle pour `next/font/google` (polices chargées depuis le CDN sous vinext). Le réglage `type: module` a été ajouté. Ce scan ne valide pas encore le build ou le déploiement Workers. Ces polices nécessitent un accès réseau lors du build Next.js. La photo du hero provient actuellement d’Unsplash.

Référence : https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/

Les règles et domaines ne sont pas numérotés dans l’interface ni les métadonnées. Les anciens slugs restent inchangés pour préserver les liens existants ; leurs préfixes ne représentent aucune hiérarchie.


## Référencement et domaine

Adresse envisagée par le propriétaire : **mesreglesdor.fr**, à réserver et confirmer. Aucune réservation ou modification DNS effectuée.

Copier le modèle .env.example vers .env.local pour le développement, ou définir les variables dans l’environnement du build :

- SITE_URL : origine HTTPS publique confirmée, sans chemin ni paramètres.
- SITE_NOINDEX=true : prévisualisation, aucune indexation.
- SITE_NOINDEX=false : autoriser l’indexation une fois le domaine confirmé et la publication prête.

Sans SITE_URL, le site produit des métadonnées noindex, un sitemap vide et un robots.txt interdisant l’exploration. Aucun domaine provisoire ni localhost ne figure dans les liens canoniques. Refaire le build après tout changement de ces variables ; les pages et fichiers SEO sont prégénérés.

Avec une configuration publique, le sitemap comprend **84 URL** : accueil, index des règles, index des catégories, À propos, cinq catégories et 75 règles. Les recherches, Guides et Blog en attente sont exclus et restent noindex. Les robots peuvent visiter ces pages pour lire cette directive. Aucune fausse date de modification n’est générée.

Chaque page publiée possède son canonical, son titre et sa description de partage. Le visuel commun public/share-card.png (1200 × 630) reprend la charte ; sa source SVG est conservée dans public/share-card.svg. Les icônes MRO remplacent le favicon initial. Le visuel est statique et ne dépend pas d’un service de génération côté serveur.

Validation du 26 septembre : 12 tests unitaires ; contrôle HTTP des 84 URL, de leurs canonicals, images OpenGraph et du sitemap ; vérification noindex des pages de recherche et d’attente ; contrôle visuel du PNG.

## Publication Workers (27 septembre 2026)

La cible provisoire est workers.dev, sans domaine personnalisé. La publication distante attend la connexion au compte Cloudflare ; aucune URL publique n’est encore confirmée.

Versions verrouillées : vinext 1.0.0-beta.13, @vinext/cloudflare 1.0.0-beta.11 et react-server-dom-webpack 19.2.8 (aligné sur React).

- `npm run build:vinext` : produire le Worker et ses fichiers statiques.
- `npm run start:vinext` : tester le résultat dans le runtime Workers local.
- `npx wrangler login` : connecter le compte Cloudflare depuis le navigateur.
- `npm run deploy:vinext` : compiler et publier avec la configuration générée.
- `npm run deploy:vinext -- --skip-build` : publier un build déjà vérifié.

Modifier la configuration source dans wrangler.jsonc, jamais dans dist/server/wrangler.json qui est régénéré. Le Worker se nomme mes-regles-d-or ; workers_dev est activé. Aucun stockage ou service d’optimisation d’images n’est configuré. SITE_NOINDEX=true maintient cette prévisualisation hors référencement. Les dossiers dist et .wrangler ainsi que les fichiers de secrets .dev.vars sont ignorés par Git.

Validation Workers locale : build réussi ; 86 pages contrôlées, trois recherches, les erreurs 404 et les fichiers SEO et images répondent comme prévu. Le rendu de l’accueil a été contrôlé dans le navigateur. Les douze tests et le lint passent.

## Déploiement automatique depuis GitHub

Dans Cloudflare Workers & Pages, importer le dépôt GitHub privé mes-regles-d-or avec ces réglages :

- Nom du Worker : mes-regles-d-or.
- Branche de production : main.
- Répertoire racine : /.
- Commande de build : npm run lint && npm test && npm run build:vinext.
- Commande de déploiement : npm run deploy:vinext -- --skip-build.
- Version Node.js du build : 22.16.0 ou plus récente compatible avec Vite 8.

Conserver SITE_NOINDEX=true pour la prévisualisation workers.dev. Autoriser l’application GitHub de Cloudflare uniquement sur ce dépôt si possible. Après connexion, chaque envoi sur main déclenche les vérifications et la publication. La connexion GitHub/Cloudflare et la première publication restent à confirmer dans le tableau de bord.

## Contenus ajoutés le 27 septembre 2026

Guides et Journal remplacent désormais leurs pages d’attente : trois guides originaux (décision, réunion, test d’une idée) et deux articles (usage des règles, trace des décisions). Ces textes sont nouveaux, et ne constituent pas la migration des anciens articles introuvables.

Chaque publication possède une page individuelle, un sommaire, un temps de lecture estimé, un récapitulatif et des liens vers les règles du domaine. L’accueil présente les guides. Le sitemap inclut maintenant les deux rubriques et leurs cinq publications : 91 URL lorsque le référencement est activé. La prévisualisation Workers conserve sa directive noindex.

Validation : lint, 12 tests, builds Next.js et vinext réussis ; nouvelles pages, liens vers les règles et 404 vérifiés dans Workers local ; rendu de lecture contrôlé dans le navigateur. Les informations d’éditeur et de contact restent à fournir avant rédaction des pages légales.

## Guides de consommation inspirés de thèmes RTL

Trois guides originaux ajoutés : choisir un artisan, acheter une voiture d’occasion et acheter en ligne. Chaque page sépare les liens d’inspiration RTL des références officielles DGCCRF/Service-Public, avec une date de vérification et une mention d’indépendance. Les textes ne reproduisent ni les transcriptions ni les cas personnels de l’émission. Le sitemap comporte désormais 94 URL en mode indexable. Les 75 règles restent inchangées et sans numérotation visible.

## Enrichissement éditorial — 28 septembre 2026

La bibliothèque contient 29 guides et 2 articles de journal, en complément des 75 règles. Vingt guides originaux supplémentaires comportent une date de consultation et des références précises. Les guides sont regroupés en sept thèmes ; la recherche couvre désormais les règles et les publications. Le fichier `docs/SOURCES-EDITORIALES.md` conserve les références et la réserve de sujets à vérifier. Les sujets de la réserve ne sont pas publiés.
