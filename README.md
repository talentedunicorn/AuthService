# Auth Service

> Authorization and Authentication service using JWT token

## Dependencies

- [PostgreSQL Database](https://postgresql.org/)

## Assumptions

- A database exists with table `users`
- Users table has `username` and `password` fields
- A user exists with `username`:`valid@mail.com` and `password`:`p@s5w0rD`

## Specifications

- There's 2 tokens issued on `/login` namely:
  - `token` : a JWT token which expires 5 minutes (by default) after issue
  - `refreshToken` : Used to obtain a new JWT token (this is stored in the backend)

## Endpoints

- [x] `/login` POST with user credentials. Responds with JWT token
- [x] `/token` POST with refresh token. Responds with new JWT token
- [ ] `/revokeToken` POST with refresh token. Responds with status
