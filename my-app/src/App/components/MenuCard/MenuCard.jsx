import './MenuCard.css';

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function MenuCard({ name, imag }) {
  const randomPrice = randomBetween(10, 20);

  return (
    <li className="menuCard">
      <p className="menuCard-title">{name}</p>
      <img className="menuCard-image" src={imag} alt={name} />
      <p className="menuCard-price">${randomPrice}</p>
    </li>
  );
}
