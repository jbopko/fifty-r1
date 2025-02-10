import "./Header.css";
import "../comp/user/User.css";
import CartAvatar, {CartParams} from '../comp/cart/CartAvatar';
import CartSummary from '../comp/cart/CartSummary';
import Demos from '../comp/Demos';
import Search from '../comp/search/Search';
import SearchAvatar from '../comp/search/SearchAvatar';
import UserAvatar, {UserProps} from '../comp/user/UserAvatar';
import UserLogin from '../comp/user/UserLogin';
import UserProfile from '../comp/user/UserProfile';
import PageLink from '../routes/PageLink';
import {Navigate} from './Navigate';

interface HeaderProps {
  userProps: UserProps;
  cartProps: CartParams;
}

const Header = (props: HeaderProps) => {
  const cart = props.cartProps;
  // const user = props.userProps;

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
            <CartSummary items={cart.items} update={cart.update}/>
          </div>
          <CartAvatar items={cart.items} update={cart.update}/>
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
