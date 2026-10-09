CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  icon TEXT NOT NULL DEFAULT 'spark',
  sort_order INTEGER NOT NULL,
  is_active INTEGER NOT NULL DEFAULT 1 CHECK (is_active IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

INSERT OR IGNORE INTO categories (id, name, description, icon, sort_order, is_active) VALUES
  ('cybersecurite', 'Cybersécurité', 'Les contenus de cette catégorie seront bientôt disponibles.', 'shield', 1, 1),
  ('ia', 'IA', 'Les contenus de cette catégorie seront bientôt disponibles.', 'spark', 2, 1),
  ('numerique', 'Numérique', 'Les contenus de cette catégorie seront bientôt disponibles.', 'spark', 3, 1),
  ('travaux', 'Travaux', 'Les contenus de cette catégorie seront bientôt disponibles.', 'briefcase', 4, 1),
  ('voiture', 'Voiture', 'Les contenus de cette catégorie seront bientôt disponibles.', 'wallet', 5, 1),
  ('banque', 'Banque', 'Les contenus de cette catégorie seront bientôt disponibles.', 'wallet', 6, 1),
  ('consommation', 'Consommation', 'Les contenus de cette catégorie seront bientôt disponibles.', 'wallet', 7, 1),
  ('voyage', 'Voyage', 'Les contenus de cette catégorie seront bientôt disponibles.', 'spark', 8, 1),
  ('ia-numerique', 'Ancienne catégorie : IA & Numérique', 'Catégorie conservée inactive pour préserver les contenus existants en attendant leur reclassement.', 'spark', 90, 0),
  ('management-travail', 'Ancienne catégorie : Management & Travail', 'Catégorie conservée inactive pour préserver les contenus existants en attendant leur reclassement.', 'briefcase', 91, 0),
  ('argent-consommation', 'Ancienne catégorie : Argent & Consommation', 'Catégorie conservée inactive pour préserver les contenus existants en attendant leur reclassement.', 'wallet', 92, 0),
  ('entrepreneuriat', 'Ancienne catégorie : Entrepreneuriat & TPE-PME', 'Catégorie conservée inactive pour préserver les contenus existants en attendant leur reclassement.', 'rocket', 93, 0);

CREATE TABLE IF NOT EXISTS content_categories (
  content_id TEXT PRIMARY KEY REFERENCES content(id) ON DELETE CASCADE,
  category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
  assigned_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);

CREATE INDEX IF NOT EXISTS content_categories_category ON content_categories(category_id, content_id);

INSERT OR IGNORE INTO content_categories (content_id, category_id)
SELECT id, json_extract(draft_json, '$.categoryId')
FROM content
WHERE json_extract(draft_json, '$.categoryId') IN (SELECT id FROM categories);

CREATE TRIGGER IF NOT EXISTS content_category_sync_insert
AFTER INSERT ON content
BEGIN
  DELETE FROM content_categories WHERE content_id = NEW.id;
  INSERT INTO content_categories (content_id, category_id)
  SELECT NEW.id, json_extract(NEW.draft_json, '$.categoryId')
  WHERE json_extract(NEW.draft_json, '$.categoryId') IN (SELECT id FROM categories);
END;

CREATE TRIGGER IF NOT EXISTS content_category_sync_update
AFTER UPDATE OF draft_json ON content
BEGIN
  DELETE FROM content_categories WHERE content_id = NEW.id;
  INSERT INTO content_categories (content_id, category_id)
  SELECT NEW.id, json_extract(NEW.draft_json, '$.categoryId')
  WHERE json_extract(NEW.draft_json, '$.categoryId') IN (SELECT id FROM categories);
END;
