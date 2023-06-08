import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    const options = [
        {
            icon: "/assets/dashboard.svg",
            title: "Dashboard",
            link: "/dashboard",
        },
        {
            icon: "/assets/transactions.svg",
            title: "Transactions",
            link: "/transactions",
        },
        {
            icon: "/assets/schedules.svg",
            title: "Schedules",
            link: "/schedules",
        },
        {
            icon: "/assets/users.svg",
            title: "Users",
            link: "/users",
        },
        {
            icon: "/assets/settings.svg",
            title: "Settings",
            link: "/settings",
        },
      
    ]
  return (
    <div>
        <h1>Board.</h1>
        <div style={{backgroundColor:"black"}}>
            {options.map((ele, index)=>{
                return(
                    <div>
                    <img src={ele.icon} />
                    <span>{ele.title}</span>
                    </div>
                );
            })}
        </div>
        <div>
         <Link to='/help'> Help</Link>
         <Link to='/contact'> Contact Us</Link>
        </div>
    </div>
  )
}

export default Sidebar