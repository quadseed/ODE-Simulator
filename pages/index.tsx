import type { NextPage } from 'next'
import Head from 'next/head'
import { useRecoilValue } from 'recoil'
import { labelState } from '../atoms/labelState'
import { elulerState, rungeKuttaState } from '../atoms/resultState'
import Controller from '../components/Controller'
import GraphBuilder from '../components/GraphBuilder'

const Home: NextPage = () => {
  const label = useRecoilValue(labelState)

  const eluler = useRecoilValue(elulerState)
  const rungeKutta = useRecoilValue(rungeKuttaState)

  return (
    <div>
      <Head>
        <title>ODE-Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <Controller />

        <GraphBuilder label={label} result0={rungeKutta} result={eluler} />
      </div>
    </div>
  )
}

export default Home
