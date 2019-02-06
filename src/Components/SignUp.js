import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
   constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            addition: false
        };
    }

    handleInputUsername = (event) => {
            this.setState({ userName: event.target.value });

        }

    handleInputPassword = (event) => {
            this.setState({ password: event.target.value });

    }

    createUserAccount = (event) => {
       axios({
           method: 'post',
           url: 'http://localhost:8090/soloProjectBackEnd2/api/user/addUser',
           data: {
               userName: this.state.userName,
               password: this.state.password,
           }
        })
        .then(response => {
          this.setState({
            addition: true
          })
        })
        .catch(function (error) {
           console.log(error);
           alert("Unable to create account.")
       });
   }
   render() {
          return (
   <div>
              <p>
              </p>

              <form>
                  <p>Fill out the form and click submit to create account. </p>
                  <input type="text" placeholder="Username" value={this.state.userName} onChange={this.handleInputUsername}></input>
                  <br></br>
                  <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputPassword}></input>
                  <br></br>

                  <input type="button" value="Submit" onClick={this.createUserAccount}></input>
              </form>
              { this.state.addition ?
                <div>
                <p> You have successfully created an account. </p>
                </div>
                : null }
          </div>

      );
  }
}
export default SignUp;
