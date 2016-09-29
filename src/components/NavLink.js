import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import '../styles/TopLevel.css'

const NavLink = ({to, displayName}) => (
  <Link to={to} activeClassName="linkActive" className="linkClass" >
    {displayName}
  </Link>    
)

NavLink.propTypes = {
  to: PropTypes.String,
  displayName: PropTypes.String   
}

export default NavLink    