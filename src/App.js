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
      ToDoList: [ ...prevState.ToDoList, prevState.id+1] 
    }))  
  }

  removeToDoList = (id) => {
    const filteredtodolist = this.state.ToDoList.filter(item => item !== id)
    this.setState(prevState => ({
      id: prevState.id,
      ToDoList : filteredtodolist
    }))  
    console.log(filteredtodolist)
}

render(){
  console.log(this.state.id)
  return (
    <div className="todolistapp">
      <button onClick={() => this.createToDoList()} className="createbutton">Create</button>
      <div className="todolistcontainer">
        {this.state.ToDoList.map(item => <ToDoList key={item} id = {item} removeList={this.removeToDoList} />)}
      </div>
      
      
    </div>
  );
}
  
}

export default App;
