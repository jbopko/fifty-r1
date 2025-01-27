import {FocusEvent, MouseEvent} from 'react'
import '../../assets/style/Field.css'
import './Search.css'

function SearchNow(event: MouseEvent<HTMLDivElement, Event>) {
  const searchPlatform: HTMLDivElement = document.querySelector('#search-platform')!
  const field = searchPlatform.querySelector('.field')
  const theInput: HTMLInputElement = field!.querySelector('input')!
  const queryStr = theInput!.value
  if (queryStr.length > 3) {
    console.log(`The query is ${queryStr} and the event came from ${field}`)
  }
  if (event) {
    event.stopPropagation()
    theInput?.select()
  } else {
    console.log('Bad input')
  }
  theInput!.select()
}

function blurInput(event: FocusEvent<HTMLInputElement, Element>) {
  const thisComponent = document.querySelector('#search-platform .field')
  const theInput = thisComponent!.querySelector('input')
  const theValue = theInput!.value

  if (theValue.length === 0) {
    setTimeout(() => {
      console.log(theValue)
    }, 100)
  }
  if (event) {
    event.stopPropagation()
  }
}

const Search = () => {
  return (
    <div id='search-platform' className='platform hidden'>
      <div className='title'>Search</div>
      <div className='field'>
        <svg className='svg-search' xmlns='http://www.w3.org/2000/svg'
             width='24' height='24' viewBox='0 0 24 24' fill='none'
             stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
          <circle cx='11' cy='11' r='8'/>
          <path d='m21 21-4.3-4.3'/>
        </svg>
        <input className='' type='text' placeholder='...' autoComplete='off'
               onBlur={(event) => {
                 blurInput(event)
               }}/>
        <div className='field-submit'
             onClick={(event) => {
               if (event) {
                 SearchNow(event)
               }
             }}>
          <svg fill='none' height='24' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
               strokeWidth='1' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
            <path d='m9 18 6-6-6-6'></path>
          </svg>
        </div>
        <span className='hidden'>Search</span>
      </div>
    </div>
  )
}
export default Search
