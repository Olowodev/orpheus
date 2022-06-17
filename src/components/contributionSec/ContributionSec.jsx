import React from 'react'
import Button from '../button/Button'
import './ContributionSec.scss'
import { FaArrowAltToBottom } from "react-icons/fa";
import contribution1 from '../../images/contribute1.png'
import contribution2 from '../../images/contribute2.png'


const ContributionSec = () => {
  return (
    <div className="contributionSec">
        <div className="contributeCont">
            <div className="cTitleCont">
                <div className="cTitle">
                    <h2>CONTRIBUTION</h2>
                    <div className='vline'></div>
                    <p>VIEW MORE</p>
                </div>
            </div>
            <div className="contributeCards">
                <div className="contributeCard">
                    <img src={contribution1} />
                    <div className="cCardText">
                        <h1>3D GREEK STATUE PACK</h1>
                        <h2>OVER 200 GREEK STYLE SCULPTURE</h2>
                        <Button reverse text="DOWNLOAD" background borderRadius textColor="black" padding="15px" Icon={FaArrowAltToBottom} />
                    </div>
                </div>
                <div className="contributeCard">
                    <div className="cCardText">
                        <h1>GREEK STATUE AVATARS</h1>
                        <h2>+500 GREEK STYLE USER AVATARS</h2>
                        <Button reverse text="DOWNLOAD" background borderRadius textColor="black" padding="15px" Icon={FaArrowAltToBottom} />
                    </div>
                    <img src={contribution2} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContributionSec