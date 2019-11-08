# Login strategy

User provides a `username` and `password` to the endpoint `/login`

## First time login flow

- Values are validated in the database
- If the values match generate a **login token** and a **refresh token**
  - the refresh token is saved for retrieval of new **login token**
  - existing **refresh tokens** are deleted to avoid duplicate sessions
  - returns **login token** and **refresh token**
- If the values don't match a 401 status is returned

## Getting new token from refresh token

- Send a request with refresh token
  - Check if **refresh token** exists in database
    - If it does verify the **refresh token**
  - Else return 401 status
