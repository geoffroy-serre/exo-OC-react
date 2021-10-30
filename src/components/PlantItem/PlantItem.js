import { addItem } from '../../utils/AddItem';
import CareScale from '../CareScale/CareScale';
import './styles.css';

function PlantItem({ id, name, description, price, image, light, carbon, setCart, cart }) {
  return (
    <li className="plant-item" onClick={() => addItem(name, id, price, setCart, 1, cart)}>
      <img className="plant-item__image" src={`./assets/${image}`} alt={`${name}`} />
      <div className="plant-item__info">
        <div className="plant-item__name">{name}</div>
        <div className="plant-item__description">{description}</div>
        <CareScale light={light} carbon={carbon} />
      </div>
      <div className="plant-item__price">{price}€</div>
    </li>
  );
}

export default PlantItem;
