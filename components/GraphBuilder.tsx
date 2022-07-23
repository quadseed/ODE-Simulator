import React from 'react'
import "chart.js/auto"
import { Line } from "react-chartjs-2"

function GraphBuilder() {

  const labels = [
    "step1",
    "step2",
    "step3",
    "step4",
    "step5",
    "step6",
  ]
  const data = {
    labels: labels,
    datasets: [
      {
        label: "data",
        data: [40, 60, 70, 100, 50, 80],
        borderColor: "rgb(245, 154, 35)",
      },
    ],
  }
  
  const options: {} = {
    maintainAspectRatio: false,
    responsive: false,
  }


  return (
    <div className='flex justify-center px-10 py-4 md:py-10'>
      <Line height={300} width={400} data={data} options={options} />
    </div>
  )
}

export default GraphBuilder