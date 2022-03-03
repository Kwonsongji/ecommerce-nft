import React from 'react';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

import './style.scss';

const Home = () => {
  return (
    <div className="hero">
      <HomeLeft />
      <HomeRight/>


    </div>
  )
}

export default Home