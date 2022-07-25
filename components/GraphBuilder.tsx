import React from 'react'
import "chart.js/auto"
import { Line } from "react-chartjs-2"

const GraphBuilder = ({xlabel, eulerResult, rungeKuttaResult}: {xlabel: number[], eulerResult: number[], rungeKuttaResult: number[]}) => {

  const data = {
    labels: xlabel,
    datasets: [
      {
        label: '前進オイラー法',
        data: eulerResult,
        borderColor: "rgb(245, 154, 35)",
      },
      {
        label: 'ルンゲ・クッタ法',
        data: rungeKuttaResult,
        borderColor: "rgb(126, 198, 54)",
      }],
      
  }
  
  const options: {} = {
    elements: {
      point: {
        radius: 0
      }
    },
    plugins: {
      legend: {
        position: 'bottom'
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  }


  return (
    <div className='flex justify-center'>
      <Line height={300} width={400} data={data} options={options} />
    </div>
  )
}

export default GraphBuilder