CREATE TABLE users (
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    username varchar(50) NOT NULL CHECK (username <> ''),
    password TEXT NOT NULL,
    created timestamp default current_timestamp
);

-- Enable pgcrypto before running the INSERT
CREATE EXTENSION pgcrypto;

INSERT INTO users (username, password) VALUES (
    'valid@mail.com',
    crypt('p@s5w0rD', gen_salt('bf'))
);