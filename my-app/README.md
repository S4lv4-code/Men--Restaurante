# 🍽️ Menú Restaurante - React App

[Repositorio del proyecto](https://github.com/S4lv4-code/Men--Restaurante)

---

##  Descripción del proyecto

Esta aplicación fue desarrollada en **React** y utiliza **React Router** para manejar rutas dinámicas y subrutas.  
El objetivo es mostrar un menú de comidas con varias categorías, permitiendo al usuario navegar entre listas de platos y ver el detalle de cada plato mediante la API de [TheMealDB](https://www.themealdb.com/api.php).  

El proyecto incluye:

- Múltiples categorías de comida: `Seafood`, `Dessert`, `Vegetarian`.
- Rutas dinámicas: `/:category` y `/:category/:id`.
- Componente **Layout** con NavBar visible en todas las páginas.
- Pantallas de carga (Loader) mientras se obtiene información de la API.
- Grilla uniforme y tarjetas con altura constante para una presentación consistente.
- Detalle de cada plato con imagen, categoría e instrucciones de preparación.

---

##  Tecnologías utilizadas

- React
- React Router v6
- CSS3 / Flexbox
- Fetch API
- [TheMealDB API](https://www.themealdb.com/api.php)

---

##  Estructura de carpetas

src/
│
├─ components/
│ ├─ Layout.jsx # Componente que contiene NavBar y Outlet
│ ├─ NavBar.jsx # Barra de navegación entre categorías
│ ├─ MenuCard.jsx # Tarjeta de cada plato
│ ├─ Loader.jsx # Pantalla de carga animada
│
├─ pages/
│ ├─ Category.jsx # Lista de platos según categoría
│ ├─ MenuItem.jsx # Detalle de plato individual
│
├─ App.jsx # Configuración de rutas
└─ index.js


---

##  Rutas implementadas

| Ruta                    | Componente       | Descripción                                      |
|-------------------------|----------------|------------------------------------------------|
| `/`                     | Layout + Navigate | Redirige a `/seafood`                          |
| `/seafood`              | Category        | Lista de platos de la categoría Seafood       |
| `/seafood/:id`          | MenuItem        | Detalle de un plato de Seafood                 |
| `/dessert`              | Category        | Lista de postres                               |
| `/dessert/:id`          | MenuItem        | Detalle de un postre                            |
| `/vegetarian`           | Category        | Lista de platos vegetarianos                   |
| `/vegetarian/:id`       | MenuItem        | Detalle de un plato vegetariano                |

---

## 🔹 Funcionalidades implementadas

1. **NavBar dinámico**
   - Permite navegar entre categorías.  
   - Resalta el link activo.  

2. **Rutas dinámicas**
   - `/category` para listas de platos según categoría.  
   - `/category/:id` para ver el detalle de cada plato.  

3. **Carga de datos con API**
   - Uso de `MealFetch` para obtener los datos de [TheMealDB](https://www.themealdb.com/api.php).  
   - Pantalla de **Loader** mientras se obtienen los datos.  

4. **Componente MenuCard**
   - Muestra imagen, nombre y precio del plato.  
   - Altura uniforme para todas las tarjetas.  
   - Tarjetas clickeables que llevan al detalle del plato.  

5. **Componente MenuItem**
   - Muestra detalle completo del plato: nombre, imagen, categoría e instrucciones.  
   - Compatible con cualquier categoría y plato.  
   - Pantalla de carga mientras la API responde.  

6. **Diseño consistente**
   - Grilla uniforme con tarjetas de altura fija.  
   - Estilo rústico con colores cálidos y sombras suaves.  
   - Responsive básico con Flexbox y `gap` para separar tarjetas.  

7. **Navegación completa**
   - Múltiples rutas y subrutas funcionales.  
   - Redirección por defecto a `/seafood`.  
   - Loader y skeleton cards para mejor UX.  

---

## Requisitos cumplidos

- [x] Tener mínimo 3 navegaciones entre categorías.  
- [x] Navegaciones dinámicas: `/category` y `/category/:id`.  
- [x] Componente **Layout** como esqueleto de la app.  
- [x] Pantalla de carga mientras la API responde.  
- [x] Grilla uniforme de tarjetas con altura consistente.  
- [x] Detalle de plato funcional con información de la API.  
- [x] NavBar visible y link activo destacado.  

---

## Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/S4lv4-code/Men--Restaurante.git
```
Instalar dependencias:

```bash
npm install
```
Ejecutar la app en modo desarrollo:
```bash
npm start
```
Abrir en el navegador:

http://localhost:3000