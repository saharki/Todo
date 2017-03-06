import React from "react"

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
    this.setState({edit: false})
    this.props.updateTaskHandler(this.state)
  }

  removeHandler = (e) => {
    this.props.removeTaskHandler(this.state.id)
  }

  render() {

    const editBtnStyle = {
      margin: "5px"
    }
    if(this.state.edit === true) {

      return ( 
        <li>
          <button onClick={this.removeHandler}>X</button>
          <input value={this.state.description} onChange={this.inputChangeHandler} value = {this.state.description}/>
          <button onClick={this.saveHandler}>Save</button>
        </li>
      )
    }
    else {
      return ( 
        <li>
          <button onClick={this.editHandler} style={editBtnStyle}>Edit</button>
          {this.props.description}
        </li>
      )
    }
  }
}
