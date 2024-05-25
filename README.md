# E-commerce Web Application - ALLUJO

## Descripción

ALLUJO es una aplicación web de comercio electrónico diseñada para ofrecer a los usuarios una experiencia de compra de ropa fácil, rápida y agradable. Los usuarios pueden explorar una amplia gama de productos de moda, agregar artículos a su carrito de compras, realizar pedidos y gestionar sus cuentas de usuario.

## Funcionalidades

### Usuarios
- **Registro e Inicio de Sesión**: Los usuarios pueden registrarse y autenticarse en la aplicación.
- **Perfil de Usuario**: Los usuarios pueden ver y editar su perfil.
- **Historial de Pedidos**: Los usuarios pueden ver el historial de sus pedidos anteriores.

### Navegación y Búsqueda
- **Catálogo de Productos**: Los usuarios pueden navegar por diferentes categorías de productos.
- **Búsqueda Avanzada**: Los usuarios pueden buscar productos por nombre, categoría, precio, y otros filtros.

### Carrito de Compras
- **Agregar al Carrito**: Los usuarios pueden agregar productos a su carrito de compras.
- **Gestión del Carrito**: Los usuarios pueden ver, editar y eliminar productos de su carrito.
- **Checkout**: Los usuarios pueden proceder al pago y completar sus compras.

### Gestión de Productos (Administradores)
- **Agregar/Editar/Eliminar Productos**: Los administradores pueden gestionar el catálogo de productos.
- **Gestión de Categorías**: Los administradores pueden crear y gestionar categorías de productos.

## Tecnologías Utilizadas

### Frontend
- **HTML/CSS**: Para la estructura y el diseño de la interfaz de usuario.
- **JavaScript**: Para la interactividad y las funcionalidades dinámicas.
- **Vue.js**: Librería para construir la interfaz de usuario.
- **Tailwind css**: Framework CSS para un diseño responsivo.

### Backend
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para la construcción de la API RESTful.
- **MongoDB**: Base de datos NoSQL para almacenar información de usuarios y productos.
- **Mongoose**: ODM para MongoDB y Node.js.

### Autenticación y Seguridad
- **JWT (JSON Web Tokens)**: Para la autenticación segura de los usuarios.
- **BCrypt**: Para el hash de contraseñas y la protección de datos sensibles.

## Instalación

### Requisitos Previos
- Node.js (v14 o superior)
- MongoDB (v4 o superior)

### Pasos
1. Clona este repositorio en tu máquina local:
   ```sh
   git clone https://github.com/luisdav1/ALLLUJO.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd allujo
   ```
3. Instala las dependencias del proyecto:
   ```sh
   npm install
   ```
4. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las siguientes variables:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/fashion-hub
     JWT_SECRET=your_jwt_secret
     ```

5. Inicia el servidor:
   ```sh
   npm start
   ```

6. Accede a la aplicación en tu navegador:
   ```sh
   http://localhost:5000
   ```

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`).
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz push a la rama (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para cualquier consulta o soporte, por favor contacta a:
- **Nombre**: Luis Rodriguez Pacheco
- **Email**: luisdarodriguez164@gmail.com

---

¡Gracias por usar ALLUJO! ¡Esperamos que disfrutes de tu experiencia de compra!