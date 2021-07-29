import React, {Component} from 'react';
import './ToDoList.css';

class ToDoList extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            todo : '',
            ToDos : []
        }
    }

    handleTodoChange = (event) => {
        this.setState(prevState => ({
            todo : event.target.value,
            ToDos : prevState.ToDos
        })
        )
    }

    addTodo = (event) => {
        this.setState(prevState => ({
            todo : '',
            ToDos : [prevState.todo, ...prevState.ToDos]
        }))
        event.preventDefault()
    }
    
    render(){
        return( 
        <div className="todolist">
            <h1>ToDoList</h1>
            <form onSubmit={this.addTodo}>
                <input type='text' placeholder='Enter a todo' value={this.state.todo} onChange={this.handleTodoChange} className="entertodobox"/>
                <button type='submit' className="addbutton">Add</button>
                {this.state.ToDos.map((item,index) => <div>{item}</div>)}
            </form>
        </div> 
        );
    }
}

export default ToDoList