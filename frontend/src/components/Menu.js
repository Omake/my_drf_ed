import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'


const NavMenu = () => {
   return (
            <nav>
            <ul>
              <li>
                <Link to='/'>Authors</Link>
              </li>
              <li>
                <Link to='/project'>Project</Link>
              </li>
            </ul>
          </nav>

   )
}

export default NavMenu
