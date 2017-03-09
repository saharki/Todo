import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"

import Layout from "./components/Layout"
import store from "./store.js"
import { addTask, removeTask, updateTask } from "./actions/index"

const app = document.getElementById("app")
ReactDOM.render(
  <Provider store={store}>  
    <Layout/>
  </Provider>, app) 

store.dispatch(addTask('Test1'))
store.dispatch(addTask('Test2'))
store.dispatch(updateTask({id: 1, description:"Test2 Edit" }))
store.dispatch(removeTask(1))