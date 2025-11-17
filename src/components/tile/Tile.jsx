import React from 'react';
import './Tile.css';

const Tile = ({ profileInfo, children }) => {
  return (
    <div className="tile">
      <div className="tile-content">
        {profileInfo && (
          <div className="profile-info">
            {/* <img className="profile-image" src={profileInfo.imageSrc? profileInfo.imageSrc : null } alt="Profile" /> */}
            <div className="profile-details">
              <h2>{profileInfo.name}</h2>
              <p>{profileInfo.bio}</p>
            </div>
          </div>
        )}
        {children && <div className="additional-content">{children}</div>}
      </div>
    </div>
  );
};

export default Tile;
