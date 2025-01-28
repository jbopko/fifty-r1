import './Cart.css'

export interface CartProps {
  appHandler: (input: CartInterface) => void;
  cart: CartInterface;
}

export interface CartInterface {
  items: string[],
  watching?: string[],
}


const Cart = (cart: CartInterface) => {
  if (cart) {
    console.log(`Cart contains ${cart.items.length} items`);
  }
  return (
    <div id='cart'>
      <div id='cart-hasItems'>false</div>
      <div id='cart-items'>
        <div className='cart-item'>1</div>
        <div className='cart-item'>2</div>
        <div className='cart-item'>3</div>
      </div>
      <div id='cart-count'>0</div>
    </div>
  );
}
export default Cart;