import React from 'react'
import { Doughnut } from 'react-chartjs-2';


export default function DoughnutChart(props) {
    var data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [props.percent, 100-props.percent],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              
            ],
            borderWidth: 1,
          },
        ],
      }

    const options = {
        cutoutPercentage:70,
        responsive:true,
        maintainAspectRatio : true

    }
      

    return (
        // <Doughnut data={data} options={options} width={100} height={100}  />
        <Doughnut data={data} options={options} />
    )
}
