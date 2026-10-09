WITH mapped AS (
  SELECT
    id,
    CASE
      WHEN json_extract(draft_json, '$.categoryId') = 'ia-numerique'
        AND json_extract(draft_json, '$.kind') IS NULL
        AND json_extract(draft_json, '$.number') = '82'
        THEN 'cybersecurite'
      WHEN json_extract(draft_json, '$.categoryId') = 'ia-numerique'
        AND json_extract(draft_json, '$.kind') IS NULL
        AND json_extract(draft_json, '$.number') IN ('26', '29')
        THEN 'numerique'
      WHEN json_extract(draft_json, '$.categoryId') = 'ia-numerique'
        THEN 'ia'
      WHEN json_extract(draft_json, '$.categoryId') = 'argent-consommation'
        AND json_extract(draft_json, '$.kind') = 'guides'
        THEN CASE json_extract(draft_json, '$.themeId')
          WHEN 'automobile' THEN 'voiture'
          WHEN 'travaux' THEN 'travaux'
          WHEN 'tourisme' THEN 'voyage'
          WHEN 'achats' THEN 'consommation'
          WHEN 'logement' THEN 'consommation'
          ELSE 'argent-consommation'
        END
      WHEN json_extract(draft_json, '$.categoryId') = 'argent-consommation'
        AND json_extract(draft_json, '$.kind') IS NULL
        THEN CASE
          WHEN json_extract(draft_json, '$.number') IN ('48', '49', '54', '55', '58') THEN 'banque'
          WHEN json_extract(draft_json, '$.number') = '51' THEN 'travaux'
          ELSE 'consommation'
        END
      WHEN json_extract(draft_json, '$.categoryId') = 'entrepreneuriat'
        AND json_extract(draft_json, '$.kind') IS NULL
        AND json_extract(draft_json, '$.number') IN ('63', '64', '67', '68', '70')
        THEN 'banque'
      WHEN json_extract(draft_json, '$.categoryId') = 'entrepreneuriat'
        AND json_extract(draft_json, '$.kind') = 'guides'
        AND json_extract(draft_json, '$.title') IN (
          'BFR : financer le temps entre dépenses et encaissements',
          'Démarrage : financer plus que le matériel',
          'Prix de vente : croiser coûts, clients et concurrence',
          'Seuil de rentabilité : savoir combien il faut vendre',
          'Tableau de bord : suivre les chiffres qui font agir',
          'Trésorerie : regarder quand l’argent entre et sort'
        )
        THEN 'banque'
      WHEN json_extract(draft_json, '$.categoryId') = 'entrepreneuriat'
        AND json_extract(draft_json, '$.kind') = 'guides'
        AND json_extract(draft_json, '$.title') LIKE 'Nom de domaine:%'
        THEN 'numerique'
      WHEN json_extract(draft_json, '$.categoryId') = 'management-travail'
        AND json_extract(draft_json, '$.kind') = 'guides'
        AND json_extract(draft_json, '$.title') LIKE 'Déplacement professionnel:%'
        THEN 'voiture'
      WHEN json_extract(draft_json, '$.categoryId') = 'management-travail'
        AND json_extract(draft_json, '$.kind') = 'guides'
        AND json_extract(draft_json, '$.title') LIKE 'Offre d%'
        THEN 'cybersecurite'
      WHEN json_extract(draft_json, '$.categoryId') = 'cybersecurite'
        AND json_extract(draft_json, '$.kind') = 'guides'
        AND json_extract(draft_json, '$.title') LIKE 'Travail et vie privée:%'
        THEN 'numerique'
      ELSE json_extract(draft_json, '$.categoryId')
    END AS category_id
  FROM content
)
UPDATE content
SET
  draft_json = json_set(draft_json, '$.categoryId', (SELECT category_id FROM mapped WHERE mapped.id = content.id)),
  published_json = CASE
    WHEN published_json IS NULL THEN NULL
    ELSE json_set(published_json, '$.categoryId', (SELECT category_id FROM mapped WHERE mapped.id = content.id))
  END,
  version = version + 1,
  updated_at = strftime('%Y-%m-%dT%H:%M:%fZ', 'now'),
  updated_by = 'category-migration',
  last_change = 'category-reclassify/0006/' || id
WHERE id IN (
  SELECT c.id
  FROM content c
  JOIN mapped ON mapped.id = c.id
  WHERE mapped.category_id != json_extract(c.draft_json, '$.categoryId')
);

INSERT OR IGNORE INTO revisions (id, content_id, version, snapshot_json, action, actor, created_at)
SELECT
  'category-reclassify/0006/' || id,
  id,
  version,
  draft_json,
  'reclassify',
  'category-migration',
  updated_at
FROM content
WHERE updated_by = 'category-migration'
  AND last_change = 'category-reclassify/0006/' || id;
