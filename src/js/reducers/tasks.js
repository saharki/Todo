let taskID = 0

const updateTask = (arr, {id, description, done, edit}) => {
  const taskIndex = arr.findIndex((task, index) => { return arr[index].id === id})
  let newArr = [...arr]
  newArr[taskIndex] = Object.assign({}, newArr[taskIndex], {
    description: description || newArr[taskIndex].description,
    done: done === undefined ? newArr[taskIndex].done : done,
    edit: edit === undefined ? newArr[taskIndex].edit : edit,
  })
  return newArr
}

 const tasks = (state = [{
      id: taskID,
      done: false,
      description: "Example Task",
      edit: false,
    }], action) => {

  let id, description, done, edit
  if(action.payload!==undefined) {
    id = action.payload.id
    done = action.payload.done
    description = action.payload.description
    edit = action.payload.edit
  }
  switch(action.type) {
    case "ADD_TASK": {
      return [...state, {
        id: ++taskID,
        done: false,
        edit: false,
        description,
      }]
    }
    case "REMOVE_TASK": {
      return state.filter(task => task.id !== id)
    }
    case "UPDATE_TASK": {
      return updateTask(state, {id, description, done, edit})
    }
  }
  return state
}

export default tasks