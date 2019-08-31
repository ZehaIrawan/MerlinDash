import React from 'react';
import Sidebar from './Sidebar';

const Delivery = () => {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div className="delivery">
        <div className="searchbar">
          <input type="text"></input>
          <p>CLOUD FOUR - PRODUCTIONS</p>
          <img
            className="profile-pic"
            src="https://icon-library.net/images/small-person-icon/small-person-icon-24.jpg"
            alt=""
          />
        </div>
        <h1>Realtime Message Data</h1>
      </div>
    </div>
  );
};

export default Delivery;
