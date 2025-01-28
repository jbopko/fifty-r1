import {useState} from "react";
import Cart from './comp/cart/Cart';
import User from './comp/user/User';
import Content from './page/Content';
import Header from './page/Header';
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setLoggedIn(input: boolean) {
    setIsLoggedIn(input);
  }

  return (
    <>
      <Cart/>
      <Header/>
      <Content/>
      <User appHandler={setLoggedIn}/>
      <p>my local value is {isLoggedIn ? 'Yes' : 'No'}</p>
      {/*<Footer/>*/}
    </>
  )
}

export default App

