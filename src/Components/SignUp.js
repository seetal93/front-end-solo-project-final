import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
   constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            verify: "",
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
      if(this.state.userName && this.state.password){
       axios({
           method: 'post',
           url: 'http://52.151.88.98:3000/soloProjectBackEnd2/api/user/addUser',
           data: {
               userName: this.state.userName,
               password: this.state.password,
           }
        })
        .then(response => {
          this.setState({
            addition: true
          })
          if (typeof response.data == "string") {
                       this.setState({ verify: response.data })
                   } else {
                       this.setState({ verify: "Account created successfully" })
        }})
        .catch(function (error) {
           console.log(error);
           alert("Unable to create account.")
       })
   }
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
                  <p> {this.state.verify} </p>
                  <input type="button" value="Submit" onClick={this.createUserAccount}></input>
              </form>

          </div>

      );
  }
}
export default SignUp;
