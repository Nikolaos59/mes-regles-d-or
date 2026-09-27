export type RuleCategoryId =
  | "cybersecurite"
  | "ia-numerique"
  | "management-travail"
  | "argent-consommation"
  | "entrepreneuriat";

export type Rule = {
  id: number;
  number: string;
  slug: string;
  title: string;
  summary: string;
  detail: string;
  categoryId: RuleCategoryId;
};

type RuleSeed = readonly [
  title: string,
  summary: string,
  detail: string,
];

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildRules(
  categoryId: RuleCategoryId,
  start: number,
  seeds: readonly RuleSeed[],
): Rule[] {
  return seeds.map(([title, summary, detail], index) => {
    const id = start + index;
    const number = String(id).padStart(2, "0");

    const slug =
      id === 1
        ? "01-ne-jamais-decider-sous-pression"
        : `${number}-${slugify(title)}`;

    return {
      id,
      number,
      slug,
      title,
      summary,
      detail,
      categoryId,
    };
  });
}

const cybersecurityRules = [
  [
    "Ne prenez jamais une décision importante sous pression.",
    "L'urgence est l'un des outils les plus efficaces pour faire baisser votre vigilance.",
    "Lorsqu'une personne, un message ou un site vous pousse à décider immédiatement, ralentissez volontairement. Vérifiez l'information par un autre canal et accordez-vous quelques minutes avant toute action irréversible.",
  ],
  [
    "Vérifiez l'identité avant de faire confiance.",
    "Un nom, un logo ou une photo ne prouvent jamais l'identité de votre interlocuteur.",
    "Avant de transmettre une information sensible, de payer ou de modifier un accès, utilisez un moyen indépendant pour confirmer que vous parlez bien à la bonne personne ou à la bonne organisation.",
  ],
  [
    "Utilisez un mot de passe unique pour chaque service.",
    "Un mot de passe réutilisé transforme une fuite isolée en risque généralisé.",
    "Utilisez un gestionnaire de mots de passe pour générer et conserver des identifiants uniques. Si un service est compromis, les autres comptes restent ainsi protégés.",
  ],
  [
    "Activez la double authentification.",
    "Un mot de passe seul ne constitue plus une protection suffisante.",
    "Activez la double authentification dès qu'elle est disponible, en privilégiant une application d'authentification ou une clé physique lorsque le service le permet.",
  ],
  [
    "Ne cliquez pas avant de vérifier l'adresse réelle.",
    "Le texte visible d'un lien peut être différent de sa destination.",
    "Avant d'ouvrir un lien inattendu, vérifiez le domaine réel. En cas de doute, ouvrez directement le site officiel depuis votre navigateur plutôt que depuis le message reçu.",
  ],
  [
    "Méfiez-vous de l'urgence et de la peur.",
    "Les escroqueries fonctionnent souvent en provoquant une réaction émotionnelle.",
    "Un compte prétendument bloqué, une dette soudaine ou un proche en difficulté doivent être vérifiés avant toute action. Une émotion forte est un signal pour ralentir.",
  ],
  [
    "Sauvegardez ce que vous ne pouvez pas perdre.",
    "Un fichier qui n'existe qu'à un seul endroit peut disparaître à tout moment.",
    "Conservez au minimum une seconde copie de vos documents importants, idéalement sur un support ou un service indépendant de votre appareil principal.",
  ],
  [
    "Mettez à jour vos appareils.",
    "Une mise à jour de sécurité corrige souvent une faille déjà connue.",
    "Maintenez les systèmes, navigateurs, applications et équipements connectés à jour. Activez les mises à jour automatiques pour les logiciels de confiance.",
  ],
  [
    "Ne partagez jamais un code de validation.",
    "Un code reçu par SMS ou par application sert précisément à confirmer votre identité.",
    "Aucun conseiller légitime ne devrait vous demander de lui communiquer un code de connexion ou de validation. S'il le fait, interrompez l'échange.",
  ],
  [
    "Séparez vos usages sensibles et ordinaires.",
    "Tout regrouper sur un seul compte augmente les conséquences d'un incident.",
    "Lorsque c'est pertinent, utilisez des adresses différentes pour les services critiques, les achats et les inscriptions secondaires afin de limiter l'exposition.",
  ],
  [
    "Limitez les informations que vous rendez publiques.",
    "Les informations personnelles facilitent l'usurpation et les attaques ciblées.",
    "Évitez d'exposer publiquement les éléments utiles pour vous identifier, deviner vos mots de passe, répondre à vos questions de sécurité ou cibler vos proches.",
  ],
  [
    "Téléchargez uniquement depuis des sources fiables.",
    "Un logiciel gratuit peut coûter cher s'il installe autre chose que ce que vous attendiez.",
    "Privilégiez le site officiel de l'éditeur ou une boutique reconnue. Méfiez-vous des copies, cracks, faux installateurs et extensions inconnues.",
  ],
  [
    "Verrouillez vos appareils.",
    "La sécurité numérique commence aussi par la sécurité physique.",
    "Utilisez un code, une authentification biométrique et un verrouillage automatique. Un appareil perdu ne doit pas donner immédiatement accès à vos données.",
  ],
  [
    "Vérifiez avant de payer.",
    "Un changement de coordonnées bancaires doit toujours être considéré comme sensible.",
    "Pour un paiement inhabituel ou un nouvel IBAN, confirmez les informations par un second canal déjà connu, surtout lorsqu'une facture importante est concernée.",
  ],
  [
    "Préparez un plan avant qu'un compte soit compromis.",
    "Il est plus facile de réagir correctement quand les étapes sont connues à l'avance.",
    "Identifiez vos comptes essentiels, conservez les moyens de récupération et sachez comment changer rapidement vos mots de passe, bloquer une carte ou contacter un fournisseur.",
  ],
] as const satisfies readonly RuleSeed[];

