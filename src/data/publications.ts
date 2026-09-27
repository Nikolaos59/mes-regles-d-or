import type { RuleCategoryId } from "@/data/rules";
export type Publication = { kind: "guides" | "blog"; slug: string; title: string; description: string; categoryId: RuleCategoryId; intro: string; sections: { title: string; paragraphs: string[] }[]; checklist: string[] };
export const publications: readonly Publication[] = [
  {
    "kind": "guides",
    "slug": "preparer-une-decision-importante",
    "title": "Préparer une décision importante",
    "description": "Clarifier ses critères, comparer les options et savoir quand décider sans attendre une certitude parfaite.",
    "categoryId": "argent-consommation",
    "intro": "Vous hésitez entre deux offres, un changement de projet ou un achat qui vous engage. Le but de cette méthode est de rendre votre choix explicable : comprendre ce que vous cherchez, ce que vous acceptez et ce qui pourrait vous faire changer d’avis.",
    "sections": [
      {
        "title": "Formuler le vrai besoin",
        "paragraphs": [
          "Écrivez la décision en une phrase, avec une échéance réelle. « Choisir un ordinateur pour mon travail avant la fin du mois » est plus utile que « trouver le meilleur ordinateur ». La première formulation donne un usage et une limite ; la seconde invite à comparer sans fin.",
          "Distinguez ensuite ce qui est indispensable de ce qui est simplement agréable. Gardez trois critères essentiels, formulés de manière observable. Par exemple : faire fonctionner les logiciels utilisés, pouvoir transporter l’appareil et respecter une enveloppe définie à l’avance."
        ]
      },
      {
        "title": "Comparer sur la même base",
        "paragraphs": [
          "Pour chaque option, reprenez les mêmes critères. Ajoutez le coût dans la durée, le temps de prise en main, les contraintes et la possibilité de revenir sur le choix. Notez aussi ce que vous ne savez pas encore : une case vide n’est pas une mauvaise note, c’est une question à poser.",
          "Incluez une option souvent oubliée : conserver la situation actuelle. Elle peut avoir un coût ou des inconvénients, mais elle permet de vérifier si le changement répond à un besoin ou seulement à une envie du moment."
        ]
      },
      {
        "title": "Chercher ce qui pourrait invalider votre préférence",
        "paragraphs": [
          "Une fois votre favori identifié, cherchez volontairement son principal défaut. Quelle contrainte rendrait ce choix inadapté ? Quelle information vous manque pour le savoir ? Contactez la personne qui peut répondre, plutôt que de continuer à accumuler des comparatifs généraux.",
          "Exemple : un outil semble idéal, mais l’export des données est incertain. Tester cet export sur quelques fichiers apporte une information plus décisive qu’une nouvelle présentation commerciale."
        ]
      },
      {
        "title": "Décider et garder une trace",
        "paragraphs": [
          "Résumez votre choix, les raisons et les limites acceptées. Si la décision est réversible, prévoyez une période d’essai avec un critère concret de réussite. Si elle vous engage longtemps, prenez le temps de vérifier les conditions et de solliciter un avis adapté à l’enjeu.",
          "Une décision peut être raisonnable sans garantir un résultat parfait. Lors du bilan, comparez ce que vous pouviez savoir au moment du choix et ce que vous avez appris ensuite. Cela vous aidera davantage que de juger uniquement le résultat."
        ]
      }
    ],
    "checklist": [
      "Mon besoin tient en une phrase.",
      "Mes critères essentiels sont explicites.",
      "J’ai comparé les coûts et contraintes sur la même durée.",
      "J’ai vérifié le principal point d’incertitude.",
      "Je sais quand et comment réévaluer mon choix."
    ]
  },
  {
    "kind": "guides",
    "slug": "reunion-qui-aboutit",
    "title": "Préparer une réunion qui aboutit",
    "description": "Passer d’un sujet vague à une décision claire, avec des responsabilités et une suite écrite.",
    "categoryId": "management-travail",
    "intro": "Une réunion utile ne se mesure pas au nombre de sujets abordés. Elle permet aux personnes présentes de repartir avec la même compréhension de ce qui a été décidé et de ce qui reste à faire.",
    "sections": [
      {
        "title": "Nommer le résultat attendu",
        "paragraphs": [
          "Avant de réserver un créneau, complétez cette phrase : « À la fin, nous aurons… ». Un choix entre deux options, une liste de blocages ou un plan de travail sont des résultats identifiables. « Faire un point » ne dit pas encore ce dont vous avez besoin.",
          "Si vous souhaitez seulement transmettre une information, un message écrit peut suffire. Réservez la réunion aux échanges qui demandent des questions, une confrontation des contraintes ou une décision collective."
        ]
      },
      {
        "title": "Donner les éléments avant de discuter",
        "paragraphs": [
          "Envoyez une courte note : contexte, question à résoudre, options et contraintes connues. Précisez qui apporte une expertise, qui réalise le travail et qui peut trancher. Il ne s’agit pas d’imposer une hiérarchie de parole, mais d’éviter une décision dont personne ne se sent responsable.",
          "Exemple : pour choisir une date de lancement, partagez les tâches restantes et les dépendances. Les participants pourront discuter d’un calendrier fondé sur le travail réel, au lieu de défendre chacun une date isolée."
        ]
      },
      {
        "title": "Distinguer faits, hypothèses et désaccords",
        "paragraphs": [
          "Pendant l’échange, reformulez les affirmations importantes. « Nous avons trois demandes en attente » est un fait vérifiable ; « la demande va doubler » est une hypothèse. Les deux peuvent compter, à condition de ne pas leur donner le même statut.",
          "Quand le groupe tourne en rond, identifiez le point qui manque : une information, un critère commun ou une personne habilitée à décider. Donnez à ce point un responsable et une prochaine étape. Une incertitude explicitée vaut mieux qu’un accord de façade."
        ]
      },
      {
        "title": "Terminer par une lecture commune",
        "paragraphs": [
          "Gardez quelques minutes pour relire la décision, les actions, leurs responsables et leurs échéances. Demandez à chacun si une contrainte importante a été oubliée. Diffusez ensuite une synthèse courte, à un endroit que l’équipe retrouve facilement.",
          "Lors de l’échange suivant, partez de cette trace. Qu’a-t-on fait ? Qu’a-t-on appris ? Qu’est-ce qui nécessite réellement une nouvelle décision ? Cela évite de rouvrir le même débat sans information nouvelle."
        ]
      }
    ],
    "checklist": [
      "Le résultat attendu est formulé.",
      "Les participants ont le contexte nécessaire.",
      "Les hypothèses sont distinguées des faits.",
      "Chaque action a un responsable et une échéance.",
      "La synthèse est accessible à toute l’équipe concernée."
    ]
  },
  {
    "kind": "guides",
    "slug": "tester-une-idee-avant-de-la-developper",
    "title": "Tester une idée avant de la développer",
    "description": "Transformer une intuition en une petite expérience, avec une question précise et un bilan honnête.",
    "categoryId": "entrepreneuriat",
    "intro": "Une idée peut paraître évidente à celui qui la porte et rester floue pour ceux à qui elle s’adresse. Avant de construire une solution complète, cherchez une façon simple d’observer le problème et de tester votre proposition.",
    "sections": [
      {
        "title": "Décrire une situation, pas un public abstrait",
        "paragraphs": [
          "« Les petites entreprises » est un ensemble trop large pour commencer. Décrivez plutôt une personne dans une situation concrète : un indépendant qui perd du temps à retrouver les documents d’un projet, par exemple. Demandez comment il s’y prend aujourd’hui, ce qui bloque et quelles conséquences cela a.",
          "Évitez de présenter immédiatement votre solution. Une conversation sur les habitudes réelles vous apprend autre chose qu’une réponse polie à la question « trouvez-vous mon idée intéressante ? ». Notez les exemples précis et les mots employés."
        ]
      },
      {
        "title": "Choisir une seule hypothèse",
        "paragraphs": [
          "Écrivez ce qui doit être vrai pour que votre projet soit utile. Par exemple : les personnes concernées rencontrent ce problème chaque semaine et acceptent d’essayer une nouvelle façon de travailler. Vous pourrez tester d’autres points ensuite ; les mélanger rend le résultat difficile à interpréter.",
          "Définissez avant l’essai ce que vous observerez. Un rendez-vous accepté, un document réellement confié ou l’utilisation répétée d’une maquette sont des comportements. Un compliment est encourageant, mais ne prouve pas qu’une solution sera utilisée."
        ]
      },
      {
        "title": "Faire le plus petit essai honnête",
        "paragraphs": [
          "Une démonstration, un prototype papier ou un service réalisé manuellement peuvent suffire. Dites clairement ce qui fonctionne, ce qui est simulé et ce qui n’existe pas encore. Ne promettez pas une disponibilité ou une automatisation que vous ne pouvez pas assurer.",
          "Fixez une durée et une limite de moyens. Pour un essai de classement de documents, vous pourriez travailler sur un petit jeu de données fictives avec quelques personnes volontaires. L’objectif est d’apprendre sur l’usage, pas de donner l’apparence d’un produit terminé."
        ]
      },
      {
        "title": "Décider de la suite à partir des observations",
        "paragraphs": [
          "Séparez ce que vous avez observé de votre interprétation. « Deux personnes ont essayé une fois » ne signifie pas « le besoin est validé ». Demandez ce qui a empêché de recommencer et comparez ces réponses à votre hypothèse initiale.",
          "Votre bilan peut conduire à poursuivre, modifier le public visé, simplifier la proposition ou arrêter. Gardez une courte trace du test et de ses limites. Une expérience modeste n’établit pas la taille d’un marché ; elle permet de choisir une prochaine étape plus informée."
        ]
      }
    ],
    "checklist": [
      "Le problème correspond à une situation réelle.",
      "Une seule hypothèse guide mon essai.",
      "Le comportement attendu est défini à l’avance.",
      "Les participants savent ce qui est expérimental.",
      "Une date de bilan et une limite de moyens sont fixées."
    ]
  },
  {
    "kind": "blog",
    "slug": "une-regle-est-un-repere",
    "title": "Une règle est un repère, pas un automatisme",
    "description": "Comment utiliser des principes simples sans perdre de vue la situation à laquelle ils s’appliquent.",
    "categoryId": "management-travail",
    "intro": "« Prendre du recul », « vérifier avant de croire », « faire simple » : ces phrases sont utiles parce qu’elles se retiennent. Leur brièveté ne doit pourtant pas nous faire oublier le travail de jugement qui commence au moment de les appliquer.",
    "sections": [
      {
        "title": "Une bonne question derrière une phrase courte",
        "paragraphs": [
          "Une règle peut servir de déclencheur. « Ne pas décider sous pression » invite à se demander qui impose le délai, ce qui arrivera si l’on attend et quelle vérification reste possible. Elle n’exige pas de reporter toute décision : certaines situations demandent d’agir vite. Elle invite à reconnaître la pression au lieu de la laisser décider à notre place.",
          "Cette façon de lire transforme une consigne absolue en une série de questions utiles. Le principe conserve sa force, mais laisse une place à la situation, aux contraintes et aux personnes concernées."
        ]
      },
      {
        "title": "Quand deux principes semblent se contredire",
        "paragraphs": [
          "Faire simple et vérifier les détails peuvent sembler incompatibles. Dans un projet, vous pouvez pourtant choisir une solution simple tout en contrôlant le point dont dépend sa fiabilité. Le désaccord apparent disparaît quand on précise à quoi s’applique chaque principe.",
          "Prenons une petite réunion : un ordre du jour court aide à se concentrer ; une décision consignée avec précision aide à agir ensuite. Ajouter dix sujets n’améliore pas la préparation, et réduire la synthèse à « tout est bon » n’améliore pas la simplicité."
        ]
      },
      {
        "title": "Essayer, puis revenir au contexte",
        "paragraphs": [
          "Choisissez un principe pour une situation concrète, plutôt que de chercher à tout appliquer. Notez ce qu’il vous a fait remarquer, ce que vous avez changé et ce qui reste difficile. Le but n’est pas de vous donner une note, mais de comprendre si ce repère vous aide.",
          "C’est aussi la raison pour laquelle cette bibliothèque ne classe pas ses règles par importance. Le bon point de départ dépend de votre situation. Une règle devient utile quand elle éclaire une décision, pas simplement parce qu’elle figure en tête d’une liste."
        ]
      }
    ],
    "checklist": [
      "Quelle question cette règle m’invite-t-elle à poser ?",
      "Dans mon contexte, quelle limite dois-je garder en tête ?",
      "Quelle petite action permettrait de l’essayer ?"
    ]
  },
  {
    "kind": "blog",
    "slug": "garder-une-trace-de-ses-decisions",
    "title": "Garder une trace de ses décisions",
    "description": "Une note courte pour se souvenir des raisons d’un choix et apprendre sans réécrire le passé.",
    "categoryId": "entrepreneuriat",
    "intro": "Après un résultat heureux, il est tentant de penser que tout était évident. Après un échec, il est facile de croire que l’on aurait dû le prévoir. Écrire quelques lignes au moment du choix permet de retrouver ce que l’on savait réellement.",
    "sections": [
      {
        "title": "Une note plutôt qu’un dossier",
        "paragraphs": [
          "Le format peut tenir sur une demi-page : la décision à prendre, les options envisagées, les informations disponibles, les incertitudes et la raison du choix. Ajoutez la date et, si cela a du sens, le moment où vous reviendrez sur le résultat.",
          "Ce document n’a pas vocation à justifier tout ce que vous faites. Réservez-le aux décisions que vous aimeriez comprendre plus tard : choisir une méthode de travail, lancer une expérimentation ou modifier l’organisation d’un projet."
        ]
      },
      {
        "title": "Écrire aussi ce qui ferait changer d’avis",
        "paragraphs": [
          "Une décision n’est pas une promesse de ne jamais évoluer. Préciser un signal de réévaluation permet de distinguer la persévérance de l’obstination. « Nous essayons ce fonctionnement pendant un mois ; nous le réexaminons si les demandes restent sans responsable » est plus clair que « nous verrons ».",
          "Imaginez une équipe qui regroupe ses échanges sur un outil unique. Elle peut noter son objectif, les contraintes de chacun et ce qu’elle observera. Si l’essai déçoit, elle disposera d’un point de comparaison au lieu d’un débat sur les souvenirs de chacun."
        ]
      },
      {
        "title": "Relire pour apprendre, pas pour distribuer les torts",
        "paragraphs": [
          "Au bilan, distinguez la qualité de la démarche et le résultat obtenu. Aviez-vous ignoré une information accessible ? Une hypothèse s’est-elle révélée fausse ? Un événement imprévisible a-t-il changé la situation ? Ces questions orientent des améliorations différentes.",
          "Terminez par un seul ajustement à réutiliser : demander un avis plus tôt, tester une contrainte technique ou expliciter le responsable d’une action. Une trace de décision devient intéressante lorsqu’elle change votre manière de préparer la suivante."
        ]
      }
    ],
    "checklist": [
      "La décision et ses raisons sont écrites.",
      "Les inconnues sont visibles.",
      "Un signal de réévaluation est prévu.",
      "Le bilan débouche sur un ajustement concret."
    ]
  }
];
export function readingMinutes(item: Publication) { return Math.max(1, Math.ceil([item.intro, ...item.sections.flatMap(s => [s.title,...s.paragraphs]), ...item.checklist].join(" ").split(/\s+/).length / 180)); }
