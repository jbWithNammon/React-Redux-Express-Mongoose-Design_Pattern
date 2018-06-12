import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import TopBar from './shared/layout/topbar'
import Login from './authentication/login/login'
import Register from './authentication/register/register'
import Forgot from './authentication/forgot/forgot'
import Customer from './customer/customer'

class App extends Component {
  
 
  render() {
    return (
      <div className="App">
       <TopBar/>
      <Router>
            {/* <div>
               <h2>Welcome to React Router Tutorial</h2>
               <ul>
                  <li><Link to={'/register'}>Register</Link></li>
                  <li><Link to={'/customer'}>Customer</Link></li>
               </ul>
               <hr /> */}
               
               <Switch>
                  <Route exact path='/' render ={props =><Login {...props} />}/>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/forgot' component={Forgot} />
               </Switch>
            {/* </div> */}
         </Router>
     
      {/* <Customer /> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
