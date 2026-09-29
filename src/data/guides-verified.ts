import type { Publication } from "@/data/publications";

export const verifiedGuides: readonly Publication[] = [
{
  "kind": "guides",
  "slug": "fuite-donnees-personnelles",
  "title": "Fuite de données : protéger ses comptes et déjouer les relances",
  "themeId": "numerique",
  "categoryId": "cybersecurite",
  "description": "Identifier les informations exposées et réagir sans tomber dans une seconde arnaque.",
  "intro": "La règle d’or : vérifiez l’alerte par un canal indépendant, puis adaptez vos démarches aux données réellement concernées. Une fuite peut alimenter des tentatives de fraude longtemps après sa découverte.",
  "sections": [
    {
      "title": "Comprendre ce qui a été exposé",
      "paragraphs": [
        "ZATAZ souligne que des informations dispersées peuvent être recoupées pour rendre une escroquerie crédible. Un nom, une ancienne commande ou une adresse exacte ne prouvent donc pas l’identité de la personne qui vous contacte.",
        "Consultez l’annonce sur le site officiel de l’organisme ou dans votre espace habituel. Demandez quelles données vous concernant ont été touchées. La CNIL déconseille les sites qui prétendent détenir les données et proposent de vérifier votre présence dans la fuite."
      ]
    },
    {
      "title": "Sécuriser les accès concernés",
      "paragraphs": [
        "Changez le mot de passe du service concerné et celui des autres comptes où vous l’aviez réutilisé. Choisissez un mot de passe distinct pour chaque compte et activez l’authentification multifacteur lorsqu’elle est proposée. Procédez depuis l’application ou le site officiel, sans suivre le lien d’un message alarmant."
      ]
    },
    {
      "title": "Déjouer les messages et appels ciblés",
      "paragraphs": [
        "Un appel évoque une fraude et demande un code, un virement ou une validation urgente ? Interrompez l’échange et retrouvez vous-même les coordonnées officielles de l’organisme. Ne confiez pas votre carte bancaire à un coursier envoyé par un prétendu service antifraude."
      ]
    },
    {
      "title": "Si des coordonnées bancaires ont fuité",
      "paragraphs": [
        "Prévenez votre banque si votre IBAN est exposé. Contrôlez régulièrement les opérations et les créanciers autorisés. Signalez immédiatement un prélèvement inconnu et demandez à votre conseiller les démarches adaptées. Une fuite d’IBAN et une carte compromise appellent des mesures différentes : précisez les informations divulguées."
      ]
    },
    {
      "title": "Garder les preuves et demander de l’aide",
      "paragraphs": [
        "Archivez l’alerte, les échanges et les opérations suspectes. En cas d’utilisation frauduleuse, conservez les justificatifs et déposez plainte auprès de la police ou de la gendarmerie. Si vous estimez que l’organisme a insuffisamment sécurisé vos données, une plainte auprès de la CNIL relève d’une démarche distincte. Le service public 17Cyber peut vous orienter."
      ]
    }
  ],
  "checklist": [
    "Alerte confirmée auprès de l’organisme concerné.",
    "Données exposées identifiées.",
    "Mots de passe concernés remplacés et double authentification activée.",
    "Opérations bancaires surveillées si nécessaire.",
    "Messages suspects et justificatifs conservés."
  ],
  "reviewedAt": "2026-09-29",
  "sources": [
    {
      "kind": "inspiration",
      "label": "ZATAZ — Vos données ont-elles déjà fuité ?",
      "url": "https://www.zataz.com/vos-donnees-ont-elles-deja-fuite/"
    },
    {
      "kind": "reference",
      "label": "Cybermalveillance.gouv.fr — Fuite de données personnelles : que faire ?",
      "url": "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/que-faire-en-cas-de-fuite-de-donnees-personnelles"
    },
    {
      "kind": "reference",
      "label": "CNIL — Fuite de données et vol de votre IBAN",
      "url": "https://www.cnil.fr/fr/fuite-de-donnees-sur-internet-et-vol-de-votre-iban-comment-vous-proteger-si-vous-etes-concerne"
    }
  ]
}
,
  {
    "kind": "guides",
    "slug": "faux-conseiller-bancaire",
    "title": "Faux conseiller bancaire : interrompre le piège",
    "themeId": "numerique",
    "categoryId": "cybersecurite",
    "description": "Vérifier l’appel et agir rapidement si des opérations ont été validées.",
    "intro": "La règle d’or : raccrochez et contactez votre banque par votre canal habituel avant toute validation. Un numéro affiché et des informations exactes ne prouvent pas l’identité de l’appelant.",
    "sections": [
      {
        "title": "Pendant l’appel",
        "paragraphs": [
          "Ne donnez aucun code et ne confirmez pas une opération présentée comme une annulation de fraude. Ne remettez pas votre carte à un coursier. Retrouvez vous-même le contact de votre banque dans votre application ou vos documents."
        ]
      },
      {
        "title": "Si vous avez déjà agi",
        "paragraphs": [
          "Alertez immédiatement la banque, faites opposition à la carte compromise et signalez précisément les paiements ou virements concernés. Demandez les mesures de blocage et de récupération possibles. Faites réinitialiser vos accès si nécessaire."
        ]
      },
      {
        "title": "Conserver les éléments utiles",
        "paragraphs": [
          "Gardez les messages, numéros, horaires et références des opérations ; déposez plainte. Une demande de remboursement doit être examinée selon les faits : ne présumez ni son acceptation ni son refus."
        ]
      }
    ],
    "checklist": [
      "Contact bancaire retrouvé indépendamment.",
      "Opérations suspectes listées.",
      "Preuves conservées."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Cybermalveillance.gouv.fr — Fraude au faux conseiller bancaire",
        "url": "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/fraude-faux-conseiller-bancaire"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "colis-livre-introuvable",
    "title": "Colis annoncé livré mais introuvable : contester par écrit",
    "themeId": "achats",
    "categoryId": "argent-consommation",
    "description": "Rassembler le suivi et solliciter le vendeur professionnel.",
    "intro": "La règle d’or : pour un achat en ligne auprès d’un professionnel, adressez la réclamation au vendeur, sans vous limiter au transporteur.",
    "sections": [
      {
        "title": "Vérifier sans attendre",
        "paragraphs": [
          "Contrôlez l’adresse de commande, le suivi et les éventuelles consignes de livraison. Enregistrez une capture du statut et la confirmation d’achat. Notez clairement que vous n’avez pas reçu le colis, sans signer de déclaration inexacte."
        ]
      },
      {
        "title": "Contacter le bon interlocuteur",
        "paragraphs": [
          "Demandez au vendeur une vérification de la remise et une solution. Il répond en principe du transport organisé par ses soins. La situation diffère si vous avez choisi un transporteur autre que ceux proposés. Sur une marketplace, identifiez le vendeur réel."
        ]
      },
      {
        "title": "Formaliser la suite",
        "paragraphs": [
          "Conservez les réponses et les pièces demandées. Pour un litige transfrontalier européen, le Centre Européen des Consommateurs peut vous orienter. Une mention informatique « livré » doit être confrontée aux faits : expliquez précisément votre contestation."
        ]
      }
    ],
    "checklist": [
      "Commande et suivi archivés.",
      "Vendeur identifié.",
      "Réclamation datée conservée."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Centre Européen des Consommateurs — Réception de colis",
        "url": "https://www.europe-consommateurs.eu/thematiques/achats/colis/reception/"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "appareil-panne-garantie",
    "title": "Appareil en panne : identifier la garantie à utiliser",
    "themeId": "achats",
    "categoryId": "argent-consommation",
    "description": "Distinguer garantie légale et garantie commerciale avant de payer une réparation.",
    "intro": "La règle d’or : pour la garantie légale de conformité, contactez le vendeur professionnel avec votre preuve d’achat.",
    "sections": [
      {
        "title": "Qualifier le problème",
        "paragraphs": [
          "Décrivez le défaut, son apparition et les conditions d’utilisation. La garantie concerne une non-conformité existant à la délivrance ; une mauvaise utilisation n’est pas couverte. Conservez facture, date de réception, photos et échanges."
        ]
      },
      {
        "title": "Demander la prise en charge",
        "paragraphs": [
          "Pour un bien matériel, le délai de principe est de deux ans après sa délivrance. Demandez réparation ou remplacement selon les conditions légales. Un remboursement immédiat n’est pas automatique ; il devient possible dans certaines situations prévues par la loi."
        ]
      },
      {
        "title": "Éviter la confusion",
        "paragraphs": [
          "Une extension payante ou une garantie du fabricant est distincte de la garantie légale. Ne concluez pas que vous n’avez aucun droit parce que cette offre commerciale est expirée. Des règles particulières existent pour les éléments numériques et les biens d’occasion : consultez la fiche officielle."
        ]
      }
    ],
    "checklist": [
      "Date de délivrance retrouvée.",
      "Défaut documenté.",
      "Vendeur sollicité par écrit."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Service Public — Garantie légale de conformité",
        "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F11094"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "achat-retractation",
    "title": "Achat en ligne : se rétracter sans rater les étapes",
    "themeId": "achats",
    "categoryId": "argent-consommation",
    "description": "Vérifier le droit applicable, notifier sa décision et prouver le retour.",
    "intro": "La règle d’or : annoncez explicitement votre rétractation ; renvoyer simplement le colis ne suffit pas.",
    "sections": [
      {
        "title": "Vérifier que le droit existe",
        "paragraphs": [
          "Pour un achat de bien à distance auprès d’un professionnel européen, le délai est en principe de quatorze jours à compter du lendemain de la réception. Des exceptions concernent notamment les produits personnalisés ou périssables. Un achat en magasin n’ouvre pas systématiquement ce droit."
        ]
      },
      {
        "title": "Notifier puis retourner",
        "paragraphs": [
          "Utilisez le formulaire proposé ou un écrit clair et conservez une preuve d’envoi. Renvoyez ensuite le bien dans les quatorze jours suivant la notification, à l’adresse indiquée. Vérifiez les frais de retour annoncés avant l’achat."
        ]
      },
      {
        "title": "Suivre le remboursement",
        "paragraphs": [
          "Gardez la preuve d’expédition et photographiez le contenu. Le vendeur peut, sous conditions, différer le remboursement jusqu’au retour du bien ou à la preuve d’envoi. Si le produit est défectueux, distinguez cette démarche d’une demande au titre de la garantie."
        ]
      }
    ],
    "checklist": [
      "Exceptions vérifiées.",
      "Décision notifiée.",
      "Retour traçable conservé."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Centre Européen des Consommateurs — Rétractation",
        "url": "https://www.europe-consommateurs.eu/thematiques/garanties/retractation/"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "arrhes-ou-acompte",
    "title": "Arrhes ou acompte : savoir à quoi le versement engage",
    "themeId": "achats",
    "categoryId": "argent-consommation",
    "description": "Lire la qualification du paiement avant de réserver ou commander.",
    "intro": "La règle d’or : faites écrire la nature du versement et les conditions d’annulation avant de payer.",
    "sections": [
      {
        "title": "Lire les mots du contrat",
        "paragraphs": [
          "Un acompte engage en principe fermement les deux parties. Les arrhes permettent généralement au consommateur de se désister en perdant la somme versée. Dans les contrats de consommation concernés, une avance non qualifiée est en principe considérée comme des arrhes."
        ]
      },
      {
        "title": "Ne pas confondre les mécanismes",
        "paragraphs": [
          "Ces règles ne suppriment pas un droit légal de rétractation lorsqu’il s’applique. Une annulation, une inexécution du professionnel et un changement d’avis ne se traitent pas de la même façon. Vérifiez les règles propres au contrat."
        ]
      },
      {
        "title": "Garder une preuve précise",
        "paragraphs": [
          "Demandez un reçu mentionnant le professionnel, le montant, la commande et la qualification du paiement. Avant d’accepter un avoir, vérifiez si vous pouvez demander un remboursement : un crédit à dépenser chez le vendeur n’est pas de l’argent restitué."
        ]
      }
    ],
    "checklist": [
      "Nature du versement écrite.",
      "Annulation comprise.",
      "Reçu et contrat conservés."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "DGCCRF — Acompte, arrhes, avoir",
        "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/acompte-arrhes-avoir"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "mediation-consommation",
    "title": "Litige commercial : préparer une médiation utile",
    "themeId": "achats",
    "categoryId": "argent-consommation",
    "description": "Constituer un dossier clair après une réclamation restée sans solution.",
    "intro": "La règle d’or : commencez par une réclamation écrite au professionnel et gardez sa trace.",
    "sections": [
      {
        "title": "Formuler une demande concrète",
        "paragraphs": [
          "Rappelez la commande, les dates, le problème et la solution souhaitée. Joignez les pièces utiles, sans noyer votre interlocuteur sous des échanges sans rapport. Conservez la réponse ou la preuve de votre démarche."
        ]
      },
      {
        "title": "Choisir le médiateur compétent",
        "paragraphs": [
          "Consultez les coordonnées indiquées par le professionnel et les conditions du dispositif. En principe, la saisine doit intervenir dans l’année suivant la réclamation écrite. Un litige déjà examiné ou en cours devant un autre médiateur ou un tribunal ne suit pas cette voie."
        ]
      },
      {
        "title": "Comprendre le résultat attendu",
        "paragraphs": [
          "La médiation de la consommation est gratuite pour le consommateur, hors frais éventuels de ses propres conseils ou expertises. Le médiateur propose une solution amiable ; ce n’est pas un jugement. Certaines matières sont exclues : vérifiez la recevabilité avant l’envoi."
        ]
      }
    ],
    "checklist": [
      "Réclamation préalable jointe.",
      "Médiateur et délai vérifiés.",
      "Solution demandée précisée."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Service Public Entreprendre — Médiation des litiges de consommation",
        "url": "https://entreprendre.service-public.gouv.fr/vosdroits/F33338"
      },
      {
        "kind": "reference",
        "label": "Ministère de l’Économie — Droits du consommateur en médiation",
        "url": "https://www.economie.gouv.fr/mediation-conso/vous-etes-un-consommateur/vos-droits"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "etat-lieux-entree",
    "title": "État des lieux : décrire maintenant pour éviter le litige",
    "themeId": "logement",
    "categoryId": "argent-consommation",
    "description": "Observer chaque pièce et conserver un document réellement précis.",
    "intro": "La règle d’or : décrivez les défauts dans l’état des lieux, plutôt que compter sur une promesse orale.",
    "sections": [
      {
        "title": "Prendre le temps de constater",
        "paragraphs": [
          "Pour un bail d’habitation principale, faites le tour du logement avec le bailleur ou son représentant, dans de bonnes conditions d’éclairage. Notez l’état des équipements, les traces, les clés et les relevés utiles. Des photos peuvent compléter une description précise."
        ]
      },
      {
        "title": "Relire avant de signer",
        "paragraphs": [
          "Demandez la correction des formulations qui ne correspondent pas à vos constatations. Conservez votre exemplaire dès la signature, y compris lorsque le document est électronique. Les deux états des lieux doivent permettre une comparaison lors du départ."
        ]
      },
      {
        "title": "Signaler un oubli rapidement",
        "paragraphs": [
          "Le locataire peut demander un complément dans les dix jours calendaires suivant l’état des lieux ; pour le chauffage, durant le premier mois de chauffe. Adressez une demande traçable. En cas de refus, la commission départementale de conciliation peut être saisie."
        ]
      }
    ],
    "checklist": [
      "Défauts décrits pièce par pièce.",
      "Exemplaire signé reçu.",
      "Oublis signalés à temps."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Service Public — État des lieux d’entrée",
        "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F31270"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "depot-garantie-restitution",
    "title": "Dépôt de garantie : vérifier le délai et les retenues",
    "themeId": "logement",
    "categoryId": "argent-consommation",
    "description": "Préparer la restitution et demander les justificatifs des sommes déduites.",
    "intro": "La règle d’or : gardez la preuve de remise des clés et transmettez votre nouvelle adresse.",
    "sections": [
      {
        "title": "Repérer le délai applicable",
        "paragraphs": [
          "Pour une location principale vide ou meublée soumise aux règles correspondantes, la restitution intervient en principe sous un mois si les états des lieux concordent, deux mois sinon. Le point de départ est la remise des clés, pas simplement le déménagement."
        ]
      },
      {
        "title": "Examiner les retenues",
        "paragraphs": [
          "Comparez les états des lieux et demandez les justificatifs : devis, factures ou impayés documentés. Une provision particulière peut subsister pour les charges de copropriété. Une somme retenue n’est pas justifiée par sa seule présence sur un décompte."
        ]
      },
      {
        "title": "Réclamer sans confondre loyer et dépôt",
        "paragraphs": [
          "Ne déduisez pas le dépôt du dernier loyer. Si la restitution tarde, adressez une mise en demeure ; une majoration peut être due sous conditions. En cas de désaccord persistant, vérifiez la démarche amiable préalable adaptée au montant du litige."
        ]
      }
    ],
    "checklist": [
      "Remise des clés prouvée.",
      "Nouvelle adresse transmise.",
      "Retenues et délai examinés."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Service Public — Dépôt de garantie",
        "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "facture-energie-contester",
    "title": "Facture d’énergie contestée : construire une réclamation",
    "themeId": "logement",
    "categoryId": "argent-consommation",
    "description": "Identifier le problème et garder une trace avant la médiation.",
    "intro": "La règle d’or : transformez votre contestation en une demande écrite, datée et accompagnée de pièces.",
    "sections": [
      {
        "title": "Identifier ce qui pose problème",
        "paragraphs": [
          "Rassemblez contrat, facture et éléments de consommation. Décrivez l’anomalie : prix appliqué, estimation, période ou prestation. Pour une facture ou un contrat de fourniture, contactez le fournisseur ; pour un problème de réseau, l’interlocuteur peut être différent."
        ]
      },
      {
        "title": "Écrire au service concerné",
        "paragraphs": [
          "Exposez les faits, les références client et la correction attendue. Utilisez un courrier, un courriel ou le formulaire de votre espace client. Gardez une copie de l’envoi et des réponses. Une succession d’appels seuls rend le dossier difficile à reconstituer."
        ]
      },
      {
        "title": "Passer à la médiation si nécessaire",
        "paragraphs": [
          "Après deux mois sans solution satisfaisante à votre réclamation écrite, vérifiez les conditions de saisine du médiateur national de l’énergie. La réclamation préalable est indispensable. La fiche officielle détaille les interlocuteurs selon le type de contrat et de difficulté."
        ]
      }
    ],
    "checklist": [
      "Anomalie décrite.",
      "Pièces regroupées.",
      "Date de réclamation conservée."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Énergie-Info — Réclamation sur un contrat ou une facture",
        "url": "https://www.energie-info.fr/fiche_pratique/jai-une-reclamation-concernant-mon-fournisseur-ou-le-gestionnaire-de-reseau/"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "depannage-domicile-urgence",
    "title": "Dépannage à domicile : garder la main malgré l’urgence",
    "themeId": "travaux",
    "categoryId": "argent-consommation",
    "description": "Faire préciser le prix et limiter l’intervention au besoin réel.",
    "intro": "La règle d’or : l’urgence ne dispense pas de comprendre et d’accepter par écrit l’intervention.",
    "sections": [
      {
        "title": "Avant le déplacement",
        "paragraphs": [
          "Demandez les frais de déplacement, les tarifs horaires ou forfaitaires, les majorations et le coût éventuel du devis. Si la situation le permet, comparez plusieurs professionnels. Ne choisissez pas uniquement sur une publicité qui imite un document officiel."
        ]
      },
      {
        "title": "Avant le premier geste",
        "paragraphs": [
          "Pour les prestations de dépannage concernées, un contrat écrit est requis dès le premier euro. Faites préciser les pièces, la main-d’œuvre et le total. Distinguez la réparation indispensable des travaux supplémentaires qui peuvent attendre une comparaison."
        ]
      },
      {
        "title": "Si le prix ou la prestation change",
        "paragraphs": [
          "Demandez une explication et un document correspondant avant d’accepter. Conservez contrat et facture. N’imaginez pas qu’un délai de rétractation annule automatiquement une réparation urgente : des exceptions existent. Signalez les pratiques douteuses via SignalConso."
        ]
      }
    ],
    "checklist": [
      "Tarifs annoncés.",
      "Intervention écrite comprise.",
      "Travaux supplémentaires examinés séparément."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "DGCCRF — Choisir un professionnel pour un dépannage",
        "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/plomberie-serrurerie-chauffage-choisir-le-bon-professionnel-pour-un-depannage-domicile"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "location-voiture-etat",
    "title": "Voiture de location : documenter le départ et le retour",
    "themeId": "automobile",
    "categoryId": "argent-consommation",
    "description": "Comparer les conditions et faire noter les dommages existants.",
    "intro": "La règle d’or : faites constater l’état du véhicule avec le loueur avant de partir et lors du retour.",
    "sections": [
      {
        "title": "Lire le coût complet",
        "paragraphs": [
          "Comparez kilométrage, carburant, dépôt de garantie, moyens de paiement acceptés et conditions de restitution. Vérifiez les assurances, exclusions et franchises : une option ne couvre pas nécessairement tous les dommages."
        ]
      },
      {
        "title": "Inspecter avant de rouler",
        "paragraphs": [
          "Faites inscrire les rayures, chocs et autres défauts sur la fiche, sur tous les exemplaires. Relisez le document avant signature et conservez-le. Des photographies complètent utilement ce constat, sans remplacer un état contradictoire."
        ]
      },
      {
        "title": "Organiser la restitution",
        "paragraphs": [
          "Prévoyez les horaires permettant un contrôle commun. Faites préciser les modalités si le retour se fait hors ouverture. Gardez les documents de retour et les justificatifs de carburant. En cas de facturation contestée, rapprochez les défauts invoqués de l’état signé au départ."
        ]
      }
    ],
    "checklist": [
      "Franchise et exclusions lues.",
      "Défauts inscrits au départ.",
      "Restitution documentée."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "DGCCRF — Location de véhicule",
        "url": "https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/location-de-vehicule-la-reglementation-applicable"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "message-suspect-hameconnage",
    "title": "SMS ou courriel suspect : vérifier sans suivre le lien",
    "themeId": "numerique",
    "categoryId": "cybersecurite",
    "description": "Reconnaître une demande douteuse et réagir après une divulgation.",
    "intro": "La règle d’or : ouvrez vous-même le service officiel pour vérifier le message reçu.",
    "sections": [
      {
        "title": "Sortir du parcours imposé",
        "paragraphs": [
          "Un remboursement, un colis ou une menace de fermeture peut servir de prétexte. N’envoyez pas de données sensibles et n’ouvrez pas une pièce jointe inattendue. Contactez l’organisme par une adresse connue, indépendante du message."
        ]
      },
      {
        "title": "Si vous avez transmis un secret",
        "paragraphs": [
          "Changez immédiatement le mot de passe sur le vrai service, puis sur les autres comptes où il était réutilisé. Si des informations de paiement ont été communiquées ou des débits frauduleux constatés, faites opposition auprès de votre banque."
        ]
      },
      {
        "title": "Garder les preuves",
        "paragraphs": [
          "Conservez le message, l’adresse du site et les informations sur ce que vous avez saisi. En cas d’usurpation ou d’opérations frauduleuses, déposez plainte. Un message bien rédigé peut être frauduleux : l’absence de fautes ne suffit pas à lui faire confiance."
        ]
      }
    ],
    "checklist": [
      "Service ouvert indépendamment.",
      "Accès compromis sécurisés.",
      "Message conservé pour le signalement."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Cybermalveillance.gouv.fr — Hameçonnage",
        "url": "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/hameconnage-phishing/2e844784-f440-418c-8d8e-ed5556bb2376"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "mots-passe-proteger-comptes",
    "title": "Mots de passe : éviter qu’un compte compromis entraîne les autres",
    "themeId": "numerique",
    "categoryId": "cybersecurite",
    "description": "Organiser des accès distincts et renforcer leur protection.",
    "intro": "La règle d’or : utilisez un mot de passe différent pour chaque service.",
    "sections": [
      {
        "title": "Rompre les habitudes de réutilisation",
        "paragraphs": [
          "Commencez par les comptes importants, notamment la messagerie. Choisissez des secrets longs et difficiles à deviner, sans informations personnelles évidentes. Un même mot de passe légèrement modifié reste une mauvaise habitude."
        ]
      },
      {
        "title": "S’aider d’un gestionnaire",
        "paragraphs": [
          "Un gestionnaire permet de conserver des mots de passe distincts dans un coffre chiffré. Protégez soigneusement son accès principal. Ne saisissez pas vos véritables mots de passe dans un outil inconnu censé tester leur solidité."
        ]
      },
      {
        "title": "Ajouter une seconde protection",
        "paragraphs": [
          "Activez la double authentification lorsque le service la propose. Examinez les alertes de connexion inhabituelle. Si un secret a été divulgué, remplacez-le sur tous les services concernés ; changer seulement le compte où le problème a été remarqué laisse les autres exposés."
        ]
      }
    ],
    "checklist": [
      "Secrets distincts.",
      "Coffre protégé.",
      "Double authentification activée."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "CNIL — Conseils pour les mots de passe",
        "url": "https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "boite-mail-piratee",
    "title": "Boîte mail piratée : reprendre le contrôle durablement",
    "themeId": "numerique",
    "categoryId": "cybersecurite",
    "description": "Sécuriser les accès et vérifier ce que l’intrus a modifié.",
    "intro": "La règle d’or : changer le mot de passe ne suffit pas toujours ; vérifiez aussi les sessions et les redirections.",
    "sections": [
      {
        "title": "Récupérer l’accès officiel",
        "paragraphs": [
          "Utilisez la procédure du fournisseur de messagerie si vous ne pouvez plus vous connecter. Remplacez le mot de passe par un secret unique et activez la double authentification. Changez aussi les mots de passe réutilisés ailleurs."
        ]
      },
      {
        "title": "Vérifier les réglages",
        "paragraphs": [
          "Examinez les connexions actives et les règles de transfert ou de filtrage. Conservez les preuves d’activité inconnue avant de déconnecter les sessions suspectes. Une redirection malveillante peut continuer à transmettre vos messages après le changement de mot de passe."
        ]
      },
      {
        "title": "Limiter les conséquences",
        "paragraphs": [
          "Prévenez vos contacts si des messages frauduleux ont été envoyés. Alertez votre banque en cas de risque financier et surveillez vos comptes. Conservez les éléments nécessaires à une plainte. Ne payez pas un inconnu qui promet de récupérer votre messagerie."
        ]
      }
    ],
    "checklist": [
      "Mot de passe unique.",
      "Sessions et transferts contrôlés.",
      "Contacts concernés avertis."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Cybermalveillance.gouv.fr — Piratage d’une boîte mail",
        "url": "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/que-faire-en-cas-de-piratage-de-boite-mail"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "sauvegarder-documents",
    "title": "Sauvegardes : vérifier que vos documents sont récupérables",
    "themeId": "numerique",
    "categoryId": "cybersecurite",
    "description": "Préparer une copie utile avant une panne, une perte ou une attaque.",
    "intro": "La règle d’or : une sauvegarde doit pouvoir être restaurée, pas seulement sembler terminée.",
    "sections": [
      {
        "title": "Choisir ce qui compte",
        "paragraphs": [
          "Listez les appareils et les documents irremplaçables : photos, dossiers, justificatifs ou travaux. Choisissez une solution adaptée au volume et à la sensibilité des données. Vérifiez que les fichiers importants sont réellement inclus."
        ]
      },
      {
        "title": "Prévoir une copie régulière",
        "paragraphs": [
          "Planifiez les sauvegardes et contrôlez leur exécution. Déconnectez un support externe après utilisation et protégez-le contre le vol, la perte et les dégradations. Une copie exposée au même incident que l’original ne suffit pas."
        ]
      },
      {
        "title": "Tester avant d’en avoir besoin",
        "paragraphs": [
          "Restaurez quelques fichiers dans un emplacement distinct et ouvrez-les. Vérifiez le support et les logiciels nécessaires à leur lecture. Notez les étapes de récupération : le jour d’une panne n’est pas le meilleur moment pour découvrir comment fonctionne votre dispositif."
        ]
      }
    ],
    "checklist": [
      "Documents prioritaires inclus.",
      "Copie protégée.",
      "Restauration réellement testée."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Cybermalveillance.gouv.fr — Mémo sur les sauvegardes",
        "url": "https://www.cybermalveillance.gouv.fr/medias/2020/03/memo-sauvegardes.pdf"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "usurpation-identite-reagir",
    "title": "Usurpation d’identité : documenter et alerter",
    "themeId": "numerique",
    "categoryId": "cybersecurite",
    "description": "Réagir à des démarches faites en votre nom et protéger vos justificatifs.",
    "intro": "La règle d’or : conservez les preuves et contactez directement chaque organisme concerné.",
    "sections": [
      {
        "title": "Identifier les faits",
        "paragraphs": [
          "Archivez les courriers, contrats inconnus, adresses de profils et captures d’écran. Distinguez une simple exposition de données d’un usage frauduleux constaté. Établissez une chronologie des démarches dont vous n’êtes pas l’auteur."
        ]
      },
      {
        "title": "Signaler et déposer plainte",
        "paragraphs": [
          "Avertissez les services concernés ainsi que vos établissements financiers. Déposez plainte pour les faits d’usurpation et gardez les copies utiles à vos contestations. Si des documents d’identité ont été utilisés, renseignez-vous sur leur annulation et leur renouvellement."
        ]
      },
      {
        "title": "Limiter les réutilisations",
        "paragraphs": [
          "Avant de transmettre un justificatif, vérifiez le destinataire et ne fournissez que le nécessaire. Marquez les copies avec le destinataire, la date et le motif. Le filigrane réduit le risque de détournement, sans rendre une transmission à un inconnu sûre."
        ]
      }
    ],
    "checklist": [
      "Faits et preuves classés.",
      "Organismes prévenus.",
      "Copies de justificatifs contextualisées."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Cybermalveillance.gouv.fr — Usurpation d’identité",
        "url": "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/usurpation-identite-que-faire"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "ia-verifier-proteger",
    "title": "IA générative : vérifier la réponse et protéger ses données",
    "themeId": "numerique",
    "categoryId": "ia-numerique",
    "description": "Utiliser une aide à la rédaction sans lui déléguer son jugement.",
    "intro": "La règle d’or : une réponse convaincante doit encore être vérifiée avant d’être utilisée.",
    "sections": [
      {
        "title": "Donner un objectif clair",
        "paragraphs": [
          "Précisez le public, le résultat attendu et les contraintes utiles. Demandez une reformulation si la réponse est vague. Retirez du contexte les informations personnelles ou confidentielles qui ne sont pas nécessaires."
        ]
      },
      {
        "title": "Contrôler les points décisifs",
        "paragraphs": [
          "Vérifiez les dates, chiffres, citations et références dans les documents d’origine. Un lien ou un ton assuré ne prouve pas l’exactitude du contenu. Pour une décision importante, faites examiner les éléments par une personne compétente."
        ]
      },
      {
        "title": "Garder la responsabilité du résultat",
        "paragraphs": [
          "Relisez avant d’envoyer ou de publier. Ne copiez pas un dossier client, médical ou interne dans un service sans avoir vérifié son autorisation et ses conditions de traitement. Utilisez un exemple fictif lorsque les détails réels n’apportent rien."
        ]
      }
    ],
    "checklist": [
      "Objectif formulé.",
      "Données inutiles retirées.",
      "Affirmations vérifiées avant usage."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Info.gouv.fr — Bien utiliser les IA génératives",
        "url": "https://www.info.gouv.fr/actualite/ia-generatives-comment-bien-les-utiliser"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "teletravail-bons-reperes",
    "title": "Télétravail : organiser sa journée et son poste",
    "themeId": "travail",
    "categoryId": "management-travail",
    "description": "Réduire l’inconfort et préserver les échanges avec l’équipe.",
    "intro": "La règle d’or : préparez autant l’organisation du travail que l’installation de l’ordinateur.",
    "sections": [
      {
        "title": "Aménager avec les moyens disponibles",
        "paragraphs": [
          "Choisissez un espace adapté et limitez les reflets sur l’écran. Pour un usage prolongé du portable, un écran ou support associé à un clavier et une souris séparés aide à mieux installer le poste. Recherchez un appui confortable des pieds et du dos."
        ]
      },
      {
        "title": "Clarifier le fonctionnement collectif",
        "paragraphs": [
          "Convenez des priorités, des échanges et des moyens d’obtenir de l’aide. Signalez les difficultés d’accès aux outils et les charges mal réparties. La disponibilité permanente ne remplace pas une organisation explicite."
        ]
      },
      {
        "title": "Prévoir des changements de posture",
        "paragraphs": [
          "Intégrez des moments permettant de quitter l’écran et de bouger. Maintenez les contacts avec l’équipe et des limites de disponibilité. Si l’installation ou l’organisation crée des difficultés persistantes, échangez avec l’employeur et les interlocuteurs de prévention."
        ]
      }
    ],
    "checklist": [
      "Poste ajusté.",
      "Priorités et échanges clarifiés.",
      "Pauses et déconnexion prévues."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "INRS — Prévenir les risques du télétravail",
        "url": "https://www.inrs.fr/risques/teletravail/prevenir-les-risques"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "tresorerie-anticiper",
    "title": "Trésorerie : regarder quand l’argent entre et sort",
    "themeId": "projets",
    "categoryId": "entrepreneuriat",
    "description": "Repérer les mois difficiles avant de prendre de nouveaux engagements.",
    "intro": "La règle d’or : une vente prévue n’est pas encore de l’argent disponible.",
    "sections": [
      {
        "title": "Placer les flux au bon mois",
        "paragraphs": [
          "Construisez un tableau des encaissements et décaissements attendus. Affectez chaque somme au mois de son paiement effectif prévu, pas seulement à la date de facture. Incluez les charges, taxes, investissements et remboursements concernés."
        ]
      },
      {
        "title": "Suivre le solde cumulé",
        "paragraphs": [
          "Partez de la trésorerie initiale et reportez le solde de chaque mois au suivant. Un résultat annuel favorable peut masquer un manque temporaire. Distinguez les recettes confirmées des hypothèses et examinez les conséquences d’un paiement client retardé."
        ]
      },
      {
        "title": "Agir avant le manque",
        "paragraphs": [
          "Actualisez le tableau avec les montants réels. Si un déficit apparaît, réexaminez le calendrier des dépenses et les ressources disponibles avec votre accompagnateur ou votre comptable. N’engagez pas une dépense sur la seule promesse d’une entrée future."
        ]
      }
    ],
    "checklist": [
      "Dates de paiement utilisées.",
      "Solde cumulé suivi.",
      "Hypothèses actualisées."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "Bpifrance Création — Plan de trésorerie",
        "url": "https://bpifrance-creation.fr/encyclopedie/previsions-financieres-business-plan/previsions-financieres/plan-tresorerie-projet"
      }
    ]
  },
  {
    "kind": "guides",
    "slug": "promotions-comparer-prix",
    "title": "Promotions : regarder le prix avant le pourcentage",
    "themeId": "achats",
    "categoryId": "argent-consommation",
    "description": "Distinguer une réduction annoncée d’une comparaison commerciale.",
    "intro": "La règle d’or : comparez ce que vous paierez réellement, pas seulement la taille du rabais.",
    "sections": [
      {
        "title": "Comprendre le prix de référence",
        "paragraphs": [
          "Pour les annonces de réduction de prix concernées, le professionnel doit prendre comme référence son prix le plus bas des trente jours précédents. Un pourcentage élevé ne permet donc pas, seul, d’évaluer l’intérêt de l’offre."
        ]
      },
      {
        "title": "Lire la nature de la comparaison",
        "paragraphs": [
          "Un prix conseillé par le fabricant ou pratiqué ailleurs n’est pas la même chose qu’un ancien prix du vendeur. La présentation doit permettre de distinguer comparaison et réduction. Regardez les mentions qui accompagnent le prix barré."
        ]
      },
      {
        "title": "Décider sur le coût utile",
        "paragraphs": [
          "Comparez le même produit, ses caractéristiques et le total à payer. Gardez une capture de l’offre si elle paraît trompeuse. Ne transformez pas une réduction en besoin : un article inutile reste une dépense, même avec une remise affichée."
        ]
      }
    ],
    "checklist": [
      "Référence du rabais comprise.",
      "Produit comparable identifié.",
      "Coût final examiné."
    ],
    "reviewedAt": "2026-09-28",
    "sources": [
      {
        "kind": "reference",
        "label": "DGCCRF — Règles contre les faux rabais",
        "url": "https://www.economie.gouv.fr/dgccrf/actualites-dgccrf/des-regles-plus-claires-contre-les-faux-rabais"
      }
    ]
  }
];
