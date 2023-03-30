## Mocking Api

¿Cómo lo hacemos? Desarrollaremos un servidor que pueda devolver los datos de prueba que necesitamos para poder presentarlos al equipo correspondiente, para ésto, tendremos que considerar los siguientes elementos:

- Necesitaremos crear un modelo de productos de prueba para alimentar los usuarios de prueba.
- Además, necesitaremos crear usuarios de prueba, cuyo carrito  corresponda a un arreglo alimentado por los productos mock creados previamente. 
- Contaremos con un endpoint /api/users, el cual se encargará de devolver a los usuarios de prueba.
- Además, tendremos una función “generateUsers” y una función “generateProducts” 