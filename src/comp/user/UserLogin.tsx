import {useState} from 'react';
import {UserInterface, UserProps} from './User.tsx';
import '../../assets/style/Platform.css'
import '../../assets/style/Button.css'
import '../../assets/style/Checkbox.css'

const UserLogin = (userProps: UserProps) => {
  const [checked, setChecked] = useState(true);

  if (userProps) {
    console.log(userProps.user.username);
  }
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
                   if (event.key === 'Enter' && validate()) {
                     const user = Login()
                     if (user && userProps.appHandler) {
                       userProps.appHandler(user)
                     }
                   }
                 }}/>
          <div className='field-submit' onClick={() => {
            if (validate()) {
              const user = Login()
              if (user && userProps.appHandler) {
                userProps.appHandler(user)
              }
            }
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
              onClick={() => {
                if (validate()) {
                  const user = Login()
                  if (user && userProps.appHandler) {
                    userProps.appHandler(user)
                  }
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

const Login = (): UserInterface => {
  const user: UserInterface = {
    username: 'guest',
    isLoggedIn: false,
  }

  if (user) {
    const thisComponent = document.querySelector("#user-login")!
    const username = (thisComponent.querySelector('input[type=text]') as HTMLInputElement).value;
    const password = (thisComponent.querySelector('input[type=password]') as HTMLInputElement).value;

    if (username && password) {
      user.isLoggedIn = true
      user.username = username
    }
    thisComponent.classList.add('hidden')
  }
  return user
}

function validate(): boolean {
  const thisComponent = document.querySelector("#user-login")!
  const username = (thisComponent.querySelector('input[type=text]') as HTMLInputElement).value;
  const password = (thisComponent.querySelector('input[type=password]') as HTMLInputElement).value;
  return (username.length > 0 && password.length > 0)
}

export default UserLogin;