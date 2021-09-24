import React, { Component } from 'react'
import Useritem from './Useritem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'

const User = ({users,loading})  => {
    
        return loading?<Spinner/>:
  
         (
            <div style={userStyle}>
               {users.map(value=>
                    <Useritem key={value.id} users={value}  loading={loading}/>
               )}
            </div>
        )
      }
    


const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gripGap:'irem'
}


User.propTypes = {
    users: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}
export default User
