import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { MealFetch } from "../../../api/api";
import "./MenuItem.css";

export default function MenuItem() {
  const { id, category } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      setLoading(true);
      try {
        const data = await MealFetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(data.meals[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMeal();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  if (!meal) return <p>No se encontró el plato.</p>;

  return (
    <div className="menuItem-container">
      <h2 className="menuItem-title">{meal.strMeal}</h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="menuItem-image"
      />
      <p className="menuItem-category">Categoría: {meal.strCategory}</p>
      <div className="menuItem-instructions">{meal.strInstructions}</div>
    </div>
  );
}
