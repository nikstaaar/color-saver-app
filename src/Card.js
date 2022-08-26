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
        

    <form onSubmit={(event) => {
        // event.target
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData);
       setColor([...colors, {
            id: formValues.colorCode,
            color: "black",
            hexCode: formValues.colorCode}]);
}}
> 
    <input type = "text" placeholder = "#ffffff" name = "colorCode"></input>
    <button type = "submit">submit</button> 
    </form>
    
    <ul>
    {colors.map ((color) => {return (
    <li key = {color.hexCode}>
    <div className = "Card" style={{ border: "5px solid " + color.hexCode }}>{color.hexCode} is this color: {color.color}</div> 
    </li>)
})}
    </ul>
    </>
    )
  }