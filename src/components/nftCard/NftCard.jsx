import React from 'react'
import './NftCard.scss'

const NftCard = ({nftCard}) => {
  return (
    <div className='nftCard'>
      <img src={nftCard.img} />
      <div className='nftAbsolute'>
        <p>{nftCard.title}</p>
      </div>
    </div>
  )
}

export default NftCard