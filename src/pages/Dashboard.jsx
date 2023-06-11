import React from 'react'
import styles from "./Dashboard.module.css"
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'
import Cards from '../components/Cards'
import ScheduleCard from '../components/ScheduleCard'
import Activities from '../components/Activities';
import TopProducts from '../components/TopProducts';


function Dashboard() {
  return (
    <div className={styles.container} >
    <Sidebar/>
    <div  className={styles.rightSide}>
   <Header/>
   <Cards/>
   <Activities/>
   <div className={styles.products}>
   <TopProducts/>
   <ScheduleCard/>
   </div>
    </div>
    </div>
  )
}

export default Dashboard