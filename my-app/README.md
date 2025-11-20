# Menú Restaurante - React (Vite)

Pequeña Single Page App en React que consume TheMealDB (categoría MealFood) y muestra tarjetas de platos con nombre, imagen, categoría y un precio inventado.

## Cómo ejecutarlo
1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:5173` (Vite mostrará la URL precisa).

## API usada
`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`

> Nota: la API no incluye precios, por eso se inventan y se calculan de forma aleatoria. 

## Qué incluye
- Componentes: `App`, `MenuList`, `MenuItem`.
- `fetch` dentro de `useEffect` con estados `isLoading` y `error`.
- Grid responsive, jerarquía visual: imagen → nombre → categoría → precio.
- Extras: buscador por nombre y ordenado por precio.
- README con instrucciones.

## Captura
![Incio de página web](image.png)


