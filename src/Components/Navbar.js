import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const Navbar = () => {

    return (
      //<Router>
      <nav className="nav-wrapper yellow darken-3">
      <div className = "container">

      <ul className= "left">
      <li><a href="/">Home</a></li>
      <li><a href="/logIn">Log In</a></li>
      <li><a href="/signUp">Sign Up</a></li>
      <li><a href="/delete">Delete</a></li>
      <li><a href="/update">Update</a></li>
      <li><a href="/adddog">Add Dog Entry</a></li>
      <li><a href="/search">Search</a></li>
      <li><a href="/removedog">Remove Dog Entry</a></li>
      <li><a href="/updatedog">Update Dog Entry</a></li>
      </ul>

      </div>

      </nav>
      //</Router>
    );

}

export default Navbar;
