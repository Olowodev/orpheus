import React from 'react'
import { nftCards } from '../../data'
import NftCard from '../nftCard/NftCard'
import './RecentSec.scss'

const RecentSec = () => {
  return (
    <div className='recentSec'>
      <div className='recentCont'>
        <div className='recentTitle'>
          <div className='rTitleCont'>
            <h3>RECENT NFT</h3>
            <div className='vline'></div>
            <p className="rlink">VIEW MORE</p>
          </div>
        </div>
        <div className='recentCarousel'>
          {nftCards.map((nftCard, index)=> (
            <NftCard nftCard={nftCard} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentSec