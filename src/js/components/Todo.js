import React from "react"
import { connect } from "react-redux"

import Task from "./Task"
import NewTask from "./NewTask"
import Styles from "../../styles/Todo.less"
import { addTask, removeTask, updateTask, filterTasks } from "../actions"

@connect((store) => {
  return {
    tasks: store.tasks,
    tasksFilter: store.tasksFilter,
  }
})

export default class Todo extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: "SHOW_ALL"
    }
  }

  addTaskHandler = (description) => {
    this.props.dispatch(addTask(description))
    this.props.dispatch(filterTasks("SHOW_ALL"))
  }

  removeTaskHandler = (id) => {
    this.props.dispatch(removeTask(id))
  }

  updateTaskHandler = (options) => {
    this.props.dispatch(updateTask(options))
  }

  filterHandler = (e) => {
    e.preventDefault()
    this.props.dispatch(filterTasks(e.target.id))
  }

  filterTask = (task) => {
    if(this.props.tasksFilter !== "SHOW_ALL") {
      return task.props.done === (this.props.tasksFilter === "SHOW_COMPLETED")
    }
    return true
  }

  render() {
    const tasks = this.props.tasks.map((task) => {return <Task  class = "task" description={task.description} id={task.id} key={task.id} updateTaskHandler={this.updateTaskHandler} removeTaskHandler={this.removeTaskHandler} done={task.done}/>})
    const printedTasks = tasks.filter(this.filterTask)
    return ( 
    <div class="todo-wrapper">
      <NewTask onClick={this.addTaskHandler}/>
      <ul class="todo-list-menu">
        <li class="todo-list-option"><a href="" onClick = {this.filterHandler} id="SHOW_ALL" >All</a></li>
        <li class="todo-list-option"><a href="" onClick = {this.filterHandler} id="SHOW_COMPLETED" >Completed</a></li>
        <li class="todo-list-option"><a href="" onClick = {this.filterHandler} id="SHOW_INCOMPLETED" >Incomplete</a></li>
      </ul>
      <div>
        <ol>
          {printedTasks}
        </ol>
      </div>
    </div>
    )
  }
}
