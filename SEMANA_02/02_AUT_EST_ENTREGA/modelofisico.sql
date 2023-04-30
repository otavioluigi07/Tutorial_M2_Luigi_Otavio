BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "tb_formação" (
	"id_formação"	INTEGER NOT NULL,
	"nomecurso_formação"	TEXT,
	"dinicio_formação"	TEXT,
	"dfim_formação"	TEXT,
	"descrição_formação"	TEXT,
	"id_curriculo"	TEXT
);
CREATE TABLE IF NOT EXISTS "tb_personalidade" (
	"id_personalidade"	INTEGER NOT NULL,
	"nome_personalidade"	INTEGER,
	"descrição_personalidade"	INTEGER,
	"valor_personalidade"	INTEGER,
	"id_curriculo"	TEXT
);
CREATE TABLE IF NOT EXISTS "tb_habilidades" (
	"id_habillidades"	INTEGER NOT NULL,
	"nome_habilidade"	INTEGER,
	"descrição_habilidade"	INTEGER,
	"valor_habilidade"	INTEGER,
	"id_curriculo"	TEXT
);
CREATE TABLE IF NOT EXISTS "tb_experiência" (
	"id_experiẽncia"	INTEGER NOT NULL,
	"empresa_experiência"	TEXT,
	"dinicio_experiência"	TEXT,
	"dfim_experiência"	TEXT,
	"função_experiência"	TEXT,
	"descrição_experiência"	TEXT,
	"id_curriculo"	TEXT
);
CREATE TABLE IF NOT EXISTS "tb_conquistas" (
	"id_consquistas"	TEXT NOT NULL,
	"nome_conquista"	TEXT,
	"data_conquista"	TEXT,
	"descrição_conquista"	TEXT,
	"id_curriculo"	TEXT
);
CREATE TABLE IF NOT EXISTS "tb_curriculo" (
	"id_curriculo"	TEXT NOT NULL,
	"nome_curriculo"	TEXT,
	"foto_curriculo"	TEXT,
	"endereço_curriculo"	TEXT,
	"email_curriculo"	TEXT,
	"telefone_curriculo"	TEXT,
	"função_curriculo"	TEXT,
	"descrição_curriculo"	TEXT,
	FOREIGN KEY("id_curriculo") REFERENCES "tb_personalidade"("id_curriculo"),
	FOREIGN KEY("id_curriculo") REFERENCES "tb_habilidades"("id_curriculo"),
	FOREIGN KEY("id_curriculo") REFERENCES "tb_experiência"("id_curriculo"),
	FOREIGN KEY("id_curriculo") REFERENCES "tb_conquistas"("id_curriculo"),
	FOREIGN KEY("id_curriculo") REFERENCES "tb_formação"("id_curriculo"),
	PRIMARY KEY("id_curriculo")
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_tb_conquistas" ON "tb_conquistas" (
	"id_consquistas"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_tb_curriculo" ON "tb_curriculo" (
	"id_curriculo"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_tb_experiência" ON "tb_experiência" (
	"id_experiẽncia"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_tb_personalidade" ON "tb_personalidade" (
	"id_personalidade"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_tb_habilidades" ON "tb_habilidades" (
	"id_habillidades"
);
CREATE UNIQUE INDEX IF NOT EXISTS "pk_tb_formação" ON "tb_formação" (
	"id_formação"
);
CREATE UNIQUE INDEX IF NOT EXISTS "unq_tb_experiência_id_curriculo" ON "tb_experiência" (
	"id_curriculo"
);
CREATE UNIQUE INDEX IF NOT EXISTS "unq_tb_conquistas_id_curriculo" ON "tb_conquistas" (
	"id_curriculo"
);
CREATE UNIQUE INDEX IF NOT EXISTS "unq_tb_personalidade_id_curriculo" ON "tb_personalidade" (
	"id_curriculo"
);
CREATE UNIQUE INDEX IF NOT EXISTS "unq_tb_habilidades_id_curriculo" ON "tb_habilidades" (
	"id_curriculo"
);
CREATE UNIQUE INDEX IF NOT EXISTS "unq_tb_formação_id_curriculo" ON "tb_formação" (
	"id_curriculo"
);
COMMIT;
