import { combineReducers } from 'redux'

import tasks from './tasks'
import tasksFilter from './tasksFilter'
import center from './center'

const todo = combineReducers({
  tasks,
  tasksFilter,
  center,
})

export default todo
