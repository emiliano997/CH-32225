# CRUD - CR
- Sobre una base de datos llamada “colegio”, crear una colección “estudiantes” donde se agregarán documentos con los siguientes datos:
  - nombre
  - apellido
  - curso
  - edad
  - correo
  - sexo 
- Crear 5 estudiantes (Insert Many) con los campos mencionados arriba. Además, crear un estudiante sólo con nombre, apellido y curso. ¿Es posible?
- Realizar una búsqueda para obtener a todos los estudiantes.
- Realizar una búsqueda para obtener a todos los estudiantes de sexo H (hombre)
- Realizar un conteo para obtener el número de documentos totales.
- Realizar un conteo para obtener el número de documentos totales que cumplan con el criterio: “Es mujer”

# Operaciones con Filtros
- Sobre la base y los datos cargados anteriormente
- Insertar cinco documentos más en la colección clientes con los siguientes datos:

      { "nombre" : "Pablo", "edad" : 25 },
      { "nombre" : "Juan", "edad" : 22 },
      { "nombre" : "Lucia", "edad" : 25 },
      { "nombre" : "Juan", "edad" : 29 },
      { "nombre" : "Fede", "edad" : 35 }

- Listar todos los documentos de la colección clientes ordenados por edad descendente.
- Listar el cliente más joven.
- Listar el segundo cliente más joven.
- Listar los clientes llamados 'Juan'
- Listar los clientes llamados 'Juan' que tengan 29 años.
- Listar los clientes llamados 'Juan' ó 'Lucia'.
- Listar los clientes que tengan más de 25 años.
- Listar los clientes que tengan 25 años ó menos.
- Listar los clientes que NO tengan 25 años.
- Listar los clientes que estén entre los 26 y 35 años.
- Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado.
- Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado.
- Borrar los clientes que se llamen 'Juan' y listar verificando el resultado.
- Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor.
