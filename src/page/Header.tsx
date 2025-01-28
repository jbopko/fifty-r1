import "./Header.css";
import "../comp/user/User.css";
import {CartProps} from '../comp/cart/Cart';
import CartAvatar from '../comp/cart/CartAvatar';
import CartSummary from '../comp/cart/CartSummary';
import Demos from '../comp/Demos';
import Search from '../comp/search/Search';
import SearchAvatar from '../comp/search/SearchAvatar';
import {UserProps} from '../comp/user/User';
import UserAvatar from '../comp/user/UserAvatar';
import UserLogin from '../comp/user/UserLogin';
import UserProfile from '../comp/user/UserProfile.tsx';
import PageLink from '../routes/PageLink';
import {Navigate} from './Navigate';

interface HeaderProps {
  userProps: UserProps;
  cartProps: CartProps;
}

const Header = (props: HeaderProps) => {
  return (
    <div id='header'>
      <div id='header-left'>
        <div id='top-left'>
          <SearchAvatar/>
          <div className='invisibleForm left'><Search/></div>
          <PageLink/>
        </div>
        <div id='adminOptions'>
          <Demos/>
          <div id='theme'></div>
        </div>
      </div>
      <div id='header-mid' onClick={(event) => {
        Navigate('', event);
      }}>
      </div>
      <div id='header-right'>
        <div id='top-right'>
          <div className='invisibleForm right'>
            <CartSummary
              appHandler={props.cartProps.appHandler}
              cart={props.cartProps.cart}/>
          </div>
          <CartAvatar
            appHandler={props.cartProps.appHandler}
            cart={props.cartProps.cart}/>
          <div className='invisibleForm right'>
            <UserLogin
              appHandler={props.userProps.appHandler}
              user={props.userProps.user}/>
            <UserProfile
              appHandler={props.userProps.appHandler}
              user={props.userProps.user}/>
          </div>
          <UserAvatar
            appHandler={props.userProps.appHandler}
            user={props.userProps.user}/>
          {/*<User appHandler={setLoggedIn}/>*/}
        </div>
        <div id='status'>
          <div id='active-route'></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
