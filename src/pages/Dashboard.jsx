import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
import Cards from '../components/Cards'
import ScheduleCard from '../components/ScheduleCard'
import Activities from '../components/Activities';
import TopProducts from '../components/TopProducts';


function Dashboard() {
  return (
    <div style={{width:"100vw",height: "100%", display:"flex", backgroundColor:"#F5F5F5"}}>
    <Sidebar/>
    <div style={{width: "70%",height:"100%", margin:"auto"}}>
   <Header/>
   <Cards/>
   <Activities/>
   <div style={{display:"flex", gap:"40px"}}>
   <TopProducts/>
   <ScheduleCard/>
   </div>
    </div>
    </div>
  )
}

export default Dashboard