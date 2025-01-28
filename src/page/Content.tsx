import './Content.css'
import '../assets/style/Platform.css'
import Game from '../comp/Tic.tsx';

// import CartSummary from '../routes/form/CartSummary';

const Content = () => {
  return (
    <div id='content'>
      <Game/>
      {/*<AddToCart/>*/}
    </div>
  )
}
export default Content