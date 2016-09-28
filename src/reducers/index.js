import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import owned from './owned'
import wanted from './wanted'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  owned,
  wanted    
})

export default todoApp
