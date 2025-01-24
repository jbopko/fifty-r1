import {MouseEvent} from 'react';

function clickUser(e: MouseEvent) {
  console.log(e)
  const element = document.querySelector("#user-session")
  if (element) {
    element.classList.toggle('flip')
  }
}

const Account = () => {
  return (
    <div id='user-session' className='card' onClick={(e) => {
      clickUser(e)
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
export default Account