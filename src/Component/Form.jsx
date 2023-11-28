import React, {useState} from 'react'
import FeatherIcon from 'feather-icons-react'
export default function Form({addTodo,showTodos , mode , activeTodo}) {
    // to add new title you need to use state to render page and useState to pass data
    const[title, setTitle] = useState('')
    //--------------------------------------------------------------------------------------
    // you need function to take data from user by handel data
    const handelChange = (e) =>{
        setTitle(e.target.value)
    }
    //--------------------------------------------------------------------------------------
    // and to can make some check on data you need function handelSubmit
    const handelSubmit = () =>{
        setRender(false)
        if(!title.trim()){
            return
        }
        addTodo(title)
        setTitle('')
    }
    //--------------------------------------------------------------------------------------
    // and last things to apply make title empty after add new title you should add value to input with
    // last value inside title
    const[render, setRender] = useState(false)
    if(mode === 'edit' && !render){
        setTitle(activeTodo.title)
        setRender(true)
    }
  return (
    <div className="todos-form">
      <div className={`${mode === 'done' ? 'active' : ''}`} onClick={showTodos}>
          <FeatherIcon icon='circle'/>
      </div>
      <div className='todos-form_form w-100'>
        <input type='text' placeholder="اضافة مهمة جديدة..." onChange={handelChange} value={title}/>
      </div>
      <div className='todos-form_submit'>
        <button className='btn-' onClick={handelSubmit} disabled={!title.trim()}> {
            mode === 'edit' ? 'تعديل' : 'اضافة'
        }</button>
      </div>
    </div>
  )
}
