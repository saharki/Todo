// import React from "react"

// import GoogleComp from "./GoogleComp"

// export default class Layout extends React.Component {

//   render() {
//     return (
//       <GoogleComp/>
//     )
//   }
// }
import React from "react"

import Todo from "./Todo"
import MyGoogleMap from './GoogleMap'

export default class Layout extends React.Component {

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