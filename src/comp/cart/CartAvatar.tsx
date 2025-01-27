import {MouseEvent} from 'react';
import '../../assets/style/Card.css'

function clickAvatar(event: MouseEvent<HTMLDivElement, Event>) {
  const cart = document.querySelector("#cart")
  if (cart && cart.classList.contains('hasItems')) {
    // show cart summary
    const cartSummary = document.querySelector("#cart-summary")
    if (cartSummary) {
      cartSummary.classList.toggle('hidden')
    }
  } else {
    // go to the store
  }
  if (event) {event.stopPropagation()}
}

const CartAvatar = () => {
  return (
    <div id='cart-avatar' className='card' onClick={(event) => {
      clickAvatar(event)
    }}>
      <div className='spinner'>
        <div className='face'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' strokeLinecap='round' strokeLinejoin='round'
               stroke='currentColor' strokeWidth='1'
               width='24' height='24' viewBox='0 0 24 24'
               className='svg-store'>
            <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7'/>
            <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'/>
            <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4'/>
            <path d='M2 7h20'/>
            <path
              d='M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7'/>
          </svg>
        </div>
        <div className='back'>
          <svg className='svg-shop-cart' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
               viewBox='0 0 24 24'
               fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
            <circle cx='8' cy='21' r='1'/>
            <circle cx='19' cy='21' r='1'/>
            <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/>
          </svg>
          <div id='cart-avatar-badge' className='badge'></div>
        </div>
      </div>
    </div>
  )
}
export default CartAvatar