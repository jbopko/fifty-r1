import "./Header.css";
import {useState} from 'react';
import CartAvatar from '../comp/cart/CartAvatar';
import CartSummary from '../comp/cart/CartSummary';
import Demos from '../comp/Demos';
import Search from '../comp/search/Search';
import SearchAvatar from '../comp/search/SearchAvatar';
import UserAvatar from '../comp/user/UserAvatar';
import UserLogin from '../comp/user/UserLogin';
import UserProfile from '../comp/user/UserProfile';
import PageLink from '../routes/PageLink';
import {Navigate} from './Navigate';

const Header = () => {
  const [count] = useState();
  if (count && count > 10) {
    console.log(count);
  }
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
          <div className='invisibleForm right'><CartSummary/></div>
          <CartAvatar/>
          <div className='invisibleForm right'><UserLogin/><UserProfile/></div>
          <UserAvatar/>
        </div>
        <div id='status'>
          <div id='active-route'></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
