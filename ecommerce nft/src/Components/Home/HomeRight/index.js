import React from 'react'; 
import './style.scss';
import img from '../../../assets/img.png'
const HomeRight = () => {
  return (
    <div>
      <div className="homRight">
        <div className="homeRight__perso-wrapper">
          <div className="homeRight__img">
            <img src={img} alt="img" />
          </div>
          <div className="homeRight__stats">
          <div className="homeRight__">
            <span> Current Bid</span>
            <strong>12,43 ETH</strong>
            <button class="btn btn--full btn--small ">Place Bid  </button>
          </div>
          <div className="homeRight__">
            <span> Ends Inc</span>
            <strong>12:24:00 ETH</strong>
            <button class="btn btn--border btn--small btn--white">View NFT  </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomeRight