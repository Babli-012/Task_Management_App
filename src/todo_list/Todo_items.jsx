import React from 'react'

const Todo_items = ({ todo,setTodo_list}) => {
    const handledltclick = (value) => {
        const updatetask = todo.filter((cur_elem) => cur_elem.content !== value);
        setTodo_list(updatetask)

    }
    const handletickevent = (value)=>{
        const updatedlist = todo.map((curelem)=>{
            if (curelem.content===value){
                return {...curelem,check:!curelem.check}
            }
            else{
                return curelem;
            }

        })
        setTodo_list(updatedlist)
   }



    return (
        <>
            <ul>
                {
                    todo.map((curelem) => {
                       
                        return <li className='todo-item-list' key={curelem.id}>
                            <div>
                                <span className={curelem.check?"isclicked":"notclicked"}>{curelem.content}</span>
                            </div>
                            <div className="btn">
                                <button className="tick" onClick={()=>{handletickevent(curelem.content)}}>✔️</button>
                                <button className='dltbtn' onClick={() => { handledltclick(curelem.content) }}>❌</button>
                            </div>

                        </li>

                    })
                }
            </ul>
        </>
    )
}

export default Todo_items
