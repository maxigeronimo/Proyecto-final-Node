# 📦 Product API - Proyecto Final Backend

API REST para gestionar productos con autenticación mediante JWT y almacenamiento en Firebase Firestore.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Firebase Firestore
- JWT (jsonwebtoken)
- dotenv
- body-parser
- cors

## 📁 Estructura del proyecto

/config
└── firebase.config.js
/controllers
├── auth.controller.js
└── product.controller.js
/models
└── product.model.js
/routes
├── auth.routes.js
└── products.routes.js
/services
├── auth.service.js
└── product.service.js
/middlewares
└── auth.middleware.js
index.js
.env

perl

## ⚙️ Instalación

```bash
npm install
🧪 Variables de entorno
Crear un archivo .env con las siguientes claves:

env

PORT=3000
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=adminpassword
📡 Endpoints

🛒 Productos
Método	Endpoint	Descripción	Autenticación
GET	/api/products	Obtener todos los productos	❌
GET	/api/products/:id	Obtener un producto por ID	❌
POST	/api/products/create	Crear un nuevo producto	✅
DELETE	/api/products/:id	Eliminar un producto por ID	✅

🔐 Autenticación
Método	Endpoint	Descripción
POST	/auth/login	Login de usuario, devuelve JWT

🧾 Body esperado para login
json

{
  "email": "admin@example.com",
  "password": "adminpassword"
}
🧾 Header requerido para endpoints protegidos
makefile

Authorization: Bearer <token>
🧪 Tests manuales
Podés testear los endpoints con:

Postman

Insomnia

🛠️ Autor
Maximiliano Gerónimo

Proyecto Final - Backend con Firebase y JWT

---

¿Querés que también te prepare los pasos para desplegar esto en **Render** o **Railway**, por ejemplo?