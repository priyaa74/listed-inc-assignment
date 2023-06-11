import React from 'react'
import {Link} from 'react-router-dom'

function ScheduleCard() {

    const scheduleData=[
        {
            title: "Meeting with suppliers from Kuta Bali",
            time: "14.00-15.00",
            place: "at Sunset Road, Kuta, Bali"
        },
        {
            title: "Check operation at Giga Factory 1",
            time: "18.00-20.00",
            place: "at Central Jakarta"
        }
    ]

  return (
    <div style={{ 
        backgroundColor: "#FFFFFF",
    width:"100%",
    height: "236px",
    borderRadius:"20px",
    }} >
        <div style={{ display: "flex", margin: "10px 0 23px 0", borderRadius: "20px", justifyContent: "space-around" }}>
        <h1 style={{
                    fontFamily: 'Montserrat',
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "20px",
                    marginBottom:"-5px"
                }} >Today's schedule</h1>
        <Link style={{
             fontFamily: 'Montserrat',
             fontStyle: "normal",
             fontWeight: 400,
             fontSize: "12px",
             lineHeight: "15px",
             textDecoration:"none",
             color:" #858585"

        }} to='#seeAll'><span>See All</span>
        <img src="/assets/arrowRight.svg" alt="" /></Link>
        </div>
        <div>
            {scheduleData.map((ele, index)=>{
                return(
                    <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
                        <div style={{ backgroundColor: index == 0 ? "#9BDD7C" : "#6972C3" ,
                                         height: "5px", 
                                         width: "66px",
                                         transform: "rotate(90deg)" }}>

                                          </div>
                    <div>
                        <h3 style={{
                               fontFamily: 'Lato',
                               fontStyle: "normal",
                               fontWeight: 700,
                               fontSize: "14px",
                               lineHeight: "16.8px",
                               color:"#666666",
                               marginBottom:"-5px"

                        }}>{ele.title}</h3>
                        <p style={{
                               fontFamily: 'Lato',
                               fontStyle: "normal",
                               fontWeight: 400,
                               fontSize: "12px",
                               lineHeight: "14.4px",
                               color:"#999999",
                               marginBottom:"-5px"

                        }} >{ele.time}</p>
                        <p style={{
                               fontFamily: 'Lato',
                               fontStyle: "normal",
                               fontWeight: 400,
                               fontSize: "12px",
                               lineHeight: "14.4px",
                               color:"#999999"
                        }} >{ele.place}</p>
                    </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default ScheduleCard;