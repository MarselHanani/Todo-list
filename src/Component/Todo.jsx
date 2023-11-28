import React from 'react'
import FeatherIcon from "feather-icons-react";

export default function Todo({todo, handleDone , deleteTodo , editTodo}) {
  return (
    <div className={`todos-todo ${todo.done ? 'done': ''}`}>{/* if todo is done then add done class
     that make color green*/}
      <div className='todos-todo_icon' onClick={()=> handleDone(todo.id)}>
        <FeatherIcon icon={todo.done ? 'check-circle' : 'circle'} /> {/* to chang style of icon*/}
      </div>
      <div className='todos-todo_text'>{todo.title}</div>
      <div className='todos-todo_cta'>
        <div className='todos-todo_cta-edit' onClick={()=> editTodo(todo)}>
          <FeatherIcon icon='edit'/>
        </div>
        <div className='todos-todo_cta-delete' onClick={()=> deleteTodo(todo.id)}>
          <FeatherIcon icon='trash'/>
        </div>
      </div>
    </div>
  )
}
