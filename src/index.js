import React from 'react'
import { render } from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import TopLevel from './components/TopLevel'
import App from './components/App'
import CheckList from './components/CheckList'
import reducer from './reducers'

import { persistStore, autoRehydrate } from 'redux-persist'

//const store = createStore(reducer)
const store = compose(autoRehydrate())(createStore)(reducer)
persistStore(store)

render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={TopLevel}>
          <IndexRoute component={App}/>
          <Route path="checkList" component={CheckList}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
)
