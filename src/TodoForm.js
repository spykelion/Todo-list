import React from 'react'

class TodoForm extends React.Component{
    state = {
       content:''
    }
    handleChange=(e)=>{
      this.setState({
          content:e.target.value
      })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(this.state)
      this.props.addTodo(this.state)
      this.setState({content:''})  //value={this.state.content} to clear 
     
    }
  render(){
      return(
          <div>
           <form onSubmit={this.handleSubmit}>
                {/* <label>Add Todo</label> */}
                <input type="text" onChange={this.handleChange} placeholder="Add To-do" value={this.state.content}/>
                <button className="btn right" style={{fontFamily:"Algerian",borderRadius:5}}>Add Todo</button>
            </form>
          </div>
      )
  }


}

export default TodoForm
