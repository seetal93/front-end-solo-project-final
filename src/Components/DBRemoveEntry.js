import React, { Component } from 'react';
import axios from 'axios';

class DBRemoveEntry extends Component {

    constructor() {
        super();
        this.state = {
            breedOfDog: "",
            removal: false
        }
        this.deleteData = this.deleteData.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (event) => {
       this.setState({ breedOfDog: event.target.value });
   }

   deleteData = (event) => {
     if(this.state.breedOfDog){
       axios({
           method: 'delete',
           url: 'http://localhost:8090/soloProjectBackEnd2/api/fetch/deleteDBEntry/' + this.state.breedOfDog,
           responseType: 'json',
           data: {
               breedOfDog: this.state.breedOfDog
           }
         })
         .then(response => {
                this.setState({
                    removal: true
                })
       }).catch(function (error) {
           console.log(error);
           alert("unable to remove breed.");
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
                        <p>Enter breed and click to remove it. </p>
                        <input type="text" placeholder="Delete Breed..." onChange={this.handleInput} name="Delete"></input>
                        <input type="button" value="Submit" onClick={this.deleteData}></input>
                    </form>
                    { this.state.removal ?
                      <div>
                        <p>You have successfully removed a breed.</p>
                    </div>
                    : null}
                </div>
            </div>
        );
    }
}

export default DBRemoveEntry;
