ALTER TABLE content ADD COLUMN deleted_at TEXT;
CREATE INDEX IF NOT EXISTS content_active ON content(deleted_at, id);
