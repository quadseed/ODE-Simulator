import React from 'react'
import "chart.js/auto"
import { Line } from "react-chartjs-2"

type GraphBuilderProps = {
  xlabel: number[],
  labelName: string,
  result: number[],
  sample: number[]
}

const GraphBuilder = ({xlabel, labelName, result, sample}: GraphBuilderProps) => {

  const data = {
    labels: xlabel,
    datasets: [
      {
        label: labelName,
        data: result,
        borderColor: "rgb(245, 154, 35)",
      },
      {
        label: '関数',
        data: sample,
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