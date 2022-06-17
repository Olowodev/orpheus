import React from 'react'
import Button from '../button/Button'
import './Header.scss'
import heroBg from '../../images/heroImgBg.png'
import hero from '../../images/hero.png'
import {FaRegAngleDown} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerCont'>
        <div className='leftHeader'>
          <h1>Yet the story of Orpheus</h1>
          <p>Product &26; Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
          <div className='headButtons'>
            <Button Icon={FaRegAngleDown} text="WORKS" padding="32px" textColor="gradient" />
            <Button text="FREE STUFF" padding="32px" textColor="black" borderRadius background />
          </div>
        </div>
        <div className='rightHeader'>
          <div className='hero'>
            <img src={hero} />
            <img src={heroBg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header