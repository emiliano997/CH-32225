A05 - Security Misconfiguration : El puerto está hardcodeado, lo cual se prestará a problemáticas futuras.
A05 - Security Misconfiguration: La url de Mongo está hardcodeada.
A04 - Insecure Design: El proyecto no hace validación del correo repetido al registrar a un usuario
A04 Insecure Design: El input de password no tiene type=password y por lo tanto se puede visualizar.
A09 - Logging and monitoring Failures: Intenta registrar dos usuarios con el mismo correo. ¿Qué pasa? La base de datos devuelve un error, pero nuestro log es muy “genérico”. Nota cómo en la consola se imprime sólo “error” lo cual no nos da suficiente información sobre el error ocurrido.
A05 - Security Misconfiguration: La configuración general de errores está mal implementada, al mandar un campo vacío en el registro, la alerta devuelve success, aunque haya ocurrido un error por detrás. (lo mismo para login)


Nota que el Dao de Mongo y el Dao de FileSystem existentes en el proyecto, no están relacionados en el nombre del método. Si se hizo una migración desde FileSystem hacia Mongo, entonces el dao de Filesystem es innecesario y es un A06 - Outdated component. Por otra parte, si la intención sí es hacer uso de ambos o por alguna razón el dao de FileSystem sí será utilizado, entonces es un A04 - Insecure design, debido a que no está implementándose correctamente el patrón de diseño correspondiente a la persistencia, pues la lógica de negocio está fuertemente acoplada a un método del Dao, haciendo que, si en algún punto se llegara a forzar un cambio de persistencia, el servidor se vendría abajo debido a que no coincidirían los nombres de los métodos. Ésto no es necesariamente una vulnerabilidad, sin embargo, podemos tomarlo como ejemplo práctico de casos más complejos.
