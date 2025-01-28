import {useState} from "react";
import {CartInterface} from './comp/cart/Cart';
import {UserInterface} from './comp/user/User.tsx';
import Content from './page/Content';
import Header from './page/Header';
import "./App.css"

function App() {
  const [user, setUser] = useState({username: 'guest', isLoggedIn: false});
  const [cart, setCart] = useState({items: ['']});

  function updateUser(update: UserInterface) {
    setUser(update);
  }

  function updateCart(update: CartInterface) {
    setCart(update);
  }

  return (

    <>
      <Header
        userProps={{user: user, appHandler: updateUser}}
        cartProps={{cart: cart, appHandler: updateCart}}/>
      <Content/>
      <p>State - isLoggedIn: {user.isLoggedIn ? 'Yes' : 'No'}</p>
      {/*<Footer/>*/}
    </>
  )
}

export default App

