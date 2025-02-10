import {MouseEvent} from 'react';
import {SvgShoppingCart, SvgStorefront} from '../svg/Svgs.tsx';
import '../../assets/style/Card.css'

export interface Cart {
  items: string[],
  timestamp?: number,
  watching?: string[],
}

export interface CartParams extends Cart {
  items: string[],
  timestamp?: number,
  watching?: string[],
  // update(): void;
  update: (newCart: Cart) => void;
}

function addToCart(props: CartParams): Cart {
  props.items.push(Date.now().toLocaleString());
  return props;
}

export function AddToCart(cart: CartParams) {
  return (
    <button className='button'
            onClick={(event) => {
              event.stopPropagation()
              cart.update(addToCart(cart))
            }}
    >Add To Cart(${cart.items.length})</button>
  );
}


const CartAvatar = ({items, update}: CartParams) => {
  if (items.length) {
    return (
      <SvgShoppingCart onClick={(event) => {
        clickAvatar({items}, event);
      }} cart={{items}}/>
    )
  } else {
    return (
      <SvgStorefront onClick={(event) => {
        clickAvatar({items}, event)
        update({items})
      }}/>
    )
  }
}

function clickAvatar({items}: Cart, event: MouseEvent<Element, Event>) {
  if (items.length) {
    // show cart summary
    document.getElementById("cart-summary")!.classList.remove('hidden')
  } else {
    // go to the store
    items.push(`Storefront click: ${Date.now()}`)
  }
  if (event) { event.stopPropagation() }
}

export default CartAvatar