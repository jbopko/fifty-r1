import '../assets/style/Menu.css'
import {Navigate} from '../page/Navigate';

function clickAvatar(event: MouseEvent) {
  const demo = document.querySelector("#demo-avatar")

  if (event && demo) {
    event.stopPropagation()
  }
}

const Demos = () => {
  return (
    <div id='demo-avatar' className='card' onClick={(e) => {
      clickAvatar(e as unknown as MouseEvent)
    }}>
      <div className='spinner'>
        <div className='face'>
          <svg fill='none' height='24' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
               strokeWidth='1' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
            <line x1='4' x2='20' y1='6' y2='6'></line>
            <line x1='6' x2='18' y1='12' y2='12'></line>
            <line x1='4' x2='20' y1='18' y2='18'></line>
          </svg>
        </div>
        <div className='back'>
          <div id='menu-nav' className='menu'>
            <div className='title'>
              <span>Demos</span>
            </div>
            <div className='menu-items'>
              <div id='mnu-demo-form' className='menu-item' onClick={(event) => {
                Navigate('Demos', event);
              }}>Forms
              </div>
              <div id='mnu-demo-routes' className='menu-item' onClick={(event) => {
                Navigate('Demos', event);
              }}>Routes
              </div>
              <div id='mnu-comp' className='menu'>
                <div className='title'>
                  <span>Components</span>
                </div>
                <div className='menu-items sub'>
                  <div id='mnu-comp-cart' className='menu-item' onClick={(event) => {
                    Navigate('Components', event);
                  }}>Cart
                  </div>
                  <div id='mnu-comp-user' className='menu-item' onClick={(event) => {
                    Navigate('Components', event);
                  }}>User
                  </div>
                </div>
              </div>

              <div id='mnu-demo-asyn' className='menu-item' onClick={(event) => {
                Navigate('Demos', event);
              }}>Async Operations
              </div>
              <div id='mnu-demo-other' className='menu-item' onClick={(event) => {
                Navigate('Demos', event);
              }}>Other
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Demos