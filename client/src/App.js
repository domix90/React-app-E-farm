import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserList from './components/UserList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {



  render() {
    return (
   			<Router>
	        <div className="container">
	          <AppNavbar />

	          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">All Users</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create User</Link>
                </li>
                 <li className="navbar-item">
                  <Link to="/edit" className="nav-link">Edit User</Link>
                </li>
              </ul>
            </div>
          </nav>

          	<Route path='/' exact component={UserList} />
		        <Route path='/edit'  component={EditUser} />
		        <Route path='/create'  component={CreateUser} />
	      
	        </div>
     		</Router>
    );
  }
}

export default App;
