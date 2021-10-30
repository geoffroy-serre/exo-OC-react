import './styles.css';

function CartItem({ id, name, price, quantity }) {
  const totalPrice = (quantity * price).toFixed(2);
  return (
    <li className="cart-item">
      <div className="cart-item__name">{name}</div>
      <div className="cart-item__quantity">{quantity}</div>
      <div className="cart-item__price">{price}€</div>
      <div className="cart-item__total">{totalPrice}€</div>
    </li>
  );
}

export default CartItem;
