# Resumen

## Nodejs
- Surgió de la necesidad de ejecutar javascript fuera del navegador, y ha crecido hasta convertirse en uno de los elementos principales para el desarrollo web.
- Cuenta con el mismo motor V8 de Google Chrome, el cual permite convertir el código javascript a código máquina para poder ser procesado correctamente. 
- Además, cuenta con muchas funcionalidades internas del mismo lenguaje javascript gracias a sus ajustes con ECMAScript.
- Node js fue pensado de manera primaria para backend, lo cual significa que su desarrollo se basó pensando en éste en primera instancia. Su sistema de desarrollo basado en eventos, le permite al desarrollador construir aplicaciones ligeras, rápidas e incluso en tiempo real.
- Esto sin obviar que el soporte de esta maravilla tecnológica se basa en utilizar y procesar Javascript, el cual cuenta con una infinidad de funciones y estructuras que permiten resolver diferentes problemas día con día. 

## Modulos Nativos
- Conforme necesitamos programas más complejos, necesitamos operaciones más complejas, y conforme necesitamos operaciones más complejas, necesitamos herramientas más útiles.
- Es por eso que, desde que instalamos Nodejs en nuestro computador, contamos ya con una serie de módulos nativos (es decir, que ya viven dentro de él), para poder resolver este tipo de tareas de manera eficiente y sin tener que reprogramar todo (recuerda no reinventar la rueda)

## ¡Importante!
Recuerda que utilizamos soluciones de terceros para hacer nuestro trabajo mejor.  Utilizar un módulo que nos permita solucionar un problema previo, permite concentrarnos en el problema actual.

## NPM
- NPM refiere a las siglas “Node Package Manager”, El cual refiere a un manejador de paquetes de Node. Éste permite que la comunidad de desarrolladores puedan crear sus propios módulos, para poder subirlos a la nube y así otros desarrolladores puedan utilizarlos. 
- Para el trabajo de paqueterías, tendremos un archivo en nuestro proyecto llamado package.json

## package.json
- package.json es un archivo que generamos dentro de nuestros proyectos, el cual contendrá distintas especificaciones del mismo, cosas como:
  - El nombre de tu proyecto
  - La versión de tu proyecto
  - Algunos scripts para correr el proyecto
  - ¿de qué depende el proyecto?

## Dependencias
Cuando nuestro proyecto necesita utilizar dependencias de terceros a partir de npm, se añade un nuevo campo a nuestro package.json llamado “dependencies” el cual contendrá los módulos que tenemos instalados en ese proyecto y, por lo tanto, indica que el proyecto necesita de esas dependencias instaladas para poder correr correctamente.

