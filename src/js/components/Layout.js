import React from "react"

import Todo from "./Todo"

export default class Layout extends React.Component {

  render() {
    return (
      <div>
        <h1>TODO List</h1>
        <Todo />
      </div>
    )
  }
}
