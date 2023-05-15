# Notas

## 1. Instalación Swagger
swagger-jsdoc: Nos permitirá escribir nuestro archivo .yaml o .json, y a partir de ahí generará un apidoc

swagger-ui-express: Nos permitirá linkear una interfaz gráfica que represente la documentación a partir de una ruta de nuestro servidor de express.

<code>
  npm install swagger-jsdoc swagger-ui-express
</code>

## 2. Configuración Swagger
Desglosemos de qué se trata cada propiedad:

- openapi: Sirve para especificar las reglas específicas que seguirá la openapi generada.
- title: Título de la API que estamos documentando.
- description: Descripción de la API que estamos documentando.
- apis: Aquí especificamos la ruta a los archivos que contendrán la documentación. la sintaxis utilizada indica que utilizaremos una carpeta docs, la cual contendrá subcarpetas con cada módulo a documentar.

<code>
  const swaggerOptions = {
    definition: {
      openapi: '3.0.1',
      info: {
        title: 'Adopt Me API',
        description: 'A sample API',
      }
    },
    apis: [`${__dirname}/docs/**/*.yaml`],
  };
</code>

## Generando componentes
Sería maravilloso contar con un ejemplo de un usuario, es decir, en múltiples ocasiones tenemos problemas para abstraer y proyectar un objeto, utilizando Swagger podemos generar un schema de usuario, para tener una idea más clara de qué es lo que realmente representa esa entidad en nuestro aplicativo.

Ahora, debajo de paths en nuestro archivo users.yaml, procederemos a definir otro elemento llamado components. 

Los componentes pueden contener:
- Esquemas de una entidad.
- Modelos de respuestas.
- Esquemas de Inputs para un método particular

