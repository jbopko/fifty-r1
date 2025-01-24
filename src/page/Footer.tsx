import './Footer.css'

const Footer = () => {
  // const [count, setCount] = useState(0)
  return (
    <div id='footer'>
      <div id='footer-left'>
        <a href='/route1'>
          <svg
            className='svg-linkedin'
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
            <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/>
            <rect width='4' height='12' x='2' y='9'/>
            <circle cx='4' cy='4' r='2'/>
          </svg>
        </a>
        <a href='/route1'>
          <svg
            className='svg-facebook'
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
            <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/>
          </svg>
        </a>
        <a href='/route1'>
          <svg
            className='svg-instagram'
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
            <rect width='20' height='20' x='2' y='2' rx='5' ry='5'/>
            <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/>
            <line x1='17.5' x2='17.51' y1='6.5' y2='6.5'/>
          </svg>
        </a>
      </div>
      <div className='mid'>
        <p>
          Dolorem <code>Ipsum</code>
        </p>
        <p className='read-the-docs'>None seek pain, itself</p>
      </div>
      <div id='footer-right'>
        <a href='/route2'>
          <svg
            className='svg-slack'
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
            <rect width='3' height='8' x='13' y='2' rx='1.5'></rect>
            <path d='M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5'></path>
            <rect width='3' height='8' x='8' y='14' rx='1.5'></rect>
            <path d='M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5'></path>
            <rect width='8' height='3' x='14' y='13' rx='1.5'></rect>
            <path d='M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5'></path>
            <rect width='8' height='3' x='2' y='8' rx='1.5'></rect>
            <path d='M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5'></path>
          </svg>
        </a>
        <a href='/route2'>
          <svg
            className='svg-twitter'
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
            <path
              d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'/>
          </svg>
        </a>
        <a href='/route2'>
          <svg
            className='svg-youtube'
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
            <path
              d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'/>
            <path d='m10 15 5-3-5-3z'/>
          </svg>
        </a>
      </div>
    </div>
  )
}
export default Footer