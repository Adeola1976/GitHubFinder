import React from 'react'
import PropTypes from 'prop-types'
import {UserConsumer} from '../context/context'

const  Useritem = (props) => {
           
        const {id,firstname,lastname,img} = props.users
        const{loading} = props
       
        return (
            <div className="card text-center">
                <img src={img} alt="" className="round-img" style={{width:'60px'}} />
                <div><a href={lastname}  className ="btn btn-dark btn-sm my-1">More</a></div>
               <div>{id}</div>
               <UserConsumer>
                    { name =>  console.log(name) }  
               </UserConsumer>
            </div>
        )
    }

     Useritem.propTypes = {
        users: PropTypes.object.isRequired,
    }


export default Useritem