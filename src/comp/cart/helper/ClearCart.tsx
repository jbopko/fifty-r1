import {closeSummary} from './CloseSummary';

export const clearCart = (event: MouseEvent) => {
  const root = document.getElementById('root');
  const cart = document.getElementById('cart');
  const items = document.getElementById('itemsInCart')!

  items.innerHTML = '';
  cart?.classList.remove('hasItems');
  root?.classList.remove('hasItems');
  closeSummary(event)
}