import React from 'react'

const TodoItems = ({text,isComplete,id,toggleTask,deleteTodo}) => {
  
  return (
    <>
     {/* <div className='flex'>
                        
          <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? "line-through text-slate-600" : " " }`} onClick={()=>toggleTask(id)}>{text}</label>
          <div className='mt-2 hover:bg-red-50 rounded-md '>
              <svg className='hover:fill-red-700 ' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
                 <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
         </div>
      </div> */}


      <div className='flex'>
                        
           <label className={`hover:bg-slate-100 flex-1 p-2 rounded-md cursor-pointer select-none ${isComplete ? "line-through":" " } `}  onClick={()=>toggleTask(id)}>{text}</label>
            <div className='mt-2  hover:bg-red-50 rounded-md' onClick={()=>{deleteTodo(id)}}>
                <svg className='hover:fill-red-700 ' xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="18px" fill="#5f6368">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            </div>
     </div>
    

    
      
    </>
  )
}

export default TodoItems
