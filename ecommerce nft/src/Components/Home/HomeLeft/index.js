import React from 'react';
import './style.scss';

const HomeLeft = () => {
  return (
    <div className="hero__left">
      <h1 className="hero__left__title"> Best <span> NFT </span> <br />
        Collection for  <br/>your Future</h1>
       
          <button className="btn btn--full">Explore Now </button>
        
    
        <button className="btn btn--border">
          Create NFT
          </button>

        <ul className="hero__left__figures">
          <li>
            <strong>62 500 </strong>
            <span>Collections</span>
          </li>
          <li>
            <strong>14 000</strong>
            <span>Auctions</span>
          </li>
          <li>
            <strong>5 200</strong>
            <span>Artists</span>
          </li>
        </ul>
      </div>
  )
}

export default HomeLeft