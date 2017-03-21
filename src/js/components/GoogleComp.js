import React from "react"
import { connect } from "react-redux"

import Todo from "./Todo"
import MyGoogleMap from './MyGoogleMap'
import { addTask, removeTask, updateTask, filterTasks } from "../actions"

@connect((store) => {
  return {
    tasks: store.tasks,
  }
})

export default class GooglComp extends React.Component {

  constructor(props) {
    super()
    this.state = {
      center: undefined,
      zoom:undefined,
    }
  }

  onClickedTask = (center, zoom) => {
    this.setState({ center })
  }

  saveCenterHandler = (center, zoom) => {
    this.props.dispatch(addTask(center+","+zoom))
    this.props.dispatch(filterTasks("SHOW_ALL"))
  }

  render() {
    return (
      <div style={{width: '100%', height: '80%'}}>
        <MyGoogleMap center={this.state.mapCenter} onSaveCenter={this.saveCenterHandler}/>
        <h1>TODO List</h1>
        <Todo />
      </div>
    )
  }
}
