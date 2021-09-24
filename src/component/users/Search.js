import React,{useState}  from 'react'
import PropTypes from 'prop-types'

 const Search = ({clearUser,clear,setAlert,searchUser}) =>  {
        const [text,changeText] = useState('');
   
    const submit = (e) =>  {
        e.preventDefault();
        if(text==='') {
            setAlert('pls enter a text','light');
        }
       else {
          searchUser(text);
         changeText('');
      }

    }




    const onChangeHandler = (e) => {
        changeText()
    } 
 

       
    
        return (
            <div>
                <form onSubmit={submit} >
                    <div className="form-group">
                        <input name="text" value={text} onChange={onChangeHandler}  className="form-control" placeholder="search users"/>
                        <input type="submit" className="btn btn-dark btn-block form-control" value="Search User....."/>
                        {clear && 
                            <button  className="btn btn-light btn-block form-control" onClick={clearUser}>Clear</button>
                         }
                    </div>
                </form>
            </div>
        )
    }



Search.propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUser:PropTypes.func.isRequired,
    clear:PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}


export default Search
