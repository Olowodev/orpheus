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
          <a href='#works'><p>WORKS</p></a>
          <a href='#contribution'><p>CONTRIBUTION</p></a>
          <a href='#contact'><p>GET IN TOUCH</p></a>
          <FaRegSun style={{fontSize: "29px"}} />
        </div>
      </div>
    </div>
  )
}

export default NavBar