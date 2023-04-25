A05 Misconfiguration : El puerto está hardcodeado, lo cual se prestará a problemáticas futuras.
A04 Insecure Design: El input de password no tiene type=password y por lo tanto se puede visualizar.
A04 Insecure Design: Al guardar al usuario, no se hace ninguna validación del input y el usuario se puede guardar vacío.
A04 Insecure Design: El patrón de diseño por capas no se está aplicando correctamente, el router  de vistas sí accede al controlador de vistas, pero el router de sesión tiene implementada directamente la funcionalidad, sin separarlo del controller.
A06 Vulnerable and Outdated components: ¿Por qué tenemos un módulo de FileSystem para usuarios que fue dejado a la mitad y nunca se implementó? Claro ejemplo de feature obsoleta o sin haberse implementado.
A07: Identification and authentication failures: El password no se está hasheando (a pesar de que bcrypt está instalado).