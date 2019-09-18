import React from 'react';

const Card = ({ bg, title, dateBig, dateSmall }) => {
  const bigDate = dateBig === '' ? '' : dateBig;
  const smallDate = dateSmall === '' ? '' : dateSmall;
  return (
    <div className="card" style={{ backgroundImage: bg }}>
      <div className="innerbox">
        <p className="card-title">{title}</p>
        <div className="line"></div>
        <p className="bigDate">{bigDate}</p>
        <p className="smallDate">{smallDate}</p>
      </div>
    </div>
  );
};

export default Card;
