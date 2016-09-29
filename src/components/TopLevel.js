import React from 'react'
import { Link } from 'react-router'
import '../styles/TopLevel.css'

const TopLevel = ({children}) => (
    <div>
        <header>
            <h1>
                <Link className="linkHomeClass" to="/">
                    <div className="headerAbbr">
                        MLCL
                    </div>
                    <div className="headerNotAbbr">
                        MARVEL LEGENDS CHECKLIST
                    </div>
                </Link>
            </h1>
            <nav>
                <ul>
                    <li>
                        <Link activeClassName="linkActive" className="linkClass" to="/checkList">
                            CHECKLIST
                        </Link>
                    </li>
                    <li>
                        <Link activeClassName="linkActive" className="linkClass" to="/wantList">
                            WANTLIST
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        {children}
    </div>
)

export default TopLevel
