const tasksFilter = (state = "SHOW_ALL", action) => {
  if(action.type === "TASKS_FILTER") {
    return action.payload.filter
  }
  return state
}

export default tasksFilter