import {MouseEvent} from 'react';
import '../../assets/style/Card.css'
import {UserInterface, UserProps} from './User';

function clickAvatar(userProps: UserProps, event: MouseEvent<Element, Event>) {
  const user = userProps.user;

  if (user.isLoggedIn) {
    // show user login form
    const userProfile = document.querySelector("#user-profile")
    if (userProfile) {
      const submitButton: HTMLButtonElement = userProfile.querySelector('button.submit')! as HTMLButtonElement
      userProfile.classList.remove('hidden')
      setTimeout(() => {
        submitButton.focus()
      }, 500)
    }
  } else {
    // show user login form
    const userLogin = document.querySelector("#user-login")
    if (userLogin) {
      userLogin.classList.remove('hidden')
      const userId: HTMLInputElement = userLogin.querySelector('input[type=text]')! as HTMLInputElement
      const password: HTMLInputElement = userLogin.querySelector('input[type=password]')! as HTMLInputElement
      userId.value = ''
      password!.value = ''
      setTimeout(() => {
        userId.focus()
      }, 500)
    }
  }
  if (event) {event.stopPropagation()}
}

function SvgUser(props: { onClick: (e: MouseEvent) => void }) {
  return (
    <div id='user-avatar' onClick={props.onClick}>
      <svg
        className='svg-user-sq'
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
        <circle cx='12' cy='7' r='4'></circle>
      </svg>
    </div>
  )
}

function SvgUserCheck(props: { onClick: (e: MouseEvent) => void }) {
  return <div id='user-avatar' onClick={props.onClick}>
    <svg className='svg-user-sq-chk' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
         viewBox='0 0 24 24'
         fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/>
      <circle cx='9' cy='7' r='4'/>
      <polyline points='16 11 18 13 22 9'/>
    </svg>
  </div>;
}

const UserAvatar = (props: UserProps) => {
  const user = props.user as UserInterface

  if (user.isLoggedIn) {
    return (
      <SvgUserCheck onClick={(e) => {
        clickAvatar(props, e)
      }}/>
    )
  } else {
    return (
      <SvgUser onClick={(e) => {
        clickAvatar(props, e)
      }}/>
    )
  }
}
export default UserAvatar