
import React, { useState } from 'react'
import "./Todo_list.css"
import Todo_items from './Todo_items'
import Todo_input from './Todo_input'
import Date_time from './Date_time'

const Todo_list = () => {
  const list = "mylist"
  const [todo, setTodo_list] = useState(() => {
    const todolist = localStorage.getItem(list);
    if (!todolist) return [];
    return JSON.parse(todolist);
  });
  const handledltbtn = () => {
    setTodo_list([])
  }

  localStorage.setItem(list, JSON.stringify(todo));


  return (
    <>
      <div className="todo_list_container">
        <div className='header'>
          <h1>React-todolist</h1>
          <Date_time />
        </div>
        <Todo_input todo={todo} setTodo_list={setTodo_list} />
        <div className="todo_list">
          <Todo_items todo={todo} setTodo_list={setTodo_list} />
        </div>
        <div className="clear_all">
          <button className='clearall-btn' onClick={handledltbtn}> clear all</button>
        </div>

      </div>
    </>
  )
}

export default Todo_list
