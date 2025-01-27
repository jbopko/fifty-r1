import '../../assets/style/Card.css'

function clickAvatar(event: MouseEvent) {
  const searchPlatform = document.querySelector("#search-platform")

  // show user login form
  if (searchPlatform) {
    searchPlatform.classList.toggle('hidden')
    const searchField: HTMLInputElement = searchPlatform.querySelector('input[type=text]')! as HTMLInputElement

    searchField.value = ''
    setTimeout(() => {
      searchField.focus()
    }, 500)
  }
  if (event) {
    event.stopPropagation()
  }
}

const SearchAvatar = () => {
  return (
    <div id='search-avatar' className='card' onClick={(e) => {
      clickAvatar(e as unknown as MouseEvent)
    }}>
      <svg className='svg-search' xmlns='http://www.w3.org/2000/svg'
           width='24' height='24' viewBox='0 0 24 24' fill='none'
           stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
        <circle cx='11' cy='11' r='8'/>
        <path d='m21 21-4.3-4.3'/>
      </svg>
    </div>
  )
}
export default SearchAvatar