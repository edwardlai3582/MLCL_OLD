let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const addOwned = (figure) => ({
  type: 'ADD_OWNED',
  figure
})

export const removeOwned = (figureId) => ({
  type: 'REMOVE_OWNED',
  figureId
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

