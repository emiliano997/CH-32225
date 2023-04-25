Principales vulnerabilidades del proyecto 3 (Sólo las principales observaciones, si quieres aclarar alguna adicional, ¡adelante!)

A05 - Security Misconfiguration: A pesar de ya estar utilizando dotenv para poder cargar la información de Mongo, notamos cómo el token de jsonwebtoken no tiene oculto el secret con el cual se armó.
A01 - Broken Access Control: El token de sesión del usuario expira en 30 segundos, ¿por qué puedo seguir navegando a la ruta de perfil?
A01 - Broken Access Control: Si mi sesión está pensada para ver mi perfil, ¿por qué al cambiar la url de manera manual, puedo ver el perfil de las otras personas, si éste debería ser privado?
A03 - Injection: Busca los cambios en el Dao de usuarios de Mongo, ahora recibe parámetros para dinamizar la búsqueda, Sin embargo, en el controlador de usuario notamos que no hay una validación del query que se recibe desde el request, de manera que está propenso a que se pueda manipular para llegar a datos más sensibles.
A07 - Identification and authentication failures: El sistema que actualmente tenemos permite hacer n intentos de logueo, sin algún bloqueo, por lo que está expuesto a ataques de ruptura por fuerza bruta.