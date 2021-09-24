import React, { Component,useState} from 'react'
import Navbar from './component/layout/Navbar'
import Alert from './component/layout/Alert'
import User from './component/users/User'
import Search from './component/users/Search'
import Errorboundary from './Errorboundary'
import axios from 'axios'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from './component/pages/About'
import {UserProvider} from './component/context/context'


const  App = ()  => {

 
   
  // async componentDidMount() {
  //   this.setState({
  //     loading:true
  //   })
  //   const res = await axios.get('http://localhost/react/selectall.php');
  //  // const res = await axios.get('http://127.0.0.1:8000/api/index?Authorization=res.data.token');
  //   this.setState({
  //     users:res.data,
  //     loading:false
  //   })
 
  // }

  const [users,setUser] = useState([]);
  const [loading,setLoading] = useState(false);
  const [alert,setAlertS] = useState(null);

  const searchUser = async text => {
    setLoading(true)
    
      const res = await axios.get('http://localhost/react/selectall.php'); 
    
      res.data.filter(value=> {
        if(value.firstname===text) {
          setUser([value]);
          setLoading(false);
        }
      })
    
  }

 const  clearUser = () => {
      setUser([]);
      setLoading(false);
    }

 const  setAlert = (msg,typ) =>  {

       setAlertS({msg,typ})
       setTimeout(() => {
         
        setAlertS(null)
       }, 3000);
  }
 

 
    return (
      <Router>
        <div>
            <Errorboundary>
                <Navbar title="Github Finder"/>  
                <Alert alert={alert}/>
                <div className="container">
                  <Switch>
                       <Route exact path="/" render={ () => (
                                  <>
                                        <Search searchUser={searchUser} clearUser={clearUser} clear={users.length>0?true:false} setAlert={setAlert}/>
                                        <UserProvider value = {users}>
                                           <User users={users} loading={loading}/>
                                        </UserProvider>
                                  </>
                       )}/>
                        
                        <Route exact path="/about" render={ () => <About/>}/>
                  </Switch>
                 
                </div>
            </Errorboundary>
        </div>
     </Router>
    )
  }


export default App
