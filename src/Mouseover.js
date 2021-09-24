import React, { Component } from 'react'
import Hoc from './Hoc'
 class Mouseover extends Component {
    render() {
       
         const {count,increment } = this.props
        return (
            
            <nav className="navbar bg-primary">
             <h3 className="btn btn-primary" onMouseOver={increment}>clicked  {count} times</h3>
            </nav>
            
        )
    }
}

export default Hoc(Mouseover) 