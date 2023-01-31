# Sistema de Paginación de Estudiantes

¿Cómo lo hacemos? Se creará una vista simple con Handlebars donde se podrán mostrar los estudiantes

- Los estudiantes serán mostrados en la vista “/students”
- Debe existir un enlace “Anterior”” para regresar a los estudiantes anteriores, siempre que haya una página anterior
- Debe existir un enlace “Siguiente” para continuar con la paginación de estudiantes, siempre que haya una página siguiente
- Debe indicarse la página actual.
- Todo debe vivir en un servidor de express escuchando en el puerto 8080.

## Estructura

- src
  - models
    - students.js
  - routes
    - views.routes.js
  - views
    - layouts
      - main.hbs
    - index.js
    - students.hbs
  - dirname.js
  - server.js

## Paquetes

- Express
- Express Handlebars y Handlebars (Y allow prototype access)
- Mongoose
- Mongoose Paginate
  <code>
    npm i express express-handlebars handlebars mongoose mongoose-paginate-v2 @handlebars/allow-prototype-access
  </code>
