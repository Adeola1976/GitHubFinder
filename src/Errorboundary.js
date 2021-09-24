import React, { Component } from 'react'




class Errorboundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false,
        }
    }

    static getDerivedStateFromError(error) {
         return { hasError:true}
    }
    render() {
        return (
            <div>
               {this.state.hasError ?<h2> something went wrong </h2>:this.props.children}
            </div>
        )
    }
}

export default Errorboundary
