import React, {Component} from 'react';
import './ToDoList.css';
import ToDo from './ToDo.js'
import {AiFillCloseCircle} from 'react-icons/ai'

class ToDoList extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            todo : '',
            id : 0,
            ToDos : [],
            displayTitle : false,
            title : "TodoList"
        }
    }

    handleTodoChange = (event) => {
        this.setState(prevState => ({
            id : prevState.id,
            todo : event.target.value,
            ToDos : prevState.ToDos,
            displayTitle : prevState.displayTitle,
            title : prevState.title
        })
        )
    }

    addTodo = (event) => {
        this.setState(prevState => ({
            todo : '',
            id : prevState.id+1,
            ToDos : prevState.todo ? [...prevState.ToDos,{todo : prevState.todo, id: prevState.id+1}] : prevState.ToDos,
            displayTitle : prevState.displayTitle,
            title : prevState.title
        }))
        event.preventDefault()
    }

    removetodo = (id) => {
        const filteredTodo = this.state.ToDos.filter(item => item.id !== id)
        this.setState(prevState => ({
            id : prevState.id,
            todo : '',
            ToDos : filteredTodo,
            displayTitle : prevState.displayTitle,
            title : prevState.title
        }))
    }
    
    toggletitledisplay = ()=>{
        this.setState(prevState => ({
            id : prevState.id,
            todo : prevState.todo,
            ToDos : prevState.ToDos,
            displayTitle : !prevState.displayTitle,
            title : this.state.title
        }))
    }

    handleTitleChange = (event) => {
        this.setState(prevState => ({
            id : prevState.id,
            todo : prevState.todo,
            ToDos : prevState.ToDos,
            displayTitle : prevState.displayTitle,
            title : event.target.value
        })
        )
    }

    render(){
        var title
        if(this.state.displayTitle){
            title = <form onSubmit={this.toggletitledisplay}> <input type='text' placeholder='Enter a title' value={this.state.title} onChange={this.handleTitleChange} className="titleinput"/> </form>
        }
        else{
            title = <h3 onClick={this.toggletitledisplay}>{this.state.title}</h3>
        }
        return( 
        <div className="todolist">
            <AiFillCloseCircle onClick = {() => this.props.removeList(this.props.id)} className="todolistclose" size={20}/>
            <div className="title">
                {title}
            </div>

            <form onSubmit={this.addTodo} className="form">
                <div className="entertodoadd">
                    <input type='text' placeholder='Enter a todo' value={this.state.todo} onChange={this.handleTodoChange} className="entertodobox"/>
                    <button type='submit' className="addbutton">Add</button>
                </div>
                <div className="todos">
                    {this.state.ToDos.map((item,index) => <ToDo key = {item.id} id = {item.id} todo = {item.todo} removetodo = {this.removetodo} num = {index+1}/>)}
                </div>
                
            </form>
        </div> 
        );
    }
}

export default ToDoList