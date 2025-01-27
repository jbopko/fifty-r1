import {useState} from 'react';
import {Login} from './helper/LoginSubmit';
import '../../assets/style/Platform.css'
import '../../assets/style/Button.css'
import '../../assets/style/Checkbox.css'

const UserLogin = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div id='user-login' className='platform hidden'>
      <div className='title'>Login</div>
      <div className='fields'>
        <div className='field'>
          <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
               fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
            <circle cx='12' cy='8' r='5'></circle>
            <path d='M20 21a8 8 0 0 0-16 0'></path>
          </svg>
          <input type='text' placeholder='Username' autoComplete='off'/>
          <span>Username</span>
        </div>
        <div className='field'>
          <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'
               fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
            <path d='m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4'></path>
            <path d='m21 2-9.6 9.6'></path>
            <circle cx='7.5' cy='15.5' r='5.5'></circle>
          </svg>
          <input type='password' placeholder='Password' autoComplete='off'
                 onKeyDown={(event) => {
                   if (event.key === 'Enter') { Login(null) }
                 }}/>
          <div className='field-submit' onClick={(event) => {
            if (event) { Login(event) }
          }}>
            <svg fill='none' height='24' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                 strokeWidth='1' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
              <path d='m9 18 6-6-6-6'></path>
            </svg>
          </div>
          <span>Password</span>
        </div>
      </div>
      <button className='button submit'
              onClick={(event) => {
                setTimeout(function () {
                  Login(event)
                }, 100)
                if (event) {
                  event.stopPropagation()
                }
              }}>Login
      </button>
      <label className='check-box'>Remember me
        <input type='checkbox' checked={checked}
               onChange={(event) => {
                 setChecked(event.target.checked);
               }}
        />
        <span className='checkmark'></span>
      </label>
      <div className='links'>
        <div className='link left'>Create Account</div>
        <div className='link right'>Forgot Password</div>
      </div>
    </div>
  )
}
export default UserLogin;