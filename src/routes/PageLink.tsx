import {Navigate} from '../page/Navigate';

const PageLink = () => {
  return (
    <div id='pg-about' className='title link'
         onClick={(event) => {
           Navigate('', event);
         }}>
      About
    </div>
  )
}
export default PageLink