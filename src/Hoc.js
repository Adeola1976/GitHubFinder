import React from 'react'

function Hoc(OriginalComponent) { 
    
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
            this.state = {
                number:0
            }
        this.clicked = this.clicked.bind(this)
        }
        
        clicked (number) {
          this.setState({
              number:this.state.number+1
          })
        }
        render() {
            return <OriginalComponent  increment ={this.clicked}  count ={this.state.number}/>
        }
    }
    return NewComponent;
}

export default Hoc