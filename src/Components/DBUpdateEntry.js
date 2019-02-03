import React, { Component } from 'react';
import axios from 'axios';

class DBUpdateEntry extends Component {
  constructor() {
        super();
        this.state = {
            updateInput: "",
            breedOfDog: "",
            about: "",
            image: "",
            update: false
       };
   }

   handleInputbreedOfDog= (event) => {
        this.setState({ breedOfDog: event.target.value });
    }

   handleInputAbout = (event) => {
       this.setState({ about: event.target.value });
   }

   handleInputImage = (event) => {
       this.setState({ image: event.target.value });
   }

   updateDBEntry = (event) => {
       axios({
           method: 'put',
           url: 'http://localhost:8080/soloProjectBackEnd2/api/fetch/updateDBEntry/' + this.state.updateInput,
           data: {
               breedOfDog: this.state.breedOfDog,
               about: this.state.about,
               image: this.state.image,
           }
         })
         .then(response => {
           this.setState({
             update: true
           })

       }).catch(function (error) {
           console.log(error);
           alert("Unable to update breed.")
       });
   }

   render() {
           return (
               <div>
                   <p>
                   </p>
                   <form>
                    <p>Fill out the form and click submit to update a breed</p>
                    <p>Enter name of entry you wish to change:</p>
                    <input type="text" placeholder="Entry to change" value={this.state.updateInput} onChange={this.handleInputUpdateInput}></input>
                    <br></br>
                    <p>Enter the details you wish to change:</p>
                    <input type="text" placeholder="Breed" value={this.state.breedOfDog} onChange={this.handleInputbreedOfDog}></input>
                    <br></br>
                    <input type="text" placeholder="About" value={this.state.about} onChange={this.handleInputAbout}></input>
                    <br></br>
                    <input type="text" placeholder="Image" value={this.state.image} onChange={this.handleInputImage}></input>
                    <br></br>
                    <input type="button" value="Submit" onClick={this.updateDBEntry}></input>
                </form>
                { this.state.update ?
                  <div>
                  <p> You have update a breed on the website! </p>
                  </div>
                  :null }
            </div>

        );
    }
}
export default DBUpdateEntry;
