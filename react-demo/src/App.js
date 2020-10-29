import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList'

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: 'item2'
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <input></input>
                <button Onclick={(e)=>this.addTodo}>Add Todo</button>
                <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo()} />
                <TaskList title={'Completed'} buttonText={'Delete'} tasks={'done'} buttonFunction={this.removeTodo()}/>
            </div>
        );
    }
    addTodo(){
        console.log('called');
        this.setState({todoList : 'item1'});
    }
    removeTodo(){
        console.log('called');
        this.setState({todoList : null});
    }
}

export default App;