const aiRules = [
  [
    "Donnez un objectif clair avant de demander une réponse à l'IA.",
    "Une demande précise produit généralement une réponse plus utile.",
    "Expliquez le résultat recherché, le contexte, le format attendu et les contraintes importantes. L'IA travaille mieux lorsqu'elle comprend ce que vous essayez réellement d'obtenir.",
  ],
  [
    "Vérifiez toute information importante produite par une IA.",
    "Une réponse convaincante peut malgré tout être incorrecte.",
    "Pour une décision importante, vérifiez les chiffres, dates, citations et affirmations auprès d'une source fiable avant de les utiliser.",
  ],
  [
    "Ne confiez pas à une IA ce que vous ne publieriez pas.",
    "Une donnée sensible mérite un niveau de prudence supérieur.",
    "Avant de transmettre un document, un secret commercial ou une information personnelle, vérifiez les conditions du service et supprimez les éléments inutiles.",
  ],
  [
    "Utilisez l'IA pour augmenter votre jugement, pas pour le remplacer.",
    "L'outil peut aider à réfléchir sans devenir le décideur.",
    "Utilisez l'IA pour explorer, comparer, reformuler ou analyser, puis gardez la responsabilité de la décision finale lorsque l'enjeu est réel.",
  ],
  [
    "Demandez les hypothèses et les limites.",
    "Une réponse est plus utile quand on comprend sur quoi elle repose.",
    "Demandez ce qui pourrait rendre l'analyse fausse, quelles informations manquent et quelles hypothèses ont été utilisées.",
  ],
  [
    "Séparez les faits, les interprétations et les suggestions.",
    "Mélanger ces trois niveaux crée une illusion de certitude.",
    "Demandez explicitement à l'IA d'indiquer ce qui relève d'un fait vérifiable, d'une interprétation ou d'une recommandation.",
  ],
  [
    "Donnez le contexte réellement utile.",
    "Sans contexte, l'IA remplit les vides avec des suppositions.",
    "Ajoutez les contraintes, le public visé, les objectifs et les informations nécessaires, sans noyer la demande dans des détails sans rapport.",
  ],
  [
    "Faites relire les résultats critiques.",
    "Plus les conséquences sont importantes, plus la validation doit être solide.",
    "Pour le juridique, la sécurité, les finances, la santé ou une décision professionnelle majeure, prévoyez une validation humaine qualifiée.",
  ],
  [
    "Préférez plusieurs itérations à un prompt gigantesque.",
    "Une bonne collaboration avec l'IA est souvent progressive.",
    "Commencez par cadrer le problème, examinez la réponse, corrigez les incompréhensions puis approfondissez les parties réellement utiles.",
  ],
  [
    "Conservez une trace des décisions importantes.",
    "Une réponse utile aujourd'hui doit pouvoir être comprise demain.",
    "Pour les décisions structurantes, conservez les hypothèses, les sources, les versions importantes et la raison du choix final.",
  ],
  [
    "Automatisez le répétitif, pas l'irréversible.",
    "Une erreur automatisée peut se répéter beaucoup plus vite qu'une erreur humaine.",
    "Automatisez d'abord les tâches faciles à vérifier et conservez une validation humaine pour les actions difficiles à annuler.",
  ],
  [
    "Testez d'abord sur un petit périmètre.",
    "Une expérimentation limitée permet d'apprendre sans exposer tout le système.",
    "Avant de généraliser un outil ou une automatisation, testez-le sur quelques cas représentatifs et mesurez les erreurs.",
  ],
  [
    "Comparez plusieurs sources lorsque l'enjeu est élevé.",
    "Une seule réponse ne doit pas devenir une vérité par défaut.",
    "Pour les sujets importants, confrontez l'IA à des sources indépendantes, des documents de référence ou une seconde analyse.",
  ],
  [
    "Évaluez le gain réel avant d'ajouter un nouvel outil.",
    "Un outil supplémentaire peut créer autant de friction qu'il en supprime.",
    "Mesurez le temps économisé, la qualité obtenue, le coût, la dépendance créée et le temps d'apprentissage nécessaire.",
  ],
  [
    "Gardez toujours une sortie manuelle.",
    "Un processus ne doit pas devenir inutilisable parce qu'un service est indisponible.",
    "Pour les opérations essentielles, prévoyez une procédure de secours ou la possibilité de reprendre manuellement le contrôle.",
  ],
] as const satisfies readonly RuleSeed[];

