

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MenuCard from '../components/MenuCard/MenuCard';
import Loader from '../components/Loader/Loader';
import { MealFetch } from '../../../api/api'; // función para fetch de API
import './Category.css';

export default function Category() {
  const { category } = useParams(); // /:category
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      try {
        const data = await MealFetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setMeals(data.meals);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, [category]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="category-container">
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <ul className="ul-menuList">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="menuCard-container">
            <Link to={`/${category}/${meal.idMeal}`} className="menuCard-link">
              <MenuCard
                name={meal.strMeal}
                imag={meal.strMealThumb}
                price={Math.floor(Math.random() * 10 + 10)} // precio random
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
