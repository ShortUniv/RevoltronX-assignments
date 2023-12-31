/* eslint-disable */
import React from 'react'


import Homehero from './Homehero/Homehero'
import HomeDiscover from './HomeDiscover/HomeDiscover'
import Explore from './Explore/Explore'
import MeetStudents from './MeetStudents/MeetStudents'


const Home: React.FC= () => {
  return (
    <div>
        <Homehero />
        <HomeDiscover />
        <Explore />
        <MeetStudents />
        
    </div>
  )
}

export default Home