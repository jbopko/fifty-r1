import "./Header.css";
import {useState} from 'react';
import Account from '../comp/Account.tsx';
import Cart from '../comp/Cart.tsx';
import Demos from '../comp/Demos.tsx';
import Search from '../comp/Search';
import Contact from '../routes/Contact';

const Header = () => {
  const [count] = useState();
  return (
    <div id='header'>
      <div id='header-left'>
        <div id='nav-left'>
          <Search/>
          <Contact/>
        </div>
        <div id='adminOptions'>
          <Demos/>
          <div id='theme'></div>
        </div>
      </div>
      <div id='header-mid'>{count}</div>
      <div id='header-right'>
        <div id='nav-right'>
          <Cart/>
          <Account/>
        </div>
        <div id='status'>
          <div id='crumbs'>
            <em id='activeSection'></em>
            <pre id='bc-separator'> &gt; </pre>
            <em id='activeTopic'></em>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
