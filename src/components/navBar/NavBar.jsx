import React from 'react'
import './NavBar.scss'
import {FaRegSun, FaRegMoon} from 'react-icons/fa'
import Logo from '../../images/logo.png'
import lightLogo from '../../images/lightLogo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { changeTheme } from '../../redux/actions'

const NavBar = () => {

  const [clicked, setClicked] = useState(false);
  const theme = useSelector((state) => state.theme.theme === null ? null : state.theme.theme)
  const body = document.body;
  const dispatch = useDispatch();

  const switchTheme = (e) => {
    setClicked(!clicked);
    if (theme === "dark") {
      body.classList.replace("dark", "light");
      changeTheme(dispatch, "light")
    } else {
      body.classList.replace("light", "dark");
      changeTheme(dispatch, "dark")
    }
  }

  return (
    <div className='navBar'>
      <div className='navCont'>
      <a href='#home'>
        <div className='leftNav'>
          <img src={theme === "light" ? lightLogo : Logo} />
          <p>ORPHEUS</p>
        </div>
        </a>
        <div className='rightNav'>
          <a href='#works'><p>WORKS</p></a>
          <a href='#contribution'><p>CONTRIBUTION</p></a>
          <a href='#contact'><p>GET IN TOUCH</p></a>
          {clicked ? <FaRegMoon onClick={switchTheme} style={{fontSize: "29px", cursor: "pointer"}} /> : <FaRegSun onClick={switchTheme} style={{fontSize: "29px", cursor: "pointer"}} />}
        </div>
      </div>
    </div>
  )
}

export default NavBar