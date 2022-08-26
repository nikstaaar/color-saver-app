import "./Card.css"
import React, {useState} from 'react'

export default function Card () {


   const [colors ,setColor] = useState([{ 
    id: 1,
    color: "black",
    hexCode: "#000000"
},{ 
    id: 2,
    color: "orange",
    hexCode: "#ff6600"
},{ 
    id: 3,
    color: "red",
    hexCode: "#ee2020"
}
] 
   
   )
    
    return ( 
    <>
    <input placeholder = "#ffffff" ></input>
    <button onClick = { () => {
        setColor([...colors, {
        id:4,
        color: "pink",
        hexCode: "#ffc0cb"
        }])
    }
    }>submit</button>
    <ul>
    {colors.map ((color) => {return (
    <li key = {color.id}>
    <div className = "Card" style={{ border: "5px solid " + color.hexCode }}>{color.hexCode} is this color: {color.color}</div> 
    </li>)
})}
    </ul>
    </>
    )
  }