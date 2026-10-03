CREATE TABLE IF NOT EXISTS content (
 id TEXT PRIMARY KEY,
 draft_json TEXT NOT NULL CHECK(json_valid(draft_json)),
 published_json TEXT CHECK(published_json IS NULL OR json_valid(published_json)),
 version INTEGER NOT NULL DEFAULT 1,
 updated_at TEXT NOT NULL,
 updated_by TEXT NOT NULL,
 last_change TEXT NOT NULL DEFAULT ''
);
CREATE TABLE IF NOT EXISTS revisions (
 id TEXT PRIMARY KEY,
 content_id TEXT NOT NULL REFERENCES content(id),
 version INTEGER NOT NULL,
 snapshot_json TEXT NOT NULL CHECK(json_valid(snapshot_json)),
 action TEXT NOT NULL,
 actor TEXT NOT NULL,
 created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS revisions_content ON revisions(content_id, version DESC);
