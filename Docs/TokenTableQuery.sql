CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE refreshTokens (
  id UUID NOT NULL DEFAULT uuid_generate_v4(),
  token TEXT
);