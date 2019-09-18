import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
  return (
    <Line
      data={data}
      options={{
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        backgroundColor: '#a27dff',
      }}
    />
  );
};

export default Chart;
