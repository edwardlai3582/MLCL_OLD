import React from 'react'
import { Link } from 'react-router'

const App = ({children}) => (
  <div>
    <div>
        <h1>MLCL</h1>
        <ul>
          <li><Link to="/">list</Link></li>
          <li><Link to="/checkList">CheckList</Link></li>
          <li><Link to="/wantList">WantList</Link></li>
        </ul>
      </div>
    {children}
  </div>
)

export default App
