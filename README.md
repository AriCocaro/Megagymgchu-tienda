# MEGAGYM – E-commerce (React + Firebase)

SPA de e-commerce desarrollada con React, React Router y Firestore. Catálogo de suplementos, indumentaria y accesorios de MEGAGYM.

## Funcionalidades
- Listado de productos por categoría y detalle (`ItemListContainer` / `ItemList` / `Item`, `ItemDetailContainer` / `ItemDetail`).
- `ItemCount` con validación de mínimo, stock y estado sin stock; se oculta en el detalle una vez agregado el producto.
- Carrito global con React Context (`CartProvider`, `useCart`), persistido en `localStorage` para sobrevivir a recargas, `CartWidget` con total de unidades y vista `Cart` con subtotales y total.
- `Checkout` con formulario: genera una orden en Firestore (comprador, productos, cantidades, total y fecha) y muestra el ID.
- Renderizado condicional: loaders, carrito vacío, producto sin stock, producto inexistente y errores.

## Instalación
```bash
npm install
cp .env.example .env   # completar con las credenciales de tu proyecto Firebase
npm run seed           # carga los productos de src/data/products.js en Firestore (una sola vez)
npm run dev
```

## Configuración de Firebase
1. Crear un proyecto en la consola de Firebase y una base **Firestore** (modo de prueba).
2. Registrar una app web y copiar las credenciales al archivo `.env` (ver `.env.example`).
3. Ejecutar `npm run seed` para crear la colección `products`. Las órdenes se guardan en la colección `orders`.

## Estructura
```
src/
  components/   NavBar, CartWidget, ItemListContainer, ItemList, Item,
                ItemDetailContainer, ItemDetail, ItemCount, Cart, Checkout, Loader, NotFound
  context/      CartContext.jsx
  firebase/     config.js, services.js
  data/         products.js (mock data + categorías)
scripts/        seedProducts.js
```
