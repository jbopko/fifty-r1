import {Logout} from './helper/LoginSubmit';
import '../../assets/style/Platform.css'
// import Close from './helper/Submit'
// import Submit from './helper/Close';

const UserProfile = () => {
  return (
    <div id='user-profile' className='platform hidden'>
      <div className='title'>jbopko&#64;gmail.com</div>
      <img src='src/assets/img/profile.png' alt='Jeremiah'/>
      <div className='title'>Jeremiah</div>
      <button className='button submit'
              onClick={(event) => {
                Logout(event)
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
export default UserProfile;