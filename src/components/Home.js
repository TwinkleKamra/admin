import React from 'react'
import './Sidebar.css'
import Sidebar from './Sidebar'
import Topnav from './Topnav'

const Home = () => {
  return (
    <>
    <div className='container'>
       
        <div className='Subcontainer'>
          <Sidebar/>
        </div>
        <div className='SubTopnav' >
           <Topnav/> 

        </div>
         
    </div>
    </>
  )
}

export default Home
