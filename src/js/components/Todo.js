import React from "react"

import Task from "./Task"
import NewTask from "./NewTask"
import Styles from "../../styles/Todo.less"

export default class Todo extends React.Component {

	constructor() {
		super();
		this.state = {
			tasks: [],
			filter: "SHOW_ALL"
		}
	}

	addTask = (description) => {

		const tasks = this.state.tasks
		const taskID = Date.now()
		tasks.push(<Task  class = "task" description={description} id={taskID} key={taskID} updateTaskHandler={this.updateTask} removeTaskHandler={this.removeTask} done={false}/>)
		this.setState({tasks, filter: "SHOW_ALL"})
	}

	removeTask = (id) => {

		let tasks = this.state.tasks.slice()
		const taskIndex = tasks.findIndex(task => task.props.id === id)

		tasks.splice(taskIndex, 1)
		this.setState({ tasks })
	}

	updateTask = ({id, description, done}) => {

		let tasks = this.state.tasks.slice()
		const taskIndex = tasks.findIndex(task => task.props.id === id)
		
		tasks[taskIndex] = React.cloneElement(tasks[taskIndex], {
			description: description || tasks[taskIndex].props.description,
			done: done || tasks[taskIndex].props.done
		})

		this.setState({ tasks })
	}

	filterHandler = (e) => {
		e.preventDefault()
		this.setState({ filter: e.target.id })
	}

	filterTask = (task) => {
		if(this.state.filter !== "SHOW_ALL") {
			return task.props.done === (this.state.filter === "SHOW_COMPLETED")
		}
		return true
	}

	render() {
		const printedTasks = this.state.tasks.filter(this.filterTask)
		return ( 
		<div class="todo-wrapper">
			<NewTask onClick={this.addTask}/>
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
