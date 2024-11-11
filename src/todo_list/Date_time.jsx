import React,{useState,useEffect} from 'react'

const Date_time = () => {
    const [date_time, setdate_time] = useState()
    useEffect(() => {
        const interval= setInterval(() => {
            const now = new Date();
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
            setdate_time(`${date} - ${time}`)
        }, 1000)
      
    
      return ()=>{clearInterval(interval) };
      
    }, [])
    
  

    return (
        <>
            <div className="Date_time">{date_time}</div>
        </>
    )
}

export default Date_time
