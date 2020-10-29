import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList = null
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <input></input>
                <button Onclick={(e)=>this.addTodo}>Add Todo</button>
                <TaskList />
                <TaskList />
            </div>
        );
    }
    addTodo(e){
        console.log('called');
    }
  
}

export default App;
