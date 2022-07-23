import type { NextPage } from 'next'
import Head from 'next/head'
import Controller from '../components/Controller'
import GraphBuilder from '../components/GraphBuilder'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ODE-Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <Controller />

        <GraphBuilder />
      </div>
    </div>
  )
}

export default Home
