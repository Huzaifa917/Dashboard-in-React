import React from 'react'
import './Home.css';
import Features from '../../Dashboard/Features';
import Chart from '../../Dashboard/Chart';
import Status from '../../Dashboard/Status';
const Home = () => {
  return (
    <div className='home'>

        <Features/>
        <Chart/>
        <Status/>
    </div>
  )
}

export default Home