const managementRules = [
  [
    "Dites clairement ce qui est attendu.",
    "L'ambiguïté coûte plus cher que la clarté.",
    "Un objectif utile précise le résultat attendu, la priorité, les contraintes principales et la personne responsable.",
  ],
  [
    "Traitez les problèmes tôt.",
    "Un petit problème ignoré devient souvent un gros problème coûteux.",
    "Lorsqu'un écart apparaît, abordez-le rapidement avec les faits disponibles plutôt que d'attendre qu'il devienne difficile à corriger.",
  ],
  [
    "Critiquez le travail, pas la personne.",
    "Une critique utile doit permettre d'améliorer quelque chose de concret.",
    "Décrivez le comportement, le résultat ou le processus à modifier sans transformer un problème professionnel en jugement personnel.",
  ],
  [
    "Décidez au bon niveau.",
    "Tout ne doit pas remonter jusqu'au sommet.",
    "Confiez les décisions au niveau le plus proche du problème dès lors que les compétences, les informations et les limites sont claires.",
  ],
  [
    "Rendez les priorités visibles.",
    "Si tout est prioritaire, rien ne l'est réellement.",
    "Limitez le nombre de priorités actives et rendez explicite ce qui doit passer avant le reste lorsqu'un arbitrage est nécessaire.",
  ],
  [
    "Décidez vite lorsque la décision est réversible.",
    "Toutes les décisions ne méritent pas la même quantité d'analyse.",
    "Accélérez les choix faciles à corriger et consacrez davantage de temps aux décisions coûteuses ou difficiles à annuler.",
  ],
  [
    "Écrivez les décisions importantes.",
    "La mémoire collective est moins fiable qu'un document simple.",
    "Après une décision structurante, notez ce qui a été décidé, pourquoi, par qui et ce qui doit se passer ensuite.",
  ],
  [
    "Ne réunissez les gens que lorsqu'une discussion est nécessaire.",
    "Une réunion n'est pas le format par défaut de tout problème.",
    "Utilisez l'écrit pour informer et réservez les réunions aux échanges, arbitrages ou décisions qui bénéficient réellement du dialogue.",
  ],
  [
    "Mesurez ce qui aide à décider.",
    "Un indicateur inutile reste inutile même s'il est précis.",
    "Choisissez quelques mesures reliées à des décisions concrètes plutôt qu'une accumulation de tableaux de bord difficiles à interpréter.",
  ],
  [
    "Donnez un feedback proche des faits.",
    "Un feedback tardif perd une partie de sa valeur.",
    "Expliquez rapidement ce qui s'est passé, l'effet produit et ce qui pourrait être fait différemment la prochaine fois.",
  ],
  [
    "Protégez les temps de concentration.",
    "Le travail profond supporte mal les interruptions constantes.",
    "Regroupez les sollicitations, limitez les notifications et laissez des plages où les tâches importantes peuvent avancer sans interruption.",
  ],
  [
    "Une urgence répétée révèle un système mal conçu.",
    "Ce qui arrive toutes les semaines n'est plus réellement une urgence.",
    "Après un incident récurrent, cherchez la cause structurelle et corrigez le processus plutôt que de célébrer systématiquement le sauvetage.",
  ],
  [
    "Clarifiez qui décide avant de débattre.",
    "Beaucoup de réunions s'allongent parce que personne ne sait comment elles se terminent.",
    "Définissez dès le départ qui recommande, qui contribue et qui prend la décision finale.",
  ],
  [
    "Ne récompensez pas la complexité.",
    "Une solution difficile à expliquer est souvent difficile à maintenir.",
    "Valorisez les processus compréhensibles, les responsabilités claires et les solutions qui réduisent le nombre d'exceptions.",
  ],
  [
    "Fermez chaque sujet avec une prochaine action.",
    "Une discussion sans suite concrète crée une impression de travail sans progrès réel.",
    "Terminez les échanges importants avec une action, un responsable et, lorsque c'est utile, une échéance.",
  ],
] as const satisfies readonly RuleSeed[];

