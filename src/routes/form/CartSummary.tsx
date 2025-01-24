import '../../assets/style/Platform.css'

const CartSummary = () => {
  return (
    <div id='cart-summary' className='platform'>
      <svg className='svg-close' width='24' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
           fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
        <path d='M18 6 6 18'></path>
        <path d='m6 6 12 12'></path>
      </svg>
      <h2>Cart Summary</h2>
      <div className='items'>
      </div>
      <div className='subtotal'>
        <span>Cart Total: </span><span className='price'> $39.98</span>
      </div>
      <button className='button submit'>Continue To Checkout</button>
      <div className='links'>
        <div id='cart-summary-clear' className='link left'>Clear Cart</div>
        <div className='"link right'>Continue Shopping...</div>
      </div>
    </div>
  )
}
export default CartSummary;