import React, { useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import calculate from '../utils/Runge-Kutta'

function Controller() {

  const hRef = useRef<HTMLInputElement>(null)
  const xmaxRef = useRef<HTMLInputElement>(null)

  const [select, setSelect] = useState("関数")
  
  const checkInput = () => {
    const h = hRef.current?.value
    const xmax = xmaxRef.current?.value

    const pattern = /^([1-9]\d*|0)(\.\d+)?$/;

    if (h == undefined || xmax == undefined) {
      return
    }

    if (pattern.test(h) && pattern.test(xmax)) {
      const result = {
        h: Number(h),
        xmax: Number(xmax)
      }

      alert("ok")
      return result

    } else {
      alert("不正な値が入力されました\n 半角数字のみ使用可能です")
    }
  }

  return (
    <div className='flex justify-center py-4 md:py-10 shadow-md'>
        <div className='md:flex items-center space-x-10'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <p>刻み幅 h</p>
              <input type='text' ref={hRef} defaultValue={0.1} className='input input-sm input-bordered input-info max-w-xs'></input>
            </div>
            <div className='flex items-center space-x-2'>
              <p>計算範囲</p>
              <input type='text' ref={xmaxRef} defaultValue={1000} className='input input-sm input-bordered input-info max-w-xs'></input>
            </div>
          </div>
          
          
          <div className='space-x-3 space-y-4'>
            <div className='dropdown w-28 h-10'>
              <label tabIndex={0} className="btn m-1 flex items-center space-x-2 group text-indigo-600 hover:text-white bg-white hover:bg-indigo-600">
                <p>{select}</p>
                <ChevronDownIcon className='w-5 h-5 text-indigo-600 group-hover:text-white' />
              </label>

              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                <li className='flex items-center' onClick={() => setSelect("関数1")}><img src="/m1.png" alt="m1" className='p-3' /></li>
                <li onClick={() => setSelect("関数2")}><a>Item 2</a></li>
              </ul>
            </div>
            <button className='btn btn-primary' onClick={checkInput}>実行</button>
          </div>
        </div>
    </div>
  )
}

export default Controller