const moneyRules = [
  [
    "N'achetez pas ce que vous ne comprenez pas.",
    "L'incompréhension augmente votre dépendance envers le vendeur.",
    "Avant un achat important, assurez-vous de comprendre le produit, son coût, ses contraintes, les risques et les conditions essentielles.",
  ],
  [
    "Comparez le coût total, pas seulement le prix affiché.",
    "Le prix d'entrée ne représente pas toujours le coût réel.",
    "Ajoutez l'entretien, les frais, les abonnements, le financement, l'énergie et la revente avant de comparer deux options.",
  ],
  [
    "Ne financez pas une envie comme un besoin.",
    "Le crédit réduit la perception immédiate du coût.",
    "Avant de financer un achat de confort, demandez-vous si vous accepteriez toujours de le payer s'il fallait régler la somme immédiatement.",
  ],
  [
    "Gardez une marge avant de vous engager.",
    "Un budget sans marge fonctionne seulement lorsque tout se passe exactement comme prévu.",
    "Conservez une réserve pour les imprévus avant de signer un crédit, un abonnement ou une dépense récurrente importante.",
  ],
  [
    "Lisez le contrat avant de signer.",
    "Ce qui compte juridiquement n'est pas toujours ce qui a été dit commercialement.",
    "Vérifiez notamment la durée, les frais, les exclusions, les obligations, les modalités de résiliation et les engagements financiers.",
  ],
  [
    "Demandez plusieurs devis.",
    "Un seul prix ne permet pas de savoir si une proposition est compétitive.",
    "Pour une dépense importante, comparez plusieurs professionnels sur le prix, le contenu, les garanties, les délais et les conditions.",
  ],
  [
    "Méfiez-vous de ce qui paraît trop beau pour être vrai.",
    "Une offre extraordinairement avantageuse mérite une vérification extraordinaire.",
    "Lorsqu'un prix ou un rendement semble très éloigné du marché, cherchez ce qui pourrait expliquer l'écart avant de vous engager.",
  ],
  [
    "Négociez les conditions, pas seulement le prix.",
    "Une bonne transaction ne se résume pas à quelques euros de réduction.",
    "La garantie, la livraison, les délais, le paiement, les services inclus et les conditions de sortie peuvent avoir davantage de valeur qu'une remise.",
  ],
  [
    "Séparez le budget courant de l'épargne.",
    "L'argent disponible n'a pas toujours la même fonction.",
    "Distinguez les dépenses quotidiennes, les projets, l'épargne de précaution et les objectifs de long terme.",
  ],
  [
    "Prévoyez les dépenses irrégulières.",
    "Une dépense annuelle prévisible n'est pas un imprévu.",
    "Transformez les grosses dépenses connues en provision mensuelle afin qu'elles ne déséquilibrent pas votre budget lorsqu'elles arrivent.",
  ],
  [
    "Refusez les décisions commerciales immédiates.",
    "Une bonne offre supporte généralement quelques heures de réflexion.",
    "Plus la somme est importante, plus vous devez résister aux arguments du type aujourd'hui seulement, dernière chance ou signature immédiate.",
  ],
  [
    "Gardez les preuves.",
    "Un accord difficile à prouver est un accord fragile.",
    "Conservez devis, factures, échanges, contrats, confirmations et captures utiles pour les achats ou engagements importants.",
  ],
  [
    "Assurez les risques qui pourraient vous ruiner.",
    "L'assurance est surtout utile contre les pertes que vous ne pourriez pas absorber seul.",
    "Priorisez les risques rares mais financièrement graves plutôt que de chercher à assurer chaque petite dépense.",
  ],
  [
    "Réparez avant de remplacer lorsque c'est pertinent.",
    "Le remplacement automatique est rarement le seul choix.",
    "Comparez le coût de la réparation, la durée de vie restante, la consommation, la garantie et la valeur d'usage avant de remplacer.",
  ],
  [
    "Une bonne affaire n'en est pas une si vous n'en avez pas besoin.",
    "Une remise ne transforme pas une dépense inutile en économie.",
    "Commencez par décider si le produit vous est réellement utile. Le prix ne doit intervenir qu'après.",
  ],
] as const satisfies readonly RuleSeed[];

