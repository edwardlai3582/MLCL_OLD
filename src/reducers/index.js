import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import owned from './owned'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  owned    
})

export default todoApp
