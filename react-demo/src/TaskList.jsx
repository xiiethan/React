import React, {Component} from 'react';
import TaskItems from './TaskItems';

class TaskList extends Component{
   
    render(){
        const {title, buttonText, tasks, buttonFunction} =this.props;
        const taskItems = tasks.map((task) => <TaskItems tasks={task} key={task} buttonFunction={buttonFunction}/>);
        return (
            <div class ='list'>
                {title}
                {taskItems}
            </div>
        )
    }
}

export default TaskList;