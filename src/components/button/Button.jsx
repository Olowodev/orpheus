import React from 'react'
import './Button.scss'

const Button = ({Icon, text, background, borderRadius, padding, textColor, reverse}) => {
  return (
    <div className='button' style={{ background: background ? "linear-gradient(295.38deg, #FFE5A2 4.89%, #BF841A 50.44%, #FFCD74 95.06%)" : "transparent", borderRadius: borderRadius ? "5px" : null, padding: `0 ${padding}`, flexDirection: reverse ? "row-reverse" : null  }}>
      <p className={textColor}>{text}</p>
      <Icon />
    </div>
  )
}

export default Button