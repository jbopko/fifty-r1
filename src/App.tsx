import {useState} from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id='header'>
        <div id='header-left'>
          <div id='search'>
            <a href='/route1' onClick={() => setCount(count + 1)}>
              <svg className='svg-search'
                   xmlns='http://www.w3.org/2000/svg'
                   width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1'
                   stroke-linecap='round' stroke-linejoin='round'>
                <circle cx='11' cy='11' r='8'/>
                <path d='m21 21-4.3-4.3'/>
              </svg>
            </a>
            <input id='search-input' className='field-input' type='text' placeholder='Search...' autoComplete='off'/>
            {/*<a href='/route1' className='hide' onClick={() => setCount(count + 1)}>*/}
            {/*  <svg className='svg-arrows-right' xmlns='http://www.w3.org/2000/svg' width='24' height='24'*/}
            {/*       viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round'*/}
            {/*       stroke-linejoin='round'>*/}
            {/*    <path d='m6 17 5-5-5-5'></path>*/}
            {/*    <path d='m13 17 5-5-5-5'></path>*/}
            {/*  </svg>*/}
            {/*</a>*/}

          </div>
          <div id='menu-top-left'>
            <div id='menu-vertical'>
              <a href='/about'>Menu</a>
            </div>
            <div id='about'>
              <a href='/about'>About</a>
            </div>
          </div>
        </div>
        {/*</div>*/}
        <div id='header-right'>
          <div id='menu-top-right'>
            <div id='cart'>
              <a href='/route1'>
                <svg className='svg-store' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                     fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7'/>
                  <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'/>
                  <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4'/>
                  <path d='M2 7h20'/>
                  <path
                    d='M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7'/>
                </svg>
              </a>
              {/*<a href='/route1' className='hide'>*/}
              {/*  <svg className='svg-shop-cart' xmlns='http://www.w3.org/2000/svg' width='24' height='24'*/}
              {/*       viewBox='0 0 24 24'*/}
              {/*       fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>*/}
              {/*    <circle cx='8' cy='21' r='1'/>*/}
              {/*    <circle cx='19' cy='21' r='1'/>*/}
              {/*    <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'/>*/}
              {/*  </svg>*/}
              {/*</a>*/}
            </div>
            <div id='user-session'>
              <a href='/route1'>
                <svg className='svg-user-sq' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
                     viewBox='0 0 24 24'
                     fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
                  <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
              </a>
              {/*<a href='/route1' className='hide'>*/}
              {/*  <svg className='svg-user-sq-chk' xmlns='http://www.w3.org/2000/svg' width='24' height='24'*/}
              {/*       viewBox='0 0 24 24'*/}
              {/*       fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>*/}
              {/*    <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/>*/}
              {/*    <circle cx='9' cy='7' r='4'/>*/}
              {/*    <polyline points='16 11 18 13 22 9'/>*/}
              {/*  </svg>*/}
              {/*</a>*/}
            </div>
          </div>
          {/*<div id='status' className='border'>*/}
          {/*  <div id='crumbs' className='border'>*/}
          {/*    <em id='activeSection'></em>*/}
          {/*    <pre id='bc-separator'> &gt; </pre>*/}
          {/*    <em id='activeTopic'></em>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div id='content'>
        <div className='card'>
          <h1>FiftyPix!</h1>
        </div>

        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <div id='footer'>
        <div id='footer-left'>
          <a href='/route1'>
            <svg className='svg-linkedin' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                 fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'/>
              <rect width='4' height='12' x='2' y='9'/>
              <circle cx='4' cy='4' r='2'/>
            </svg>
          </a>
          <a href='/route1'>
            <svg className='svg-facebook' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                 fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
              <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/>
            </svg>
          </a>
          <a href='/route1'>
            <svg className='svg-instagram' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                 fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
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
            <svg className='svg-slack' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                 fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
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
            <svg className='svg-twitter' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                 fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
              <path
                d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'/>
            </svg>
          </a>
          <a href='/route2'>
            <svg className='svg-youtube' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'
                 fill='none' stroke='currentColor' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'>
              <path
                d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'/>
              <path d='m10 15 5-3-5-3z'/>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
