# Auth Service

> Authorization and Authentication service using JWT token

## Dependencies

- [PostgreSQL Database](https://postgresql.org/)

## Assumptions

- A database exists with table `users`
- Users table has `username` and `password` fields
- A user exists with `username`:`valid@mail.com` and `password`:`p@s5w0rD`

## Endpoints

- [x] `/auth` POST with user credentials. Responds with JWT token
- [ ] `/validate` POST token. Responds with status of token
- [ ] `/revokeToken` POST with user Id
