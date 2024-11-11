import React,{useState} from 'react'

const Todo_input = ({todo,setTodo_list}) => {
    const [inputValue, setInputValue] = useState({})
    const handleclickevent = () => {
        const {id,content,check}=inputValue;
        if (content=== "") return;
        // if (todo.find(todo.content==content)){
        //     setInputValue({id:"",content:"",check:""})
        //     return;
        // }
        // if (todo.includes(inputValue)) {
        //   setInputValue("")
        //   return;
        // }
        const iftodofind = todo.find((curelem)=>
                curelem.content===content);
        if (iftodofind) return;       
        setTodo_list((prevtodo) => [...prevtodo, {id,content,check}])
        setInputValue({id:"",content:"",check:""})
    
      }
    return (
        <>
            <div className="todo_input">
                <input type="text" placeholder='type here something' className='input' value={inputValue.content} onChange={(event) => {
                    setInputValue({id:event.target.value,content:event.target.value,check:false})

                }} />
                <button className='inputbtn' onClick={handleclickevent}>click me</button>
            </div>
        </>
    )
}

export default Todo_input
