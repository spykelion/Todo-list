import React from 'react'

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length?(
        todos.map(todo=>{
        return(
           <div className="collection-item" key={todo.id}>
            <span onClick={()=>{deleteTodo(todo.id)}}>
             <h5>{todo.content} <i style={{cursor:"pointer",fontSize:35}} className="right material-icons red-text" onClick={()=>{deleteTodo(todo.id)}}>delete</i></h5>
            </span>
           </div>
        )
   })):(
        <h5 className="center "><em>you have no todo's left</em>  </h5>
    )
  return (
    <div className="todos collection" style={{fontFamily:"Fantasy",letterSpacing:1}}> 
         {todoList}
    </div>
  )
}

export default Todos
