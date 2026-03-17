 Mini Blog – Laboratorio JavaScript
 Descripción

Mini Blog es una aplicación web sencilla desarrollada utilizando HTML, CSS y JavaScript (Vanilla JavaScript). El objetivo del proyecto es demostrar cómo consumir una API externa, manipular el DOM dinámicamente y manejar distintos estados de la interfaz dentro de una aplicación web.

La aplicación permite consultar publicaciones desde una API pública, buscar contenido específico y crear nuevas publicaciones desde la interfaz del usuario.

Para simular el comportamiento de una aplicación real, el proyecto utiliza la API pública DummyJSON, que proporciona endpoints para obtener, buscar y crear publicaciones.

Además, las publicaciones creadas por el usuario se almacenan utilizando localStorage, lo que permite que permanezcan visibles incluso después de recargar la página.

 Funcionalidades principales
 Visualización de publicaciones

Cuando la página se carga, la aplicación realiza una solicitud a la API de DummyJSON para obtener una lista de publicaciones. Estas publicaciones se renderizan dinámicamente en la interfaz utilizando JavaScript.

Cada publicación muestra:

Título del post

Contenido del post

 Búsqueda de publicaciones

La aplicación incluye un sistema de búsqueda que permite encontrar publicaciones utilizando palabras clave.

El proceso consiste en:

El usuario introduce una palabra en el campo de búsqueda.

La aplicación consulta la API utilizando esa palabra.

También se revisan las publicaciones creadas por el usuario.

Se muestran los resultados coincidentes.

Si no se encuentran resultados, la aplicación muestra un mensaje indicando que no existen coincidencias.

 Creación de publicaciones

El usuario puede crear nuevas publicaciones utilizando el formulario disponible en el panel lateral.

El flujo de funcionamiento es el siguiente:

El usuario introduce un título y contenido.

Se envía una solicitud POST a la API.

La publicación aparece inmediatamente en la interfaz.

La publicación también se guarda en localStorage, lo que permite mantenerla visible después de recargar la página.

Esto permite que el usuario pueda crear múltiples publicaciones dentro de la aplicación.

 Manejo de estados de la interfaz (UI States)

La aplicación implementa diferentes estados para comunicar claramente lo que está ocurriendo en la interfaz.

Estado	Descripción
Idle	Esperando interacción del usuario
Loading	Indica que los datos se están cargando
Empty	No se encontraron resultados
Error	Ocurrió un error al consultar la API

Estos estados mejoran la experiencia del usuario al interactuar con la aplicación.

 Tecnologías utilizadas

El proyecto fue desarrollado utilizando las siguientes tecnologías:

HTML5 – estructura de la aplicación

CSS3 – diseño y estilos visuales

JavaScript (Vanilla JS) – lógica de la aplicación

Fetch API – consumo de servicios externos

localStorage – almacenamiento local en el navegador

NGINX – servidor web para ejecución local

 API utilizada

La aplicación utiliza la siguiente API pública:

DummyJSON

https://dummyjson.com

Endpoints utilizados

Obtener publicaciones

https://dummyjson.com/posts

Buscar publicaciones

https://dummyjson.com/posts/search?q=texto

Crear publicación

https://dummyjson.com/posts/add
 Ejecución del proyecto

Para ejecutar el proyecto localmente se utilizó NGINX en WSL.

1️ Copiar el proyecto al servidor NGINX
sudo cp -r ~/Lab5-js /var/www/html/
2️ Abrir la aplicación en el navegador
http://localhost/Lab5-js

Una vez abierta la página, las publicaciones se cargarán automáticamente desde la API.

 Estructura del proyecto
Lab5-js
│
├── index.html
├── README.md
│
├── css
│   └── styles.css
│
└── js
    ├── api.js
    ├── ui.js
    └── app.js
    
Descripción de archivos
Archivo	Función
index.html	Estructura principal de la aplicación
styles.css	Estilos visuales del proyecto
api.js	Funciones encargadas de consumir la API
ui.js	Manejo de los estados de la interfaz
app.js	Lógica principal de la aplicación
 Autor

Samuel Robledo
Universidad del Valle de Guatemala
Curso: Sistemas Web

 Conclusión

Este laboratorio permitió practicar conceptos fundamentales del desarrollo web moderno, como el consumo de APIs externas, la manipulación dinámica del DOM y la implementación de estados de interfaz que mejoran la experiencia del usuario.

La aplicación puede ampliarse fácilmente agregando funcionalidades adicionales como edición de publicaciones, eliminación de posts o autenticación de usuarios
