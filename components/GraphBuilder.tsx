import React from 'react'
import "chart.js/auto"
import { Line } from "react-chartjs-2"

const GraphBuilder = ({label, result0, result}: {label: number[], result0: number[], result: number[]}) => {

  const data = {
    labels: label,
    datasets: [
      {
        label: "前進オイラー法",
        data: result,
        borderColor: "rgb(245, 154, 35)",
      },
      {
        label: "data",
        data: result0,
        borderColor: "rgb(126, 198, 54)",
      }],
      
  }
  
  const options: {} = {
    elements: {
      point: {
        radius: 0
      }
    },
    maintainAspectRatio: false,
    responsive: false,
  }


  return (
    <div>
      <Line height={300} width={400} data={data} options={options} />
    </div>
  )
}

export default GraphBuilder