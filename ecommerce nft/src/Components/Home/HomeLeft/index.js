import React from 'react';
import './style.scss';

const HomeLeft = () => {
  return (
    <div className="hero__left">
      <h1 className="hero__left__title"> Best <span> NFT </span> <br />
        Collection for  your Future</h1>
       
          <button class="btn btn--full">Explore Now </button>
        
    
        <button class="btn btn--border">
          Create NFT
          </button>

        <ul>
          <li>
            <strong>62 500 </strong>
            <span>Collection</span>
          </li>
          <li>
            <strong>14 000</strong>
            <span>Auction</span>
          </li>
          <li>
            <strong>5 200</strong>
            <span>Artiste</span>
          </li>
        </ul>
      </div>
  )
}

export default HomeLeft