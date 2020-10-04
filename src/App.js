import React, {Component} from 'react'
import Todos from './Todos'
import TodoForm from './TodoForm'
import Greeting from './Greeting'
import './styles/style.css'

class App extends Component{
   state = {
     todos:[
       {id:1,content:"Execute some projects"},
       {id:2,content:"Meeting with clients"}
     ]
   }
   // this works well
   deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    this.setState({ todos })
   }

   addTodo=(todo)=>{
    todo.id = Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({ todos:todos })
   }

   render(){
     return(
       <div className="todo-app container" style={{fontFamily:"Algerian"}}>
        <nav className="nav-wrapper " style={{backgroundColor:"#009999",borderRadius:8}}  > 
          <div className="right white-text "><Greeting /></div>
          <h3 className="white-text center"> Todo's List</h3>
        </nav>
         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}  /> {//Avoid Using components properties as function names or vice versa 
         }
         <TodoForm addTodo={this.addTodo} />
         
       </div>
     )
   }
}

export default App