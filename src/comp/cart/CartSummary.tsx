import {CartParams} from './CartAvatar';

const CartSummary = ({items, update}: CartParams) => {
  if (update.name && items.length) {
    console.log(`${items.length} items in cart`);
  }
  return (
    <div id='cart-summary' className='platform right hidden'>
      <div className='title'>jbopko&#64;gmail.com</div>
      <h2>Cart Summary</h2>
      <div className='items'>

      </div>
      <div className='subtotal'>
        <span>Cart Total: </span><span className='price'> $39.98</span>
      </div>
      <button className='button submit'
              onClick={() => {
                update({items: new Array<string>()})
                closeSummary()
              }}>
        Continue to Checkout
      </button>
      <div className='links'>
        <div id='cart-summary-clear' className='link left'
             onClick={() => {
               update({items: new Array<string>()})
               closeSummary()
             }}>Clear Cart
        </div>
        <div className='link right'
             onClick={() => {
               console.log('testing Clear Cart')
               closeSummary()
             }}>Continue shopping...
        </div>
      </div>
    </div>
  )
}

const closeSummary = () => {
  const mySelf = document.getElementById('cart-summary')!
  mySelf.classList.add('hidden')
}

export default CartSummary;