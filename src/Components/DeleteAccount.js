import React, { Component } from 'react';
import axios from 'axios';

class DeleteAccount extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            deletionmessage: "",
            userRemoval: false
        }
        this.deleteAccount = this.deleteAccount.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
        this.setState({ userName: event.target.value });
    }

    deleteAccount = (event) => {
      if(this.state.userName){
        axios({
            method: 'delete',
            url: 'http://localhost:8090/soloProjectBackEnd2/api/user/deleteUser/' + this.state.userName,
            responseType: 'json',
            data: {
                userName: this.state.userName
            }
          })
          .then(response => {
            this.setState({
              userRemoval: true,
              deletionmessage: response.data.deletionmessage
            })

        }).catch(function (error) {
            console.log(error);
            alert("Unable to delete account.");
        });
    }
}
    render() {
            return (

              <div>
                <div>
                    <p>
                    </p>
                    <form>
                        <p>Enter Username to proceed deleting your account.</p>
                        <input type="text" placeholder="Delete Account" onChange={this.handleInput} name="Delete"></input>
                        <input type="button" value="Submit" onClick={this.deleteAccount}></input>
                    </form>
                    {this.state.userRemoval ?
                      <div>
                      <p> {this.state.deletionmessage} </p>
                      </div>
                      :null }
                </div>
            </div>
        );
    }
}
export default DeleteAccount;
