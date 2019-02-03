import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home'
import Login from'./Components/Login'
import SignUp from './Components/SignUp'
import DeleteAccount from './Components/DeleteAccount'
import Update from './Components/Update'
import DBFindEntry from './Components/DBFindEntry'
import DBRemoveEntry from './Components/DBRemoveEntry'
import DBAddEntry from './Components/DBAddEntry'
import DBUpdateEntry from './Components/DBUpdateEntry'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/delete' component={DeleteAccount} />
      <Route path='/update' component={Update} />
      <Route path='/adddog' component={DBAddEntry} />
      <Route path='/search' component={DBFindEntry} />
      <Route path='/removedog' component={DBRemoveEntry} />
      <Route path='/updatedog' component={DBUpdateEntry} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
