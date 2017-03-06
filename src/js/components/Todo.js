import React from "react"

import Task from "./Task"
import NewTask from "./NewTask"

export default class Todo extends React.Component {

	constructor() {
		super();
		this.state = {
			tasks: []
		}
	}

	addTask = (description) => {

		const tasks = this.state.tasks
		const taskID = Date.now()
		tasks.push(<Task description={description} id={taskID} key={taskID} updateTaskHandler={this.updateTask} removeTaskHandler={this.removeTask}/>)
		this.setState({tasks})
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

	render() {

		return ( 
		<div>
			<NewTask onClick={this.addTask}/>
			<ol>
				{this.state.tasks}
			</ol>
		</div>
		)
	}
}
