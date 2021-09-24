import React from 'react'

function Alert(props) {
 
    return props.alert!==null && <div className={`alert-alert ${props.typ}`}>
                  <i className="fas fa-info-circle"/>{props.alert.msg}
        </div>
}

export default Alert