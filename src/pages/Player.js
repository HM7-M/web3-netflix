import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Icon } from 'web3uikit';
import "./Player.css";

const Player = () => {
  
  const {state: currentlyPlaying} = useLocation();
  return (
  <>
  <div className='playerPage'>
  <video autoPlay controls className="videoPlayer">
    <source
      src={currentlyPlaying}
      type="video/mp4"
    >

    </source>
  </video>
  
  <div className="backHome">
    <Link to="/">
      <Icon
           className="backButton"
           fill="rgba (255,255,255,0.25)"
           size={60}
           svg="arrowCircleLeft"
      />
    </Link>

  </div>
  </div>

  </>
)
}

export default Player;
