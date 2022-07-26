import React, { useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { eulerState } from '../atoms/resultState'
import { rungeKuttaState } from '../atoms/resultState'
import { calculate as EulerCalculate} from '../utils/ForwardEuler'
import { calculate as RungeKuttaCalculate }  from '../utils/RungeKutta'
import { functionState, labelState } from '../atoms/labelState'
import { getFunction } from '../utils/FunctionSelector'

const Controller = () => {

  const hRef = useRef<HTMLInputElement>(null)
  const xmaxRef = useRef<HTMLInputElement>(null)

  const [select, setSelect] = useState(1)
  const [label, setLabel] = useState("微分関数1")

  const setGraphLabel = useSetRecoilState<number[]>(labelState)

  const setEulerResult = useSetRecoilState<number[]>(eulerState)
  const setRungeKuttaResult = useSetRecoilState<number[]>(rungeKuttaState)

  const setFunctionState = useSetRecoilState<number[]>(functionState)

  const checkInput = () => {
    const h = hRef.current?.value
    const xmax = xmaxRef.current?.value

    const pattern = /^([1-9]\d*|0)(\.\d+)?$/;

    if (h == undefined || xmax == undefined) {
      return false
    }

    if (pattern.test(h) && pattern.test(xmax)) {
      return true

    } else {
      alert("不正な値が入力されました\n 半角数字のみ使用可能です")
      return false
    }
  }

  const execute = (selectId: number, h: number, xmax: number) => {
    setGraphLabel([...Array(xmax+1)].map((v, i)=> i))

    const result = []

    for (let i = 0; i < xmax+1; i++) {
      result.push(getFunction(select, i))
    }

    setFunctionState(result)

    setEulerResult(EulerCalculate(selectId, h, xmax))
    setRungeKuttaResult(RungeKuttaCalculate(selectId, h, xmax))
  }

  return (
    <div className='flex justify-center py-4 md:py-10 shadow-md'>
        <div className='md:flex items-center space-x-10'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <p>刻み幅 h</p>
              <input type='text' ref={hRef} defaultValue={1} className='input input-sm input-bordered input-info max-w-xs'></input>
            </div>
            <div className='flex items-center space-x-2'>
              <p>計算範囲</p>
              <input type='text' ref={xmaxRef} defaultValue={100} className='input input-sm input-bordered input-info max-w-xs'></input>
            </div>
          </div>
          
          
          <div className='space-x-3 space-y-4'>
            <div className='dropdown w-36 h-10'>
              <label tabIndex={0} className="btn m-1 flex items-center space-x-2 group text-indigo-600 hover:text-white bg-white hover:bg-indigo-600">
                <p>{label}</p>
                <ChevronDownIcon className='w-5 h-5 text-indigo-600 group-hover:text-white' />
              </label>

              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                <li className='flex items-center'
                    onClick={() => {
                      setSelect(1)
                      setLabel("微分関数1")
                    }}>

                <img src="/df1.png" alt="df1" className='p-3' />
              </li>
              <li className=''
                    onClick={() => {
                      setSelect(2)
                      setLabel("微分関数2")
                    }}>
                  <img src="/df2.png" alt="df2" className='p-3' />
              </li>
              </ul>
            </div>
            <button className='btn btn-primary' 
                    onClick={() => {
                      if(checkInput()) {
                        const h = Number(hRef.current?.value)
                        const xmax = Number(xmaxRef.current?.value)

                        if (h < 0.0001) {
                          alert("刻み幅hは0.0001以上の値にしてください")
                          return
                        }

                        if (1000 < xmax) {
                          alert("計算範囲は1000以下の値にしてください")
                          return
                        }

                        execute(select, h, xmax)
                      }
                    }}>実行</button>
          </div>
        </div>
    </div>
  )
}

export default Controller