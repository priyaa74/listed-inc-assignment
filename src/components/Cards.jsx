import React from 'react'

function Cards() {

    const cards = [
        {
            icon: "assets/revenue.svg",
            title: "Total Revenues",
            text: "$2,129,430",
            bgColor: "#DDEFE0"
        },
        {
            icon: "assets/transactions.svg",
            title: "Total Transactions",
            text: "1,520",
            bgColor: "#F4ECDD"
        },
        {
            icon: "assets/likes.svg",
            title: "Total Likes",
            text: "9,721",
            bgColor: "#EFDADA"
        },
        {
            icon: "assets/totalUsers.svg",
            title: "Total Users",
            text: "892",
            bgColor: "#DEE0EF"
        }

    ]

  return (
    <div>
        {cards.map((card, index)=>{
            return(
                <div style={{backgroundColor:card.bgColor}}>
                    <div>
                        <img src={card.icon} />
                    </div>
                    <div>
                        <p>{card.title}</p>
                        <h2>{card.text}</h2>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Cards