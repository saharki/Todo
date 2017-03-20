import React from "react"

import Todo from "./Todo"
import MyGoogleMap from './MyGoogleMap'

export default class GooglComp extends React.Component {

  render() {
    return (
      <div style={{width: '100%', height: '80%'}}>
        <MyGoogleMap/>
        <h1>TODO List</h1>
        <Todo />
      </div>
    )
  }
}
