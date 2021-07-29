import './App.css';
import { Component } from 'react';
import ToDoList from './ToDoList';



class App extends Component {

constructor(){
  super()
  this.state = {
    id : 0,
    ToDoList: []
  }
}
  createToDoList(){
    this.setState(prevState => ({
      id: prevState.id+1,
      ToDoList: [prevState.ToDoList, <ToDoList />] 
    }))  
  }
render(){
  console.log(this.state.id)
  return (
    <div className="todolistapp">
      <button onClick={() => this.createToDoList()} className="createbutton">Create</button>
      {this.state.ToDoList}
      
    </div>
  );
}
  
}

export default App;
