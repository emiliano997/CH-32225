# Resumen

## ¿Qué es ECMAScript?
- Es un estándar que se encarga de regir cómo debe ser interpretado el lenguaje de javascript. Con el avance del lenguaje y el crecimiento de los navegadores era necesario establecer un control.
- ECMAScript plantea compatibilidades, nuevas funciones, funciones en desuso y demás en cada uno de sus nuevos releases.
- Cada nuevo release (versión) de ECMAScript que sale, se denota por ES+número de release:
ES6, ES7, … , ES11

## Cambios importantes
- Let y Const
  - let y const son dos formas de declarar variables en JavaScript introducidas en ES6 que limitan el ámbito de la variable al bloque en que fue declarada (antes de ES6 esto no era así).
  - Es posible que se encuentren con ejemplos y código en internet utilizando la palabra reservada “var” para crear variables. Esta es la manera en que se hacía antes de ES6 ¡y no se recomienda su uso!

- Let 
  - Un bloque en JavaScript se puede entender como “lo que queda entre dos llaves”, ya sean definiciones de funciones o bloques if, while, for y loops similares. 
  - Si una variable es declarada con let en el ámbito global o en el de una función, la variable pertenece al ámbito global o al ámbito de la función respectivamente.

- Const
  - Al igual que con let, el ámbito (scope) para una variable declarada con const es el bloque. 
  - Sin embargo, const además prohíbe la reasignación de valores (const viene de constant).

### Mutabilidad con Const
- Mientras que con let una variable puede ser reasignada, con const no es posible. 
- Si se intenta reasignar una constante se obtendrá un error tipo TypeError. 
- Pero que no se puedan reasignar no significa que sean inmutables. 
- Si el valor de una constante es algo "mutable", como un array o un objeto, se pueden cambiar los valores internos de sus elementos.

<p> NO REASIGNABLE ≠ INMUTABLE </p>

## ¿Qué es una función?
- Son bloques de instrucciones que trabajan sobre un scope interno (conocido como scope local). Pueden encontrarse en su sintaxis básica o en su notación flecha.

- La función flecha permite un return implícito, lo cual permite utilizar instrucciones sin llaves. Esto sólo es posible si la función tiene una instrucción. Verás muchas de estas en un ambiente laboral.
- Si la función flecha sólo tiene un argumento, no es necesario encerrar el parámetro en un paréntesis. Esto sólo es necesario al utilizar dos argumentos o más.

## Scopes
- El scope define el alcance de una variable o constante a un cierto contexto. Esto permite utilizar el mismo nombre para diferentes variables, sin confundir al computador.
- El scope global afectará a todo el nivel del archivo en el que trabajemos, mientras que el scope local afectará a la función o bloque en el que esté declarado.

## Template String
- Funcionan como un superset de una string.
- Permite incrustar información dentro de ella, evitando la concatenación.
- Reconoce los saltos de línea, para mantener el formato.
- Pero más importante aún es que no presenta el límite de caracteres de una string normal (Permitiendo hacer estructuras más complejas, como plantillas)

## Closures 
- Una cláusula o closure es una función que puede mantener variables declaradas de manera interna, además de contar con una función que pueda acceder a ambos ámbitos, tanto el suyo como el de su función padre, logrando así un efecto de variable privada.
- Este efecto de encapsulamiento se utilizaba con anterioridad debido a la falta de la implementación de clases en Javascript, sin embargo, al introducirse las clases, el cambio fue muy notorio, dejando a las closures en desuso, o bien en casos de uso muy limitados e insuficientes para códigos enterprise.

## Clases
- Una clase es una representación de una entidad. Nos sirve para modelar múltiples cosas como: un auto, una persona, o bien cosas más abstractas como: un administrador de archivos, un conector a base de datos, etc.
- Las clases funcionan como moldes, por lo que una vez definida una de éstas, podemos crear múltiples objetos con la misma forma y con las mismas funcionalidades. A éstas se les llaman instancias.






