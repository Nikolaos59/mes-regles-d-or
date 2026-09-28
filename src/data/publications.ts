import type { RuleCategoryId } from "@/data/rules";
export type Publication = { kind: "guides" | "blog"; slug: string; title: string; description: string; categoryId: RuleCategoryId; intro: string; sections: { title: string; paragraphs: string[] }[]; checklist: string[]; reviewedAt?: string; sources?: { label: string; url: string; kind: "inspiration" | "reference" }[] };
export const publications: readonly Publication[] = [
{
  "kind": "guides",
  "slug": "degat-des-eaux-bons-reflexes",
  "title": "Dégât des eaux : agir vite et garder les preuves",
  "description": "Limiter les dommages, prévenir son assurance et préparer un dossier clair sans effacer les preuves.",
  "categoryId": "argent-consommation",
  "reviewedAt": "2026-09-28",
  "intro": "Une fuite demande deux réflexes complémentaires : empêcher les dégâts de s’aggraver et documenter ce qui s’est passé. Ce guide distingue les mesures urgentes de la remise en état, pour agir dans le bon ordre.",
  "sections": [
    {
      "title": "Limiter les dégâts sans se mettre en danger",
      "paragraphs": [
        "Si vous pouvez le faire sans risque, fermez l’arrivée d’eau concernée. Si la fuite vient d’ailleurs, prévenez le voisin ou le syndic. Faites réparer la fuite rapidement ; ne manipulez pas d’installation électrique mouillée et sollicitez une intervention adaptée en cas de danger.",
        "La réparation urgente de la fuite est différente de la réfection des peintures ou des sols. Pour cette remise en état, obtenez d’abord l’accord de votre assureur. Gardez les justificatifs des interventions urgentes."
      ]
    },
    {
      "title": "Déclarer rapidement et décrire les faits",
      "paragraphs": [
        "Prévenez votre assureur dès la découverte. Le délai prévu au contrat ne peut en principe être inférieur à cinq jours ouvrés. Vérifiez ses modalités de déclaration. Un constat amiable peut faciliter le dossier, mais il n’est pas obligatoire.",
        "Notez la date, les pièces touchées, les dommages visibles et les démarches entreprises. Distinguez les faits observés de vos suppositions : « de l’eau apparaît au plafond » ne permet pas encore d’affirmer quelle installation fuit. Conservez la confirmation de votre déclaration."
      ]
    },
    {
      "title": "Photographier et conserver les éléments utiles",
      "paragraphs": [
        "Prenez des vues d’ensemble et des détails des dommages, sans vous exposer. Faites une liste des biens touchés et rassemblez les factures disponibles. Avant de jeter un objet endommagé, demandez les consignes de l’assureur ; la conservation des preuves ne doit pas créer de danger.",
        "Exemple fictif : une fuite a détrempé un meuble. Photographiez son emplacement, les zones abîmées et son identification, puis ajoutez sa facture si vous l’avez. Un dossier organisé sera plus facile à examiner qu’une série de photos sans contexte."
      ]
    },
    {
      "title": "Préparer l’expertise sans la présumer obligatoire",
      "paragraphs": [
        "L’expertise n’est pas systématique. Lorsqu’un expert intervient, il examine notamment les causes et les dommages. Préparez vos documents et signalez les éléments qui pourraient être oubliés. Le montant de 1 600 euros évoqué dans la transcription ne doit pas être présenté comme une obligation légale universelle d’expertise.",
        "Si vous contestez ses conclusions, demandez des explications et renseignez-vous sur la contre-expertise. Vérifiez auparavant la prise en charge de ses frais dans votre contrat. Ne confondez pas le coût estimé des réparations et l’indemnité finalement proposée."
      ]
    },
    {
      "title": "Vérifier la garantie mobilisée",
      "paragraphs": [
        "L’origine de l’eau, les exclusions et les franchises comptent : toute entrée d’eau ne garantit pas une indemnisation. Demandez à l’assureur quelle garantie il examine et quels documents il attend.",
        "Une inondation relevant du régime des catastrophes naturelles obéit à des conditions spécifiques, notamment un arrêté de reconnaissance et une assurance ouvrant droit à cette garantie. Pour ce régime, la déclaration doit être faite au plus tard trente jours après la publication de l’arrêté. Une forte pluie ne suffit donc pas, à elle seule, à garantir la prise en charge."
      ]
    }
  ],
  "checklist": [
    "La fuite et les dangers immédiats sont pris en charge.",
    "La déclaration est transmise et sa confirmation conservée.",
    "Les dommages sont photographiés et les justificatifs rassemblés.",
    "La remise en état attend les consignes de l’assureur.",
    "La garantie et les conditions de prise en charge sont vérifiées."
  ],
  "sources": [
    {
      "kind": "inspiration",
      "label": "La règle d’or — Dégât des eaux (transcription fournie par le lecteur ; repères 1:21, 2:19 et 2:27)",
      "url": "https://www.youtube.com/watch?v=NcnPI8KRmyE"
    },
    {
      "kind": "reference",
      "label": "Service-Public — Assurance dégâts des eaux",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F1352"
    },
    {
      "kind": "reference",
      "label": "Service-Public — Expertise en assurance habitation",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F3075"
    },
    {
      "kind": "reference",
      "label": "Service-Public — Indemnisation des catastrophes naturelles",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F3076"
    }
  ]
},
{
  "slug": "choisir-un-artisan",
  "title": "Avant les travaux : choisir un artisan et cadrer le devis",
  "description": "Vérifier son interlocuteur, préciser les travaux et conserver des engagements écrits avant de payer.",
  "intro": "Un prix séduisant ne suffit pas pour choisir la personne qui interviendra chez vous. Préparez un dossier simple : ce que vous attendez, ce que le professionnel propose et ce que vous acceptez de payer.",
  "sections": [
    {
      "title": "Identifier la personne qui s’engage",
      "paragraphs": [
        "Demandez le nom de l’entreprise et ses coordonnées. Comparez ces informations sur le devis, les échanges et les documents remis. Une différence mérite une explication avant de signer. Demandez aussi les justificatifs d’assurance pertinents pour les travaux envisagés et faites préciser ce qu’ils couvrent."
      ]
    },
    {
      "title": "Faire décrire le chantier",
      "paragraphs": [
        "Évitez les formulations comme « rénovation complète » sans détail. Demandez les prestations, les matériaux, les quantités, le prix et les frais annexes. Faites préciser le calendrier et les exclusions : évacuation des déchets, finitions ou remise en état peuvent changer la comparaison entre deux offres.",
        "Le devis accepté engage les parties. Prenez donc le temps de clarifier les points flous avant l’accord. Les obligations précises varient selon la prestation et les circonstances de conclusion du contrat ; la fiche DGCCRF citée ci-dessous détaille ces distinctions."
      ]
    },
    {
      "title": "Prévoir les paiements et les changements",
      "paragraphs": [
        "Faites écrire les montants et les échéances convenus. Évitez de régler tout le chantier avant sa réalisation. Pour une prestation supplémentaire, demandez une description et un prix écrits avant de donner votre accord. Un pourcentage conseillé dans une émission ne doit pas être confondu avec un plafond légal général.",
        "Exemple fictif : le devis prévoit la peinture des murs, mais pas la préparation d’un support abîmé. Faites chiffrer ce point avant le début des travaux, plutôt que de découvrir le supplément en cours de chantier."
      ]
    },
    {
      "title": "Garder une trace exploitable",
      "paragraphs": [
        "Conservez le devis accepté, les factures, les preuves de paiement et les échanges dans un même dossier. Photographiez les lieux avant et pendant l’intervention. Si un désaccord apparaît, décrivez par écrit les faits et votre demande ; faites-vous accompagner pour déterminer les recours adaptés à votre contrat."
      ]
    }
  ],
  "checklist": [
    "L’entreprise qui signe est identifiée.",
    "Les travaux inclus et exclus sont écrits.",
    "Le prix, le calendrier et les paiements sont clairs.",
    "Les justificatifs pertinents ont été demandés.",
    "Les modifications seront validées par écrit."
  ],
  "sources": [
    {
      "label": "RTL — Choisir son artisan, La règle d’or (2021)",
      "url": "https://www.rtl.fr/actu/economie-consommation/travaux-ce-qu-il-faut-verifier-avant-de-choisir-son-artisan-7900033983",
      "kind": "inspiration"
    },
    {
      "label": "DGCCRF — Devis",
      "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/devis",
      "kind": "reference"
    }
  ],
  "kind": "guides",
  "categoryId": "argent-consommation",
  "reviewedAt": "2026-09-27"
},
{
  "slug": "acheter-une-voiture-occasion",
  "title": "Voiture d’occasion : vérifier avant de s’engager",
  "description": "Croiser les documents, l’historique et l’état du véhicule plutôt que se fier à une annonce rassurante.",
  "intro": "Une visite se prépare avant de partir. Demandez les documents disponibles et notez les questions qui conditionnent votre décision. Le temps consacré aux vérifications fait partie de l’achat.",
  "sections": [
    {
      "title": "Préparer la visite",
      "paragraphs": [
        "Demandez qui vend le véhicule, à quel titre, et quels documents seront présentés. Gardez une copie de l’annonce pour comparer les informations promises avec celles constatées sur place. Si une question importante reste sans réponse, ne laissez pas l’urgence du vendeur devenir votre échéance."
      ]
    },
    {
      "title": "Croiser l’historique et les documents",
      "paragraphs": [
        "Demandez au propriétaire de partager le rapport HistoVec. Il donne accès à des informations administratives enregistrées sur le véhicule ; confrontez-les aux documents et aux explications du vendeur. Consultez également les factures d’entretien disponibles. Aucune pièce, prise seule, ne remplace l’examen de l’état réel de la voiture."
      ]
    },
    {
      "title": "Lire le contrôle technique",
      "paragraphs": [
        "Pour une voiture de plus de quatre ans vendue à un particulier, le contrôle technique doit en principe dater de moins de six mois au dépôt de la demande de nouvelle carte grise. Lorsqu’une contre-visite est prescrite, le délai applicable doit être respecté. Des dispenses et des règles différentes existent selon le véhicule et l’acheteur : vérifiez votre situation dans la fiche Service-Public.",
        "Ne vous contentez pas de la mention « contrôle OK » dans l’annonce. Lisez le procès-verbal, demandez les explications nécessaires et, en cas de doute sur l’état mécanique, faites examiner le véhicule par un professionnel indépendant."
      ]
    },
    {
      "title": "Décider après les vérifications",
      "paragraphs": [
        "Exemple fictif : l’annonce décrit une voiture parfaitement entretenue, mais les factures récentes manquent. Ce n’est pas une preuve de fraude ; c’est une incertitude à résoudre avant de prendre un engagement. Demandez les éléments disponibles et décidez si ce niveau d’incertitude vous convient.",
        "Conservez les documents de vente et les engagements écrits. Pour un achat engageant votre budget, mieux vaut renoncer à une offre insuffisamment documentée que considérer une remise comme une réponse aux questions restées ouvertes."
      ]
    }
  ],
  "checklist": [
    "L’annonce et les documents sont cohérents.",
    "Le rapport HistoVec a été demandé.",
    "Le contrôle technique applicable a été lu.",
    "L’entretien et l’état réel ont été examinés.",
    "Les incertitudes importantes sont résolues avant l’engagement."
  ],
  "sources": [
    {
      "label": "RTL — Voiture d’occasion : les conseils pour éviter les arnaques (2022)",
      "url": "https://www.rtl.fr/actu/economie-consommation/voiture-d-occasion-carte-grise-controle-technique-les-conseils-pour-eviter-les-arnaques-7900165845",
      "kind": "inspiration"
    },
    {
      "label": "Service-Public — HistoVec",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/R68264",
      "kind": "reference"
    },
    {
      "label": "Service-Public — Vente et contrôle technique",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F16540",
      "kind": "reference"
    }
  ],
  "kind": "guides",
  "categoryId": "argent-consommation",
  "reviewedAt": "2026-09-27"
},
{
  "slug": "acheter-en-ligne-avec-methode",
  "title": "Achat en ligne : vérifier avant de payer",
  "description": "Identifier le vendeur, lire les conditions et conserver les preuves pour éviter un achat mal préparé.",
  "intro": "Un site soigné, une promotion et des commentaires enthousiastes ne suffisent pas pour décider. Avant de payer, vérifiez à qui vous achetez, ce qui est vendu et comment la commande doit se dérouler.",
  "sections": [
    {
      "title": "Identifier le vendeur réel",
      "paragraphs": [
        "Cherchez son identité et ses coordonnées. Sur une place de marché, distinguez la plateforme du vendeur de l’article. Consultez les conditions de vente, le pays d’établissement et les modalités de contact. Si ces éléments sont absents ou incohérents, interrompez votre achat pour vérifier."
      ]
    },
    {
      "title": "Relire le panier sans se presser",
      "paragraphs": [
        "Contrôlez les caractéristiques, le montant final, la livraison et les frais de retour annoncés. Repérez les options ajoutées ou un éventuel abonnement. Le cadenas HTTPS protège la connexion, mais ne prouve pas à lui seul le sérieux du vendeur.",
        "Exemple fictif : un produit paraît moins cher, mais le panier ajoute une livraison coûteuse et une option récurrente. Comparez le total réellement demandé avec votre besoin, plutôt que la réduction mise en avant."
      ]
    },
    {
      "title": "Comprendre la possibilité de retour",
      "paragraphs": [
        "Pour un bien acheté à distance auprès d’un professionnel, le consommateur dispose en général de quatorze jours à compter de sa réception pour notifier sa rétractation. Il existe des exceptions, notamment pour certains biens personnalisés ou périssables. Ce droit ne s’applique pas de la même façon à une vente entre particuliers. Vérifiez les conditions applicables avant de commander."
      ]
    },
    {
      "title": "Conserver les preuves et réagir par écrit",
      "paragraphs": [
        "Gardez la confirmation de commande, la description de l’offre et les justificatifs de paiement. Si la livraison ou le produit pose problème, rassemblez les faits et adressez une demande précise au vendeur. La fiche officielle sur les litiges en ligne indique les démarches possibles selon le problème.",
        "Évitez de multiplier des messages dispersés : une chronologie avec les dates, les références et la réponse attendue permet de présenter clairement votre dossier. Ne transmettez pas vos codes bancaires à une personne qui prétend régler le litige."
      ]
    }
  ],
  "checklist": [
    "Je sais qui est le vendeur.",
    "J’ai vérifié le montant final et les options.",
    "Les conditions de livraison et de retour sont lisibles.",
    "Je connais les exceptions éventuelles à la rétractation.",
    "Les preuves de commande et de paiement sont conservées."
  ],
  "sources": [
    {
      "label": "RTL — Acheter sur Internet, La règle d’or (2022)",
      "url": "https://www.rtl.fr/actu/economie-consommation/vente-en-ligne-que-faut-il-savoir-avant-d-acheter-sur-internet-7900141653",
      "kind": "inspiration"
    },
    {
      "label": "DGCCRF — Acheter sur Internet de façon sécurisée",
      "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/comment-realiser-des-achats-sur-internet-de-facon-securisee",
      "kind": "reference"
    },
    {
      "label": "Ministère de l’Économie — Droit de rétractation",
      "url": "https://www.economie.gouv.fr/particuliers/mes-droits-conso/bien-consommer/vente-distance-tout-savoir-sur-votre-droit-de-retractation",
      "kind": "reference"
    },
    {
      "label": "Ministère de l’Économie — Litiges en ligne",
      "url": "https://www.economie.gouv.fr/particuliers/mes-droits-conso/gerer-un-litige/achats-et-services-en-ligne-6-conseils-en-cas-de-litige",
      "kind": "reference"
    }
  ],
  "kind": "guides",
  "categoryId": "argent-consommation",
  "reviewedAt": "2026-09-27"
},
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
