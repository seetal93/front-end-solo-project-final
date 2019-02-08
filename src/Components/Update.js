import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {
    constructor() {
        super();
        this.state = {
            updateInput: "",
            userName: "",
            password: "",
            updatemessage: "",
            userupdate: false
        };
    }

    handleInputUpdateInput = (event) => {
        this.setState({ updateInput: event.target.value });
    }

    handleInputUsername = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleInputPassword = (event) => {
        this.setState({ password: event.target.value });
    }

    updateAccount = (event) => {
      if(this.state.updateInput && this.state.userName && this.state.password){
        axios({
            method: 'put',
            url: 'http://localhost:8090/soloProjectBackEnd2/api/user/updateUser/' + this.state.updateInput,
            data: {
                userName: this.state.userName,
                password: this.state.password,
            }
          })
          .then(response => {
            this.setState({
              usersupdate: true,
              updatemessage: response.data.updatemessage
          })
        }).catch(function (error) {
            console.log(error);
            alert("unable to update account.");
        });
    }
}

render() {
        return (
            <div>
               <p>
               </p>

               <form>
                    <p>Fill out the form and click submit to update account.</p>
                    <p>Enter username of account you wish to change:</p>
                    <input type="text" placeholder="Username" value={this.state.updateInput} onChange={(this.handleInputUpdateInput)}></input>
                    <br></br>
                    <p>Enter the details you wish to change:</p>
                    <input type="text" placeholder="Username" value={this.state.userName} onChange={(this.handleInputUsername)}></input>
                    <br></br>
                    <input type="password" placeholder="Password" value={this.state.password} onChange={(this.handleInputPassword)}></input>
                    <br></br>
                    <input type="button" value="Submit" onClick={this.updateAccount}></input>
                </form>
                {this.state.userupdate ?
                  <div>
                  <p> {this.state.updatemessage} </p>
                  </div>
                  :null }

            </div>

        );
    }
}
export default Update;
