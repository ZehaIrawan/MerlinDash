import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Card from './Card';
import Chart from './Chart';
import Sidebar from './Sidebar';

const Delivery = () => {
  const input = {
    backgroundColor: 'transparent',
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
        label: 'Message Clicked',
        data: [0, 200, 250, 300, 250, 200, 200, 400, 200, 250, 250, 200, 200],
        backgroundColor: [
          'rgba(153, 102, 255, 0.6);',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211);',
          'rgba(148, 0, 211);',
          'rgba(148, 0, 211);',
          'rgba(148, 0, 211);',
          'rgba(148, 0, 211)',
          'rgba(148, 0, 211)',
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
          <FaSearch className="search-icon" />
          <input
            className="search"
            type="text"
            placeholder="Type in to search"
          ></input>
          <div className="cloud">
            <p>CLOUD FOUR - PRODUCTIONS</p>
          </div>
          <img
            className="profile-pic"
            src="https://cdn.pixabay.com/photo/2019/03/06/13/02/girl-4038208_960_720.jpg"
            alt=""
          />
        </div>
        <h1>Realtime Message Data</h1>
        <div className="boxes">
          <Card
            icon={'<FaPlayCircle/>'}
            bg={'linear-gradient(299deg, #736dff, #a97fff)'}
            title={'Started sending at'}
            dateBig={'March 27th 2019'}
            dateSmall={'12:26:05 am UTC - 07:00'}
          ></Card>
          <Card
            bg={'linear-gradient(299deg, #f7c598, #ff8886)'}
            title={'Completed'}
            dateBig={'In 31.28'}
            dateSmall={'seconds'}
          ></Card>
          <Card
            bg={'linear-gradient(123deg, #f9b4bd, #9573db)'}
            title={'Total Messages'}
            dateBig={'3522725'}
          ></Card>
          <Card
            bg={'linear-gradient(122deg, #44dec5, #4ebcfa'}
            title={'Status'}
            dateBig={'Delivered'}
          ></Card>
        </div>

        <p className="upload">Upload Your Data</p>
        <div className="time-frame">
          <p>Last 120 seconds</p>
          <p>Last 30 minutes</p>
          <p>Last 24 hours</p>
          <p>Last 5 days</p>
        </div>

        <div className="chart">
          <Chart data={data}></Chart>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
