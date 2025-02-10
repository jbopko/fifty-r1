import './Content.css'
import '../assets/style/Platform.css'
import {AddToCart, CartParams} from '../comp/cart/CartAvatar.tsx';
import '../assets/style/Button.css'
import {UserProps} from '../comp/user/UserAvatar.tsx';

interface ContentProps {
  userProps: UserProps;
  cartProps: CartParams;
}

const Content = (props: ContentProps) => {
  if (props.userProps !== undefined) {
    // console.log('console')
  }
  return (
    <div id='content'>
      <AddToCart
        items={props.cartProps.items}
        update={props.cartProps.update}/>
    </div>
  )
}
export default Content