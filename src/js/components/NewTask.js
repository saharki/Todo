import React from "react"

export default class Task extends React.Component {
  constructor() {
    super()
    this.state = {
      description: ""
    }
  }

  addTaskBtnHandler = (e) => {
    e.preventDefault()
    addTask(Date.now())
  }

  inputChangeHandler = (e) => {
    e.preventDefault()

    this.setState({
      description: e.target.value
    })
  }

  addTaskBtnHandler = (e) => {
    e.preventDefault()
    if(this.state.description !== "") {

      this.props.onClick(this.state.description)
      this.setState({description: ""})
    }
  }

  render() {

    const editBtnStyle = {
      margin: "5px"
    }

    return ( 
      <div>
        <input placeholder={"Insert new task"} value={this.state.description} onChange={this.inputChangeHandler}/>
        <button onClick={this.addTaskBtnHandler}>Add Task</button>
      </div>
      )
    }
  }
