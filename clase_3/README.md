# Resumen

## ECMAScript 6
- Desde ES5 en 2009, hubo un largo período de tiempo en el cual no hubo grandes actualizaciones en los estándares del lenguaje. Hasta ECMAScript 6 en 2015, el cual supuso una revolución en el lenguaje debido a sus grandes cambios.
- La salida de ES6 marcó un antes y un después en la historia del lenguaje, ya que a partir de éste se lo comenzó a considerar una implementación “moderna”.

## ¿Qué hay de nuevo? (ES 7)
- Las principales funcionalidades de este release son:
  - Se introduce el operador exponencial **, independizándose poco a poco de la librería Math.
  - Manejo de array includes. Éste nos permitirá saber si algún elemento existe dentro del arreglo.

## ¿Qué hay de nuevo? (ES 8)
- Las principales funcionalidades de este release son:
  - Async await para mejor control asíncrono, sobre este ahondaremos más en futuras clases.
  - Object.entries, Object.values, Object.keys para un mejor control interno sobre las propiedades de un objeto.

## ¿Qué hay de nuevo? (ES 9)
- Las principales funcionalidades de este release son:
  - Resolvedores de promesas con .finally(), para atender una promesa, se cumpla o no se cumpla.
  - Mayor control a los objetos con operadores rest y spread (aplicable también a arrays)

## ¿Qué hay de nuevo? (ES 10)
- Las principales funcionalidades de este release son:
  - String.trim(): Remueve los espacios innecesarios en una cadena. Sirve para validar cadenas enviadas vacías o eliminar los espacios iniciales y finales.
  - Array.flat():Remueve anidaciones internas en arrays para dejar un arreglo plano.
  - Dynamic import: Permite importar sólo los módulos necesarios, ahorrando espacio y memoria.

### Dynamic Import
Uno de los problemas principales de los imports tradicionales, es que terminamos importando TODOS LOS MÓDULOS, aun cuando no estamos utilizando todos al mismo tiempo. 
Con dynamic import, esto cambia.
<br>
Dynamic import permite importar sólo los módulos que necesito según una situación particular, lo cual permite optimizar la utilización de recursos, al pedir a la computadora sólo lo que estaré utilizando.
Es utilizado principalmente en códigos que utilizan el patrón de diseño Factory (se abordará más adelante)

## ¿Qué hay de nuevo? (ES 11)
- Las principales funcionalidades de este release son:
  - Operador nullish. Sirve para poder colocar un valor por default a variables que podrían ser nulas o indefinidas, a diferencia del operador ||, éstas filtran “falseys”
  - Variables privadas dentro de las clases, esto permite que algunas variables no sean accesibles desde el entorno de instancia de una clase y sólo sea utilizada de manera interna.

