# Auth Service

> Authorization and Authentication service using JWT token

## Dependencies

- A database supported by [sequelize](https://sequelize.org/v5/index.html)

## Running

- Run database creation (if not created) `npx sequelize db:create`
- Run migrations `npx sequelize db:migrate:all`
- (Optional) Seed database with test data `npx sequelize db:seed:all`

## Specifications

- There's 2 tokens issued on `/login` namely:
  - `token` : a JWT token which expires 5 minutes (by default) after issue
  - `refreshToken` : Used to obtain a new JWT token (this is stored in the backend)

## Endpoints

- [x] `/login` POST request with user credentials.
  - Responds with JWT token and refreshToken
- [x] `/token` POST request with refresh token.
  - Responds with new JWT token
- [x] `/logout` DELETE with refresh token.
  - Responds with status
