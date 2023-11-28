import React from 'react'
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div>
        {props.todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} handleDone={props.handleDone} deleteTodo={props.deleteTodo}
            editTodo={props.editTodo}/>
        })}
      {props.todos.length === 0 && <p className="no-todos">لا يوجد مهمات</p>}
    </div>
  )
}
