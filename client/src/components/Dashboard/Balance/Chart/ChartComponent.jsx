
import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { monthlyOperationsResume } from '../../../../helpers/chartHelper';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartComponent() {
  const [data, setData] = useState([])
useEffect(()  => {
  monthlyOperationsResume('62d34380b3954d8270d05ea2').then(res =>{
    setData(res)
  })
  
}, [])
  return (
    <div className='chart-container'>
      <Doughnut data={{
         labels: data.labels,
        datasets: [{
          label: 'My First Dataset',
          data: data.data,
          backgroundColor: data.colors,
          hoverOffset: 1
        }]
      }} options={{
        plugins:{
          legend:{
            
            position: 'right', 
            labels:{
              usePointStyle: true,
              pointStyle:'circle',
              color: 'white'
            }
          }
        }
      }} height={200} width={250}/>
    </div>
  )
}

