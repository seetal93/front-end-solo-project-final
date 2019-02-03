import React, { Component } from 'react';


class Login extends Component {
  render(){


    return (
      <div>
                <p>

                </p>
                <p>Username: </p>
                <input id="text" type="text" onChange={(this.handleInput)}></input>
                <p>Password: </p>
                <input id="text" type="text" onChange={(this.handleInput)}></input><br/><br/>
                <input type="button" onClick={this.retrieveData} value="Sign In"></input>

            </div>
    );
  }
}


export default Login