const businessRules = [
  [
    "Vendez avant de complexifier.",
    "Une entreprise existe parce que des clients acceptent de payer.",
    "Avant d'investir dans une structure complexe, validez que votre proposition répond à un problème suffisamment important pour déclencher un achat.",
  ],
  [
    "Parlez aux clients avant de construire.",
    "Les hypothèses internes résistent rarement intactes au contact du terrain.",
    "Observez les usages, posez des questions et testez le besoin réel avant de consacrer beaucoup de temps à un produit ou un service.",
  ],
  [
    "Protégez la trésorerie.",
    "Une entreprise rentable sur le papier peut échouer faute de liquidités.",
    "Suivez les encaissements, décaissements, échéances et besoins futurs suffisamment tôt pour pouvoir agir avant qu'un problème ne devienne critique.",
  ],
  [
    "Fixez un prix soutenable.",
    "Un prix trop bas peut rendre une activité impossible à développer.",
    "Votre prix doit couvrir les coûts, le temps, les risques, les investissements et une marge cohérente avec la valeur apportée.",
  ],
  [
    "Une offre claire vaut mieux qu'un catalogue flou.",
    "Le client doit comprendre rapidement ce que vous proposez.",
    "Expliquez le problème résolu, pour qui, avec quel résultat et à quelles conditions avant d'ajouter de nombreuses variantes.",
  ],
  [
    "Documentez les processus répétés.",
    "Ce qui repose uniquement sur la mémoire devient fragile en grandissant.",
    "Lorsqu'une tâche revient régulièrement, créez une procédure simple afin de faciliter la transmission, la délégation et l'amélioration.",
  ],
  [
    "Gardez les coûts fixes bas tant que le modèle est incertain.",
    "Les coûts fixes réduisent votre liberté lorsque les revenus varient.",
    "Avant que la demande soit solide, privilégiez les engagements flexibles et conservez la capacité de réduire rapidement les dépenses.",
  ],
  [
    "Mesurez la marge et le cash, pas seulement le chiffre d'affaires.",
    "Un chiffre d'affaires élevé ne garantit ni rentabilité ni solvabilité.",
    "Suivez ce qu'il reste réellement après les coûts et vérifiez que l'argent entre suffisamment vite pour financer l'activité.",
  ],
  [
    "Ne dépendez pas d'un seul client, canal ou fournisseur.",
    "Une dépendance unique transforme un incident externe en risque vital.",
    "Identifiez les concentrations importantes et construisez progressivement des alternatives réalistes.",
  ],
  [
    "Traitez rapidement les impayés.",
    "Une facture impayée devient rarement plus facile à récupérer avec le temps.",
    "Relancez tôt, formalisez les échéances et appliquez une procédure constante plutôt que d'attendre que la situation devienne critique.",
  ],
  [
    "Faites simple avant de faire scalable.",
    "L'automatisation d'un mauvais processus crée un mauvais processus plus rapide.",
    "Comprenez d'abord comment délivrer correctement votre valeur puis automatisez les étapes réellement répétitives.",
  ],
  [
    "Recrutez pour un besoin réel.",
    "Une embauche permanente ne doit pas compenser un problème temporaire ou mal défini.",
    "Clarifiez le résultat attendu, la charge durable et les compétences nécessaires avant d'ouvrir un poste.",
  ],
  [
    "Une croissance non maîtrisée peut tuer une entreprise.",
    "Plus de ventes peuvent aussi signifier davantage de besoins en stock, personnel et trésorerie.",
    "Avant d'accélérer, vérifiez que la qualité, le financement et les opérations peuvent supporter le volume supplémentaire.",
  ],
  [
    "Préparez un plan B pour les dépendances critiques.",
    "Une entreprise solide sait comment continuer lorsque quelque chose d'essentiel disparaît.",
    "Identifiez vos fournisseurs, outils, personnes et infrastructures critiques puis prévoyez une solution de repli réaliste.",
  ],
  [
    "Faites régulièrement moins, mais mieux.",
    "Accumuler les initiatives disperse l'attention et les ressources.",
    "Supprimez périodiquement les projets, produits ou tâches qui consomment beaucoup d'énergie sans contribuer suffisamment aux objectifs essentiels.",
  ],
] as const satisfies readonly RuleSeed[];

export const rules: readonly Rule[] = [
  ...buildRules("cybersecurite", 1, cybersecurityRules),
  ...buildRules("ia-numerique", 16, aiRules),
  ...buildRules("management-travail", 31, managementRules),
  ...buildRules("argent-consommation", 46, moneyRules),
  ...buildRules("entrepreneuriat", 61, businessRules),
];

export function getRuleBySlug(slug: string): Rule | undefined {
  return rules.find((rule) => rule.slug === slug);
}

export function getRulesByCategory(
  categoryId: RuleCategoryId,
): readonly Rule[] {
  return rules.filter((rule) => rule.categoryId === categoryId);
}