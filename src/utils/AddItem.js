export function addItem(name, id, unitPrice, setCart, quantity, cart) {
  const itemToAdd = {
    id,
    name,
    quantity,
    unitPrice,
  };

  if (!cart.some((product) => product.id === id)) {
    setCart(cart.concat(itemToAdd));
  } else {
    let indexElement = 0;
    for (const item of cart) {
      item.id === id && (indexElement = cart.indexOf(item));
    }
    itemToAdd.quantity = cart[indexElement].quantity + quantity;
    cart.pop(indexElement);
    setCart(cart.concat(itemToAdd));
  }
}
