# 🌐 Backend API - Tareas Offline

Este proyecto es la API REST que complementa la app móvil de tareas con soporte offline desarrollada en Ionic. Permite sincronizar las tareas locales guardadas en SQLite con una base de datos persistente en el servidor.

---

## 🚀 Características

- CRUD completo de tareas (`GET`, `POST`, `PUT`, `DELETE`)
- Estructura ligera usando **Express.js**
- Permite integración sencilla con la app móvil vía HTTP
- Almacena las tareas en una base de datos local (`db.json`)

---

## ⚙️ Requisitos

- ✅ **Node.js v18.18.0** (usa `nvm` si tienes otra versión)
- ✅ **npm**
- 📦 Base de datos `db.json` incluida en el repositorio

---

## 📦 Instalación

### 1. Clona el repositorio

```bash
git clone https://tu-repo-backend.git
cd backend-tareas
2. Instala las dependencias
npm install
3. Verifica que exista la base de datos
El archivo db.json ya está incluido. No necesitas configuraciones adicionales.

▶️ Ejecutar el servidor

npm run dev
Esto levantará el servidor en http://localhost:3000 o en la IP de tu máquina local.
