# 🚀 Evoluciona

**Evoluciona** es una aplicación web diseñada para proporcionar un sistema estructurado y modular para la gestión de diversas funcionalidades. Este proyecto está desarrollado con **PHP, JavaScript y CSS**, con un backend basado en **SQLite**.

## 📌 Tabla de Contenidos
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🛠️ Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [🖥️ Uso](#️-uso)
- [✨ Características](#-características)

## 📂 Estructura del Proyecto

El proyecto está organizado en múltiples directorios, cada uno con una función específica:

- **`back/`** - Lógica backend, incluyendo conexión a base de datos y manejo de correos electrónicos.
  - `Classes/ConexionBD.php` - Clase para la conexión con la base de datos.
  - `mail/` - Funcionalidades para el envío de correos electrónicos.
- **`estilo/`** - Hojas de estilo CSS.
- **`img/`** - Imágenes y recursos gráficos.
- **`inc/`** - Scripts PHP comunes como cabeceras y manejo de errores.
- **`js/`** - Archivos JavaScript para interacciones en el frontend.
- **`log/`** - Almacenamiento de logs y seguimiento de datos en SQLite.
- **`modelodedatos/`** - Estructuras de datos y registros en JSON.
- **`modulos/`** - Componentes modulares como blog, tienda y productos.
- **`static/`** - Recursos estáticos e imágenes.
- **`util/`** - Scripts de analítica, documentación, SEO y procesamiento de imágenes.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** PHP
- **Base de Datos:** SQLite
- **Herramientas Adicionales:** Scripts en Python para analítica y mejoras SEO

## 🖥️ Uso

- La aplicación ofrece varios módulos como blog, catálogo de productos y formularios de contacto.
- Los datos se almacenan en la base de datos SQLite (`logs.sqlite`).
- Los registros y la analítica se guardan en la carpeta `log/`.

## ✨ Características

✔️ Arquitectura modular en PHP para fácil mantenimiento.
✔️ Integración con base de datos SQLite.
✔️ Scripts de SEO y analítica para seguimiento de usuarios.
✔️ Utilidades para procesamiento y optimización de imágenes.
✔️ Manejo seguro de configuraciones con `config.php`.


