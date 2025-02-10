import '../../assets/style/Platform.css'
import '../../assets/style/Button.css'
import '../../assets/style/Checkbox.css'
import {UserInterface, UserProps} from './UserAvatar';

const UserProfile = (userProps: UserProps) => {
  if (userProps) {
    console.log(userProps.user.username);
  }
  return (
    <div id='user-profile' className='platform hidden'>
      <div className='title'>jbopko&#64;gmail.com</div>
      <img src='src/assets/img/profile.png' alt='Jeremiah'/>
      <div>Jeremiah</div>
      <button className='button submit'
              onClick={() => {
                const user = Logout()
                if (user && userProps.appHandler) {
                  userProps.appHandler(user)
                }
              }}>Sign Out
      </button>
      <span id='account-summary-manage' className='link right'>Manage Account..</span>
      <div className='links'>
        <div className='link left'>Privacy Policy</div>
        <div className='link right'>Terms of Service</div>
      </div>
    </div>
  )
}
const Logout = () => {
  const user: UserInterface = {
    username: 'guest',
    isLoggedIn: false,
  }
  document.getElementById('user-profile')!.classList.add('hidden')
  return user
}
export default UserProfile;