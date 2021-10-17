import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom'


const NavMenu = () => {
   return (
            <nav>
              <li>
                <Link to='/'>Authors</Link>
              </li>
              <li>
                <Link to='/project'>Project</Link>
              </li>
          </nav>

   )
}

export default NavMenu
