import { useState } from 'react';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import ShoppingList from './ShoppingList/ShoppingList';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Header />
      <Cart cart={cart} setCart={setCart} />
      <ShoppingList cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
