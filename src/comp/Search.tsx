import '../assets/style/Field.css'

function SearchNow(event: MouseEvent) {
  const thisComponent = document.querySelector('#search')
  const theInput = thisComponent!.querySelector('input')
  const queryStr = theInput!.value
  if (queryStr.length > 3) {
    console.log(`The query is ${queryStr} and the event came from ${thisComponent}`)
  }
  if (event) {
    event.stopPropagation()
  } else {
    console.log('Bad input')
  }
  theInput!.select()
}

function setFocus(event: MouseEvent) {
  const thisComponent = document.querySelector('#search')
  const theInput = thisComponent!.querySelector('input')

  console.log(`set focus: ${event.target} focusing on ${theInput}`)
  thisComponent!.classList.add('focused')
  theInput!.classList.add('focused')
  theInput!.focus()
}

function blurInput() {
  const thisComponent = document.querySelector('#search.field')
  const theInput = thisComponent!.querySelector('input')
  const theValue = theInput!.value

  if (theValue.length === 0) {
    setTimeout(() => {
      theInput!.classList.remove('focused')
      thisComponent!.classList.remove('focused')
    }, 100)
  }
}

const Search = () => {
  return (
    <div id='search' className='field'>
      <div className='field-focus' onClick={(e) => {
        setFocus(e as unknown as MouseEvent)
      }}>
        <svg
          className='svg-search'
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
          <circle cx='11' cy='11' r='8'/>
          <path d='m21 21-4.3-4.3'/>
        </svg>
      </div>
      <input
        onBlur={() => {
          blurInput()
        }}
        className='field-input'
        type='text'
        placeholder='Search...'
        autoComplete='off'
      />

      <div className='field-submit' onClick={(event) => SearchNow(event as unknown as MouseEvent)}>
        <svg className='svg-arrows-right' xmlns='http://www.w3.org/2000/svg' fill='none'
             width='24' height='24' viewBox='0 0 24 24'
             stroke='currentColor' strokeWidth='1'
             strokeLinecap='round' strokeLinejoin='round'
        >
          <path d='m6 17 5-5-5-5'></path>
          <path d='m13 17 5-5-5-5'></path>
        </svg>
      </div>
      <span className='field-msg'>HIDDEN</span>
    </div>
  )
}
export default Search