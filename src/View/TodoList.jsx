import React, {useState} from 'react'
import Form from '../Component/Form'
import Todos from '../Component/Todos'

// first thing i will create array of object of initial data
// const initialData = [
//     {id:1,title:'دراسة عربي', done:true},
//     {id:2,title:'دراسة رياكت', done: false}
// ]

export default function TodoList() {
// to show the data on the list we will use state and useState to pass data and render page
    const todo = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
    const[todos, setTodos] = useState(todo)
    // add local storage to save data
    const setTolocal = () =>{
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    //-----------------------------------------------------------------------
    // create function that will when click on icon change's his state done
    const handleDone = (id) =>{
        const newTodos =todos.map(td => {
            if(td.id === id){
                return{...td, done: !td.done}
            }
            return td
        })
        setTodos(newTodos)
    }
    //-----------------------------------------------------------------------
    // creat function to add new data on the array of todo list
    const addTodo = (title) => {
        if(mode !== 'edit') {
            const newTodos = {
                id: new Date().getTime(),
                title,
                done: false
            }
            setTodos(data => {
                return [
                    newTodos,
                    ...data,
                ]
            })
        }
        else{
            const newTodos = todos.map(td => {
                if(td.id === activeTodo.id){
                    return{...td, title}
                }
                return td
            })
            setTodos(newTodos)
            setMode('add')
            setActiveTodo(null)
        }

    }
    //-----------------------------------------------------------------------
    // state mode to now mode of list is add or done or edit and so on ..
    const[mode, setMode] = useState('add')
    //-----------------------------------------------------------------------
    // to show if todo done or not done i will create function to chick the state
     const showTodos = () =>{
        if(mode === 'edit'){
            return
        }else if(mode === 'done'){
            setMode('add')
        }else{
            setMode('done')
        }
     }
    //-----------------------------------------------------------------------
     let copyTodos = [...todos] // make copy form todos
    // check if todo is done filter todo that done and keep todo than not done
    if(mode === 'done'){
        copyTodos = copyTodos.filter(td => td.done === false)
    }
    //-----------------------------------------------------------------------
    // now create function delete todo and pass id of todo to delete it
    const deleteTodo = (id) =>{
        const newTodos = todos.filter(td => td.id !== id)
        setTodos(newTodos)
    }
    //-----------------------------------------------------------------------
    // create function to edit todo , but before that we need state to pass todo to form page
    const[activeTodo, setActiveTodo] = useState(null)
    const editTodo = (todo) =>{
        setMode('edit')
        setActiveTodo(todo)
    }
    if(mode === 'edit'){
        copyTodos = [activeTodo]
    }
    //-----------------------------------------------------------------------
    setTolocal()
  return (
    <main>
    <div className='container p-0'>
        <div className='todos'>
            <Form addTodo={addTodo} showTodos={showTodos} mode={mode} activeTodo={activeTodo}/>
            <Todos todos={copyTodos} handleDone={handleDone} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </div>
    </div>
    </main>
  )
}
