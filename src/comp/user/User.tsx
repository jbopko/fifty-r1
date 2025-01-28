import './User.css'

interface UserProps {
  appHandler: (input: boolean) => void;
}

function checkClassList(): boolean {
  const currentUser = document.querySelector('#user')
  if (currentUser) {
    return currentUser.classList.contains('isLoggedIn')
  }
  return false
}

const User = ({appHandler}: UserProps) => {
  appHandler(checkClassList())
  return (
    <div id='user' className='border'>
      <div id='userId'>guest</div>
    </div>
  );
}
export default User