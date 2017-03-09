import React from "react"

import Styles from "../../styles/Task.less"

export default class Task extends React.Component {
  constructor(props) {
    super()
    this.state = {
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
    this.props.updateTaskHandler({
      id: this.props.id,
      edit: true,
    })
  }

  saveHandler = (e) => {
    this.props.updateTaskHandler({
      id: this.props.id,
      done: this.props.done,
      description: this.state.description === "" ? this.props.description : this.state.description ,
      edit: false,
    })
  }

  removeHandler = (e) => {
    this.props.removeTaskHandler(this.props.id)
  }

  toggleDoneHandler = (e) => {
    e.preventDefault()
    this.props.updateTaskHandler({
      id: this.props.id,
      done: !this.props.done,
    })
  }

  render() {

    const doneMark = this.props.done ? "✘" : "✔" 
    if(this.props.edit === true) {

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
          {this.state.description}
        </li>
      )
      if(this.props.done === true) {
        taskElem = ( <s> {taskElem} </s>  )
      }
      return taskElem
    }
  }
}
