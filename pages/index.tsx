import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { labelState } from '../atoms/labelState'
import { eulerState, rungeKuttaState } from '../atoms/resultState'
import Controller from '../components/Controller'
import GraphBuilder from '../components/GraphBuilder'

const Home: NextPage = () => {
  const label = useRecoilValue(labelState)

  const euler = useRecoilValue(eulerState)
  const rungeKutta = useRecoilValue(rungeKuttaState)

  return (
    <div>
      <Head>
        <title>ODE-Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <Controller />

        <div className='lg:flex justify-center lg:space-x-28'>
          <div className='space-y-2 py-8'>
            <p className='flex justify-center'>&gt;&gt; 二つの解法の比較</p>
            <GraphBuilder xlabel={label} eulerResult={euler} rungeKuttaResult={rungeKutta} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
