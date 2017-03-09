export const addTask = (description) => ({
  type: 'ADD_TASK',
  payload: {
    description,
  },
})

export const removeTask = (id) => ({
  type: "REMOVE_TASK",
  payload: {
    id,
  },
})

export const updateTask = ({id, description, done, edit}) => ({
  type: "UPDATE_TASK",
  payload: {
    id,
    description,
    done,
    edit,
  },
})

export const filterTasks = (filter) => ({
  type: "TASKS_FILTER",
  payload: {
    filter,
  },
})