import React from 'react'
import './NavBar.scss'
import {FaRegSun} from 'react-icons/fa'
import Logo from '../../images/logo.png'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='navCont'>
        <div className='leftNav'>
          <img src={Logo} />
          <p>ORPHEUS</p>
        </div>
        <div className='rightNav'>
          <p>WORKS</p>
          <p>CONTRIBUTION</p>
          <p>COMMUNITY</p>
          <p>GET IN TOUCH</p>
          <FaRegSun />
        </div>
      </div>
    </div>
  )
}

export default NavBar