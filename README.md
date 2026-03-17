Mini Blog – Laboratorio JavaScript
Descripción

Este proyecto consiste en una pequeña aplicación web llamada Mini Blog, desarrollada utilizando HTML, CSS y JavaScript puro (Vanilla JavaScript). La aplicación permite consultar publicaciones desde una API pública, buscar contenido específico y crear nuevas publicaciones desde la interfaz.

El objetivo del laboratorio es practicar el consumo de APIs utilizando JavaScript asincrónico, así como la manipulación dinámica del DOM y el manejo de diferentes estados de la interfaz (UI States).

Para obtener los datos de las publicaciones se utiliza la API pública DummyJSON, la cual permite simular operaciones típicas de una aplicación real como obtener posts, buscarlos y crear nuevos.

Además, la aplicación guarda las publicaciones creadas por el usuario utilizando localStorage, lo que permite que estas se mantengan incluso después de recargar la página.

Funcionalidades principales

La aplicación incluye las siguientes funcionalidades:

Visualización de publicaciones

Al cargar la página se realiza una solicitud a la API de DummyJSON para obtener una lista de publicaciones. Estas se muestran dinámicamente en la interfaz utilizando JavaScript.

Cada publicación incluye:

Título

Contenido del post

Búsqueda de publicaciones

La aplicación permite buscar publicaciones utilizando un campo de búsqueda.

El sistema realiza lo siguiente:

Consulta la API utilizando la palabra ingresada

Filtra también las publicaciones creadas por el usuario

Muestra los resultados encontrados

Si no se encuentran resultados, se muestra un mensaje indicando que no existen coincidencias.

Creación de publicaciones

El usuario puede crear nuevas publicaciones utilizando el formulario disponible en el panel lateral.

El proceso es el siguiente:

El usuario ingresa un título y contenido.

Se envía la información a la API mediante una solicitud POST.

La publicación se agrega inmediatamente a la interfaz.

El post también se guarda en localStorage para que permanezca visible incluso después de recargar la página.

Esto permite crear múltiples publicaciones y mantenerlas almacenadas localmente.

Manejo de estados de la interfaz (UI States)

La aplicación incluye diferentes estados visuales para mejorar la experiencia del usuario:

Idle: esperando interacción del usuario.

Loading: mostrando que los datos se están cargando.

Empty: cuando no se encuentran resultados.

Error: cuando ocurre un problema al consultar la API.

Estos estados permiten comunicar claramente al usuario qué está ocurriendo en la aplicación.

Tecnologías utilizadas

El proyecto fue desarrollado utilizando las siguientes tecnologías:

HTML5 para la estructura de la aplicación.

CSS3 para el diseño y estilo de la interfaz.

JavaScript (Vanilla JS) para la lógica de la aplicación.

Fetch API para realizar solicitudes HTTP.

localStorage para guardar publicaciones creadas por el usuario.

NGINX para servir la aplicación en entorno local.

API utilizada

La aplicación utiliza la API pública:

https://dummyjson.com

Endpoints utilizados:

Obtener publicaciones:

https://dummyjson.com/posts

Buscar publicaciones:

https://dummyjson.com/posts/search?q=texto

Crear publicación:

https://dummyjson.com/posts/add
Ejecución del proyecto

Para ejecutar el proyecto localmente se utilizó NGINX en WSL.

Pasos para ejecutar:

Copiar el proyecto al directorio de NGINX:

sudo cp -r ~/Lab5-js /var/www/html/

Abrir el navegador y acceder a:

http://localhost/Lab5-js

La aplicación cargará automáticamente las publicaciones disponibles desde la API.

Estructura del proyecto

El proyecto está organizado de la siguiente forma:

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

Descripción de archivos:

index.html: estructura principal de la aplicación.

styles.css: estilos visuales de la interfaz.

api.js: funciones para consumir la API.

ui.js: manejo de los estados de la interfaz.

app.js: lógica principal de la aplicación.

Autor

Samuel Robledo
Universidad del Valle de Guatemala
Curso: Sistemas Web / JavaScript
