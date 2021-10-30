import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import './styles.css';
import CartItem from '../CartItem/CartItem';

function Cart({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className="lmj-cart">
      <h2>Panier: {cart.length} article(s)</h2>
      <ul className="cart__list">
        {cart.map((item) => (
          <CartItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.unitPrice} />
        ))}
      </ul>
      <button className="cart__empty-btn btn-no-style" onClick={() => setCart([])}>
        Vider le panier
      </button>
      <button className="cart__close-btn btn-no-style" onClick={() => setIsOpen(false)}>
        <FontAwesomeIcon size="1x" spin icon={faTimesCircle} />
      </button>
    </div>
  ) : (
    <div className="lmj-cart">
      <button className="open-cart btn-no-style" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon size="2x" icon={faShoppingCart} />
        <span className="cart__count">{cart.length}</span>
        <span className="open-cart__text">Ouvrir le panier</span>
      </button>
    </div>
  );
}

export default Cart;
