import React,{Component} from 'react';
import './ToDo.css';
import {AiFillCloseCircle} from 'react-icons/ai'

class ToDo extends Component{

    constructor(props){
        super(props)
        this.state = {
            todo : props.todo
        }
    }

    render(){
        return (
            <div className="todocontainer">
                <div className="todo">
                    {this.props.num + ". " +this.state.todo}
                </div>
                
                <AiFillCloseCircle onClick = {() => this.props.removetodo(this.props.id)} className="todoclose"/>
            </div>
            
        )
    }
}

export default ToDo