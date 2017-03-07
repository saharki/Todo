import React from "react"

import Styles from "../../styles/Task.less"

export default class Task extends React.Component {
  constructor(props) {
    super()
    this.state = {
      id: props.id,
      edit: false,
      done: props.done || false,
      description: props.description || ""
    }
  }

  inputChangeHandler = (e) => {
    e.preventDefault()

    this.setState({
      description: e.target.value
    })
  }

  editHandler = (e) => {
    e.preventDefault()
    this.setState({edit: true})
  }

  saveHandler = (e) => {
    this.setState({edit: false}, () => this.props.updateTaskHandler(this.state))
  }

  removeHandler = (e) => {
    this.props.removeTaskHandler(this.state.id)
  }

  toggleDoneHandler = (e) => {
    e.preventDefault()
   this.setState({done: !this.state.done}, () => this.props.updateTaskHandler(this.state))
  }

  render() {

    const doneMark = this.state.done ? "✘" : "✔" 

    if(this.state.edit === true) {

      return ( 
        <li>
          <button onClick={this.saveHandler}>Save</button>
          <input value={this.state.description} onChange={this.inputChangeHandler} value = {this.state.description}/>
          <button onClick={this.removeHandler}>DELETE</button>
        </li>
      )
    }
    else {
      let taskElem = (
        <li>
          <button onClick={this.toggleDoneHandler}>{doneMark}</button>
          <button onClick={this.editHandler}>Edit</button>
          {this.props.description}
        </li>
      )
      if(this.state.done === true) {
        taskElem = ( <s> {taskElem} </s>  )
      }
      return taskElem
    }
  }
}
