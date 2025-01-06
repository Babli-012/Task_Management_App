import React, { useState } from 'react'
import "./toggleswitch.css"

const Toggleswitch = () => {
    const [isOn, setisOn] = useState(false)
    const handleclickevent = () => {   
        return setisOn(!isOn)

    }
    if (isOn==true){
        document.body.style.backgroundColor = "black";
    }
    else{
        document.body.style.backgroundColor = "white";

    }

    return (
        <div className='toggle' style={{ backgroundColor: isOn ? "green" : "", }}>
            <div className={`switchbtn ${isOn ? "on" : "off"}`} onClick={handleclickevent}>
                {isOn ? "on" : "off"}
            </div>
        </div>
    )
}

export default Toggleswitch
