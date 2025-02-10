import {useState} from "react";
import {Cart} from './comp/cart/CartAvatar.tsx';
import {UserInterface} from './comp/user/UserAvatar';
import Content from './page/Content';
import Footer from './page/Footer.tsx';
import Header from './page/Header';
import "./App.css"
import "./comp/cart/Cart.css"
import "./comp/user/User.css"

function App() {
  const [user, setUser] = useState({username: 'guest', isLoggedIn: false});
  const [cart, setCart] = useState({items: new Array<string>(), timestamp: Date.now()} as Cart);

  function updateUser(update: UserInterface) {
    setUser(update);
  }

  function updateCart(update: Cart) {
    console.log(`Before: ${cart.items.length}`)
    if (update) {
      if (cart === update) {
        console.log('same')
      } else {
        console.log('different')
      }
      setCart({items: update.items, timestamp: Date.now()})
    } else {
      setCart({items: new Array<string>(), timestamp: Date.now()})
    }
    console.log(`After: ${cart.items.length}`)
  }

  return (
    <>
      <Header
        userProps={{user: user, appHandler: updateUser}}
        cartProps={{items: cart.items, update: updateCart}}/>
      <Content
        userProps={{user: user, appHandler: updateUser}}
        cartProps={{items: cart.items, update: updateCart}}/>
      <Footer/>
    </>
  )
}

export default App

