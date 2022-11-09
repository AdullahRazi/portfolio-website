import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
    <div className='container container__header'>
      <h5>Hello I'm</h5>
      <h1>Abdullah Razi</h1>
      <h5 className='text-light'>a programmer</h5>
      <CTA />
      <HeaderSocial />
      <div className='me'>
        <img src={ME}></img>
      </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
    </header>
  )
}

export default Header