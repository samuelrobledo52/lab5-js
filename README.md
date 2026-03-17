 #  Mini Blog – Laboratorio JavaScript

##  Descripción

**Mini Blog** es una aplicación web desarrollada utilizando **HTML, CSS y JavaScript (Vanilla JavaScript)**.  
El objetivo del proyecto es demostrar cómo consumir una API externa, manipular el DOM dinámicamente y manejar distintos estados de la interfaz dentro de una aplicación web.

La aplicación permite:

- Visualizar publicaciones obtenidas desde una API.
- Buscar publicaciones por palabra clave.
- Crear nuevas publicaciones desde la interfaz.
- Guardar publicaciones creadas utilizando **localStorage**.

Para simular el funcionamiento de una aplicación real, el proyecto utiliza la **API pública DummyJSON**.

---

#  Funcionalidades

##  Visualización de publicaciones

Cuando la página se carga, la aplicación consulta la API para obtener publicaciones y mostrarlas dinámicamente en la interfaz.

Cada publicación contiene:

- **Título**
- **Contenido del post**

---

## 🔍 Búsqueda de publicaciones

El usuario puede buscar publicaciones utilizando palabras clave.

El proceso funciona de la siguiente manera:

1. El usuario escribe una palabra en el campo de búsqueda.
2. La aplicación consulta la API.
3. También se revisan las publicaciones creadas localmente.
4. Se muestran los resultados coincidentes.

Si no existen resultados, la interfaz muestra un mensaje indicando que no se encontraron publicaciones.

---

## ✏️ Creación de publicaciones

El usuario puede crear nuevas publicaciones utilizando el formulario disponible en el panel lateral.

Proceso:

1. El usuario ingresa un **título** y **contenido**.
2. Se envía una solicitud **POST** a la API.
3. La publicación aparece inmediatamente en la interfaz.
4. También se guarda en **localStorage** para mantenerla después de recargar la página.

Esto permite crear múltiples publicaciones dentro de la aplicación.

---

# ⚙️ Manejo de estados de la interfaz (UI States)

La aplicación utiliza distintos estados para mejorar la experiencia del usuario.

| Estado | Descripción |
|------|-------------|
| **Idle** | Esperando interacción del usuario |
| **Loading** | Los datos se están cargando |
| **Empty** | No se encontraron resultados |
| **Error** | Ocurrió un error al consultar la API |

---

# 🧩 Tecnologías utilizadas

Este proyecto fue desarrollado utilizando:

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **Fetch API**
- **localStorage**
- **NGINX (servidor local)**

---

# 🌐 API utilizada

La aplicación utiliza la API pública:

### DummyJSON

https://dummyjson.com

### Endpoints utilizados

Obtener publicaciones


https://dummyjson.com/posts


Buscar publicaciones


https://dummyjson.com/posts/search?q=texto


Crear publicación


https://dummyjson.com/posts/add


---

###  Ejecución del proyecto

Para ejecutar el proyecto localmente se utilizó **NGINX en WSL**.

### 1️ Copiar el proyecto al servidor



### Abrir la aplicación
http://localhost/Lab5-js
### 📂 Estructura del proyecto
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
    
### Archivo	Función 
index.html	Estructura principal de la aplicación
styles.css	Estilos visuales
api.js	Funciones para consumir la API
ui.js	Manejo de estados de la interfaz
app.js	Lógica principal de la aplicación

### Autor

Samuel Robledo
Universidad del Valle de Guatemala
Curso: Sistemas Web

###  Conclusión

Este laboratorio permitió aplicar conceptos fundamentales del desarrollo web moderno, incluyendo:

Consumo de APIs externas

Programación asincrónica con JavaScript

Manipulación dinámica del DOM

Persistencia de datos en el navegado
