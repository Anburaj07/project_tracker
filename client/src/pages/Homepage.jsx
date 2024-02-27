import React from 'react'
import Sidebar from '../components/Sidebar'
import Projects from '../components/Projects'

const Homepage = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <Projects/>
    </div>
  )
}

export default Homepage