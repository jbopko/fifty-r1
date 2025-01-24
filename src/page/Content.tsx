import {useState} from "react"
import './Content.css'
import '../assets/style/Platform.css'
import CartSummary from '../routes/form/CartSummary.tsx';

function MyButton() {
  // Each component has its own version of state
  // with this mechanism
  const [count, setCount] = useState(0)
  return (
    <button
      onClick={() => setCount(count + 1)}
    >StateCheck: {count}</button>
  )
}

const Content = () => {
  return (
    <div id='content'>
      <div className='platform'>
        <h1>FiftyPix!</h1>
      </div>

      <div className='platform'>
        <MyButton/>
      </div>
      <CartSummary/>
    </div>
  )
}
export default Content