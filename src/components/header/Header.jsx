import React from 'react'
import Button from '../button/Button'
import './Header.scss'
import heroBg from '../../images/heroImgBg.png'
import hero from '../../images/hero.png'
import {FaAngleDown} from 'react-icons/fa'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerCont'>
        <div className='leftHeader'>
          <h1>Yet the story of <span>Orpheus</span></h1>
          <p className='leftBody'>Product &amp; Graphic Designer, with experience in delivering end-to-end UX/UI design for software products.</p>
          <div className='headButtons'>
            <Button Icon={FaAngleDown} text="WORKS" padding="32px" textColor="gradient" />
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