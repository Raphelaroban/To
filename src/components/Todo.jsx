import React, { useRef, useState } from 'react'
import TodoItems from './TodoItems'

const Todo = () => {

  const[todoList,SetTodoList]=useState([])

  const inputRef=useRef()

  // add new task
  const addTask=()=>{

    const inputText=inputRef.current.value.trim();
    
    if(inputText === " "){
      return null
    }
    const newTodo={
      id:Date.now(),
      text:inputText,
      isComplete:false,
    }
   
    SetTodoList((prev)=>[ ...prev , newTodo])
    inputRef.current.value=""
      
  }
  // update task status
  const toggleTask=(id)=>{
    SetTodoList((prev)=>{
      return prev.map((todo)=>{
        if(id===todo.id){
          return{...todo , isComplete  :!todo.isComplete}

        }
        return todo;

      })
    })
  }

  // delete to do item

  const deleteTodo=(id)=>{
    SetTodoList((prev)=>{
      
      return prev.filter((todo)=>todo.id !==id)

    });

  }
  console.log(todoList)
  return (
    <>
        <div className='w-[30rem]'>

            <div>
                <h1 className='text-lg font-medium my-2 text-amber-500'>To-do List</h1>
            </div>

            <div className='flex gap-2'>

                <div>

                    <input type='text' placeholder='Add your task' className='px-4 py-3 text-sm w-80 border focus:outline-none focus:border-amber-500' ref={inputRef}></input>
                </div>
                
                 <button className='px-4 py-3 bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium rounded-sm border-none' onClick={addTask} >Add Task</button>


            </div>

            <p className='my-3 text-sm text-zinc-400 px-1 font-bold '>Fill task Details</p>

            <div className='w-[26rem] bg-white shadow px-4 py-4'>
               
                <fieldset className='space-y-3'>

                    <legend className='text-pink-600 font-medium select-none '>List of Task</legend>
                   {/* list of items starts */}
            
                       
                      {todoList.length===0?(<p className='text-gray-500 text-sm'>No Task Found</p>):(
                        todoList.map((todo,index)=>{
                          return(
                            <div >
                            <TodoItems text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deleteTodo={deleteTodo}/>
                            </div>)
                        })
                      )}
                        
                        
                        

        
                    {/* list of item ends */}
                   
               
                </fieldset>
 


            </div>

   

        </div>


       
    </>
  )
}

export default Todo








{/* <div className='flex'>
                        
<label className='hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none'>Learning Books</label>
<div className='mt-2 '>
  <svg className='hover:fill-red-700 ' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
</div>
</div>

<div className='flex'>

<label className='hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none'>Learning Books</label>
<div className='mt-2 '>
  <svg className='hover:fill-red-700 ' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
  </svg>
</div>
</div> */}