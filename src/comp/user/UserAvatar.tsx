import '../../assets/style/Card.css'

function clickAvatar(event: MouseEvent) {
  const user = document.querySelector("#user")
  if (user && user.classList.contains('isLoggedIn')) {
    // show user login form
    const userProfile = document.querySelector("#user-profile")
    if (userProfile) {
      const submitButton: HTMLButtonElement = userProfile.querySelector('button.submit')! as HTMLButtonElement
      userProfile.classList.toggle('hidden')
      setTimeout(() => {
        submitButton.focus()
      }, 500)
    }
  } else {
    // show user login form
    const userLogin = document.querySelector("#user-login")
    if (userLogin) {
      userLogin.classList.toggle('hidden')
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

const UserAvatar = () => {
  return (
    <div id='user-avatar' className='card' onClick={(e) => {
      clickAvatar(e as unknown as MouseEvent)
    }}>
      <div className='spinner'>
        <div className='face'>
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
        <div className='back'>
          <svg className='svg-user-sq-chk' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
               viewBox='0 0 24 24'
               fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/>
            <circle cx='9' cy='7' r='4'/>
            <polyline points='16 11 18 13 22 9'/>
          </svg>
        </div>
      </div>
    </div>
  )
}
export default UserAvatar