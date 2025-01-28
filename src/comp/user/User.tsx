import './User.css'

export interface UserProps {
  appHandler: (input: UserInterface) => void,
  user: UserInterface
}

export interface UserInterface {
  username: string,
  isLoggedIn: boolean,
}

const User = (user: UserInterface) => {
  if (user) {
    console.log(user.username);
  }
  return (

    <div id='user' className='border'>
      <div id='userId'>{user.username}</div>
    </div>
  );
}
export default User