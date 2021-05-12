import React from 'react'
// utiliser pour la validation 
import PropTypes from 'prop-types'
import './navbar.css';

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
                              <a className="nav-link" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Servises</a>
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
