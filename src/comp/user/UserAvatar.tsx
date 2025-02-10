import {MouseEvent} from 'react';
import '../../assets/style/Card.css'
import {SvgUser, SvgUserCheck} from '../svg/Svgs';

export interface UserProps {
  appHandler: (input: UserInterface) => void,
  user: UserInterface
}

export interface UserInterface {
  username: string,
  isLoggedIn: boolean,
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

function clickAvatar(userProps: UserProps, event: MouseEvent<Element, Event>) {
  const user = userProps.user;

  if (user.isLoggedIn) {
    // show user login form
    const userProfile = document.querySelector("#user-profile")!
    const submitButton: HTMLButtonElement = userProfile.querySelector('button.submit')!
    userProfile.classList.remove('hidden')
    setTimeout(() => {
      submitButton.focus()
    }, 500)
  } else {
    // show user login form
    const userLogin = document.querySelector("#user-login")!
    userLogin.classList.remove('hidden')
    const userId: HTMLInputElement = userLogin.querySelector('input[type=text]')! as HTMLInputElement
    const password: HTMLInputElement = userLogin.querySelector('input[type=password]')! as HTMLInputElement
    userId.value = ''
    password!.value = ''
    setTimeout(() => {
      userId.focus()
    }, 500)
  }
  if (event) {event.stopPropagation()}
}

export default UserAvatar