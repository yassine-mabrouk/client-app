import React from 'react'
// utiliser pour la validation 
import PropTypes from 'prop-types'
import './navbar.css';
import {Link} from 'react-router-dom'
// il faut passer un variavle dans la fonction 
 const  Navbar = (props) => {
     const {title} = props;

    return (

      
        <div>
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                  <a className="navbar-brand" href="#">{title}</a>

                  <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                              <Link className="nav-link" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/contact/add">Add Contact</Link>
                          </li>

                          <li className="nav-item">
                              <Link className="nav-link" to="/contact/edit">Edit Contact</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to="/about">About</Link>
                          </li>
                      </ul>
                    
                  </div>
              </nav>
        </div>
    )
}
// Navbar.defaultProps={
//     title:"My title "
// }
Navbar.propTypes={
    title:PropTypes.string.isRequired
}
export default Navbar;
