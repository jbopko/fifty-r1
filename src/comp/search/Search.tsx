import '../../assets/style/Field.css'
import './Search.css'
import {KeyboardEvent, MouseEvent} from 'react';
import {SvgSubmitArrow} from '../svg/Svgs.tsx';

export function SearchNow(e: MouseEvent<Element, Event> | KeyboardEvent<HTMLInputElement>) {
  e.stopPropagation()
  e.preventDefault()
  const popup = document.getElementById('search-platform')!
  const input: HTMLInputElement = popup.querySelector('input[type=text]')!
  console.log(`Searching: ${input.value!.toUpperCase()}`)

  input.select()
  setTimeout(() => {
    input.value = ''
    input.blur()
  }, 3000)
  setTimeout(() => {
    popup.classList.add('hidden')
  }, 4000)
  // return ['[-_-] -=- [-_-]']
}

// function blurInput(event: FocusEvent<HTMLInputElement, Element>) {
//   if (event) {
//     // event.stopPropagation()
//     // event.preventDefault()
//   }
// }

const Search = () => {
  return (
    <div id='search-platform' className='platform left hidden'>
      <div className='title'>Search</div>
      <div className='field'>
        <svg className='svg-search' xmlns='http://www.w3.org/2000/svg'
             width='24' height='24' viewBox='0 0 24 24' fill='none'
             stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='11' cy='11' r='8'/>
          <path d='m21 21-4.3-4.3'/>
        </svg>
        <input className='' type='text' placeholder='...' autoComplete='off'
               onKeyDown={(event) => {
                 if (event.key === 'Enter') {
                   SearchNow(event)
                 }
               }}/>
        <SvgSubmitArrow onClick={SearchNow}/>
        <span className='hidden'>Search</span>
      </div>
    </div>
  )
}
export default Search
