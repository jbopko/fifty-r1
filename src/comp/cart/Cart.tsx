import './Cart.css'
import {Component} from 'react';

class Cart extends Component {
  render() {
    return <div id='cart'>
      <div id='cart-hasItems'>false</div>
      <div id='cart-items'>
        <div className='cart-item'>1</div>
        <div className='cart-item'>2</div>
        <div className='cart-item'>3</div>
      </div>
      <div id='cart-count'>0</div>
    </div>;
  }
}

export default Cart;