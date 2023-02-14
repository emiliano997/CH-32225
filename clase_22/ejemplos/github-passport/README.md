## Proyecto
- Paquetes:
  - express
  - express-handlebars
  - express-session
  - mongoose
  - passport
  - passport-github2
  - https://www.passportjs.org/concepts/authentication/google/ (En caso de usar google)

Instalacion: npm init --y; npm i express express-handlebars express-session mongoose passport passport-github2

## Estructura
- src
  - config
    - passport.config.js
  - models
    - User.js
  - routes
    - session.routes.js
    - views.routes.js
  - views
    - layouts
      - main.hbs
    - home.hbs
    - login.hbs
  - server.js
  - utils.js