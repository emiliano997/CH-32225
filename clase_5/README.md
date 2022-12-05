# Resumen

## setTimeOut
- setTimeout se utiliza para establecer un temporizador que ejecute una tarea después de un determinado tiempo. permite entender en un par de líneas la idea del asincronismo.
- A diferencia de una operación síncrona, podremos notar como setTimeout inicia su ejecución, y una vez que haya transcurrido el tiempo, veremos el resultado, aun cuando el resto de las operaciones hayan terminado.

## setInterval
- setInterval funciona como setTimeout, la diferencia radica en que éste reiniciará el conteo y ejecutará la tarea nuevamente cada vez que se cumpla dicho intervalo de tiempo.
- Un timer devuelve un apagador el cual permite detener el intervalo cuando se cumpla cierta operación.
- Suele utilizarse mucho para poner tiempos límites en alguna página para llenar formularios (Hay ciertas páginas que te dan tiempo límite para hacer la operación, O TE BOTAN).

## fs en Nodejs
- fs es la abreviación utilizada para FileSystem, el cual, como indica el nombre, es un sistema de manejador de archivos que nos proporcionará node para poder crear, leer, actualizar o eliminar un archivo, sin tener que hacerlo nosotros desde cero. 
- Así, crear un archivo con contenido será tan fácil como escribir un par de líneas de código, en lugar de tener que lidiar con los datos binarios y transformaciones complejas y de un nivel más bajo en la computadora.

## Utilizando fs
- fs existe desde el momento en el que instalamos Nodejs en nuestro computador, por lo que, para utilizarlo, podemos llamarlo desde cualquier archivo que tengamos de nuestro código con la siguiente línea: 

        const fs = require('fs')

- De ahí en adelante todo el módulo de FileSystem estará contenido en la variable fs. Sólo debemos utilizarlo llamando sus métodos como una clase. Esto podremos hacerlo de 3 formas: síncrono, con callbacks o con promesas.

## Manejo de datos complejos

Como ya podrás imaginar, no todo son archivos .txt, y por supuesto que no todo es una cadena de texto simple. ¿Qué va a pasar cuando queramos guardar el contenido de una variable, aun si esta es un objeto? ¿Y si es un arreglo? Normalmente los archivos que solemos trabajar para almacenamiento, son los archivos de tipo json.


Para poder almacenar elementos más complejos, nos apoyaremos del elemento JSON.stringify() y JSON. parse()

### JSON.stringify()
Una vez que tenemos el objeto que queremos guardar en el archivo, tenemos que recordar que éste no puede guardarse sólo incrustándolo. Necesitamos convertirlo a formato json, el cual es un formato estándar de guardado y envío de archivos.


La sintaxis para hacer la conversión es:

        JSON.stringify(objeto_json, replacer, '\t')
        // Replacer: Callback

### JSON.parse()
Ahora que entendemos cómo se convierte un objeto a un JSON, es claro mencionar que JSON.parse representa la operación contraria. Cuando leemos un archivo, el contenido no es manipulable, así que, para recuperar el objeto que había guardado y no sólo una string representativa de él, entonces hay que transformarlo de vuelta, esto se hace con JSON.parse
su sintaxis es:

        JSON.parse(objeto_json)

## Ventajas
- Son excelentes para empezar a aprender persistencia, ya que son muy fáciles de usar
- Al ser nativo de node js, no tenemos que hacer instalaciones externas.
- Es muy fácil de manipular dentro o fuera de nuestro programa, además de se transferible.

## Desventajas
- Conforme la información crece, nos daremos cuenta que, para querer modificar una sola cosa, necesitamos leer todo el archivo, lo cual consume recursos importantes.
- Similar al punto anterior, una vez modificado un dato puntual del archivo, tengo que reescribir el archivo completamente, lo cual es un proceso innecesario y pesado cuando la información es grande.
- Al final, puede ser peligroso tener toda la información en un archivo fácilmente extraíble con un drag&drop a otra carpeta.