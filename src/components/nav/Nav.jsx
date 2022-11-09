import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from 'react-icons/bi'
import { MdWorkOutline } from "react-icons/md"
import { MdOutlineContactPhone } from "react-icons/md"
import { useState } from 'react'


const Nav = () => {

  const [activeLink, setActiveLink] = useState("#");
  return (
    <nav>
      <a className={activeLink == "#" ? "active" : ""} onClick={() => setActiveLink("#")} href='#' > <AiOutlineHome /> </a>
      <a className={activeLink == "#about" ? "active" : ""} onClick={() => setActiveLink("#about")} href='#about'> <AiOutlineUser /> </a>
      <a className={activeLink == "#experience" ? "active" : ""} onClick={() => setActiveLink("#experience")} href='#experience'><BiBook /></a>
      <a className={activeLink == "#portfolio" ? "active" : ""} onClick={() => setActiveLink("#portfolio")} href='#portfolio'><MdWorkOutline /></a>
      <a className={activeLink == "#contact" ? "active" : ""} onClick={() => setActiveLink("#contact")} href='#contact'><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav;