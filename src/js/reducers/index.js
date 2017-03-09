import { combineReducers } from 'redux'

import tasks from './tasks'
import tasksFilter from './tasksFilter'

const todo = combineReducers({
  tasks,
  tasksFilter,
})

export default todo
