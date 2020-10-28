import React from 'react'
import {Line} from 'react-chartjs-2';

export default function LineGraph() {

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: true,
            backgroundColor: 'rgb(117, 252, 234)',
            borderColor: 'rgba(117, 252, 234, 0.2)',
            yAxisID: 'y-axis-1',
          },
          {
            label: '# of No Votes',
            data: [1, 2, 1, 1, 2, 2],
            fill: true,
            backgroundColor: 'rgb(73, 226, 206)',
            borderColor: 'rgba(73, 226, 206, 0.2)',
            yAxisID: 'y-axis-2',
          },
        ],
      }
      
      const options = {
        scales: {
          xAxes: [{
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            legend: {
              display: false
           },
        }],
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
              gridLines: {
                // drawOnArea: false,
                color: "rgba(0, 0, 0, 0)",
              },
              legend: {
                display: false
             },
            },
            {
              type: 'linear',
              display: false,
              position: 'left',
              id: 'y-axis-2',
              gridLines: {
                // drawOnArea: false,
                color: "rgba(0, 0, 0, 0)",
              },
              legend: {
                display: false
             },
            },
          ],
        },
      }

    return (
        <Line data={data} options={options} />
    )
}
