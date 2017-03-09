let taskID = 0

const updateTask = (arr, {id, description, done}) => {
  const taskIndex = arr.findIndex((task, index) => { return arr[index].id === id})
  let newArr = [...arr]
  newArr[taskIndex] = Object.assign({}, newArr[taskIndex], {
    description: description || newArr[taskIndex].description,
    done: done || newArr[taskIndex].done,
  })
  return newArr
}

 const tasks = (state = [{
      id: taskID,
      done: false,
      description: "Example Task",
    }], action) => {

  let id, description, done
  if(action.payload!==undefined) {
    id = action.payload.id
    done = action.payload.done
    description = action.payload.description
  }
  switch(action.type) {
    case "ADD_TASK": {
      return [...state, {
        id: ++taskID,
        done: false,
        description,
      }]
    }
    case "REMOVE_TASK": {
      return state.filter(task => task.id !== id)
    }
    case "UPDATE_TASK": {
      return updateTask(state, {id, description, done})
    }
  }
  return state
}

export default tasks