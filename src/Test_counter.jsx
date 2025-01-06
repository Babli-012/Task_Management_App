import React,{useState} from 'react'

const Test_counter = () => {
    const [count, setCount] = useState(0)
    const [List, setList] = useState([])
    const handlebuttonclick = ()=>{
      setCount(count+1);
      setList((prev)=>[...prev,count])
    }
    

  return (
    <div>
      <div>{count}</div>
      <button onClick={handlebuttonclick}>click me</button>
    </div>
  )
}

export default Test_counter
