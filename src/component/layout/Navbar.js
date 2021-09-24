import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import '../../App.css';



 const  Navbar = (props) => {
   
     
        return (
            
            <nav className="navbar bg-primary">
                 <h6>{props.title}</h6>
                 <ul className="link">
                     <li>
                          <Link to="/" style={{color:"white"}}>Home</Link>
                     </li>

                     <li>
                          <Link to="/about"  style={{color:"white"}}>About</Link>
                     </li>
                 </ul>
            </nav>
            
        )
    }


Navbar.defaultProps = {
    title:'Github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar
