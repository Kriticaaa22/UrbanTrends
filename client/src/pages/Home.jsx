import React from 'react'
import Header from '../components/Header'
import Trend from '../components/Trend'
import Popular from '../components/Popular'
import JoinUs from '../components/JoinUs'
import Descriptions from '../components/Descriptions'

const Home = () => {
  return (
    <div>
        <Header />
        <Trend />
        <Popular />
        <JoinUs />
        <Descriptions />
    </div>
  )
}

export default Home