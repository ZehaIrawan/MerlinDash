import React, { useState } from 'react';
import Chart from './Chart';
import Sidebar from './Sidebar';

const Delivery = () => {
  const input = {
    labels: [
      '12 am',
      '2 am',
      '4 am',
      '6 am',
      '8 am',
      '10 am',
      '12 pm',
      '14 pm',
      '16 pm',
      '18 pm',
      '20 pm',
      '22 pm',
    ],
    datasets: [
      {
        label: 'Population',
        data: [0, 200, 250, 300, 250, 200, 200, 400, 200, 250, 250, 200, 200],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };
  const [data, setData] = useState(input);
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div className="delivery">
        <div className="searchbar">
          <input type="text" placeholder="Type in to search"></input>
          <p>CLOUD FOUR - PRODUCTIONS</p>
          <img
            className="profile-pic"
            src="https://icon-library.net/images/small-person-icon/small-person-icon-24.jpg"
            alt=""
          />
        </div>
        <h1>Realtime Message Data</h1>
        <div className="boxes">
          <div className="card1"></div>
          <div className="card2"></div>
          <div className="card3"></div>
          <div className="card4"></div>
        </div>
        <div className="chart">
          <Chart data={data}></Chart>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
