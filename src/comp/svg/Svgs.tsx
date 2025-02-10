import {MouseEvent} from 'react';
import {Cart} from '../cart/CartAvatar.tsx';


export const SvgUser = (props: { onClick: (e: MouseEvent) => void }) => {
  return (
    <div id='user-avatar' onClick={props.onClick}>
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
  )
}

export const SvgUserCheck = (props: { onClick: (e: MouseEvent) => void }) => {
  return <div id='user-avatar' onClick={props.onClick}>
    <svg className='svg-user-sq-chk' xmlns='http://www.w3.org/2000/svg' width='24' height='24'
         viewBox='0 0 24 24'
         fill='none' stroke='currentColor' strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/>
      <circle cx='9' cy='7' r='4'/>
      <polyline points='16 11 18 13 22 9'/>
    </svg>
  </div>;
}

export const SvgStorefront = (props: { onClick: (e: MouseEvent) => void }) => {
  return <div id='cart-avatar' onClick={props.onClick}>
    <svg xmlns='http://www.w3.org/2000/svg' fill='none' strokeLinecap='round' strokeLinejoin='round'
         stroke='currentColor' strokeWidth='1'
         width='24' height='24' viewBox='0 0 24 24'
         className='svg-store'>
      <path d='m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7'/>
      <path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'/>
      <path d='M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4'/>
      <path d='M2 7h20'/>
      <path
        d='M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7'/>
    </svg>
  </div>;
}

export const SvgShoppingCart = (props: SvgCartProps) => {
  return <div id='cart-avatar' onClick={props.onClick}>
    <svg className='svg-shop-cart' fill='none' height='24' stroke='currentColor'
         viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='8' cy='21' r='1'></circle>
      <circle cx='19' cy='21' r='1'></circle>
      <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12'></path>
    </svg>
    <div className='badge'>{props.cart.items.length}</div>
  </div>;
}

export interface SvgProps {
  onClick: (event: MouseEvent) => void
}

export interface SvgCartProps {
  onClick: (event: MouseEvent) => void
  cart: Cart
}


export function SvgSubmitArrow(props: SvgProps) {
  return <div className='field-submit'
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                props.onClick(e)
              }}>
    <svg className='svg-submit' xmlns='http://www.w3.org/2000/svg' fill='none'
         stroke='currentColor' width='24' height='24' viewBox='0 0 24 24'
         strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
      <path
        d='M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z'/>
      <path d='M6 12h16'/>
    </svg>
  </div>;
}

export function SvgNotebook(props: SvgProps) {
  return <div className='field-submit'
              onClick={e => {
                e.stopPropagation()
                e.preventDefault()
                props.onClick(e)
              }}>
    <svg className='svg-submit' xmlns='http://www.w3.org/2000/svg' fill='none'
         stroke='currentColor' width='24' height='24' viewBox='0 0 24 24'
         strokeWidth='1' strokeLinecap='round' strokeLinejoin='round'>
      <path d='M2 6h4'/>
      <path d='M2 10h4'/>
      <path d='M2 14h4'/>
      <path d='M2 18h4'/>
      <rect width='16' height='20' x='4' y='2' rx='2'/>
      <path d='M15 2v20'/>
      <path d='M15 7h5'/>
      <path d='M15 12h5'/>
      <path d='M15 17h5'/>
    </svg>
  </div>;
}