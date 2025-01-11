import React from 'react'
import { Link } from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import "./Header.scss"
const Header = () => {
  return (
    <>
      <div className="header">
        <ul className='header__li'>
          <li className='header__li--item header__li--logo'><Link to="/"><img src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="" /></Link></li>
          <li className='header__li--item'><Link to="/store">Store</Link></li>
          <li className='header__li--item'><Link to="/pc">Pc</Link></li>
          <li className='header__li--item'><Link to="/console">Console</Link></li>
          <li className='header__li--item'><Link to="/mobile">Mobile</Link></li>
          <li className='header__li--item'><AiOutlineSearch className='header__li--icon'/></li>
          <li className='header__li--item'><Link to="/cart"><AiOutlineShoppingCart className='header__li--icon'/></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
