import React, { Component } from 'react';
import axios from 'axios';

class DBAddEntry extends Component {
    constructor() {
        super();
        this.state = {
          breedOfDog: "",
          about: "",
          image: "",
          success: false
        };
      }

    handleInputbreedOfDog = (event) => {
      this.setState({breedOfDog: event.target.value});
    }

    handleInputAbout = (event) => {
       this.setState({ about: event.target.value });
   }

   handleInputImage = (event) => {
       this.setState({ image: event.target.value });
   }

   updateDBEntry = (event) => {
     if(this.state.breedOfDog && this.state.about && this.state.image){
       axios({
           method: 'post',
           url: 'http://localhost:8090/soloProjectBackEnd2/api/fetch/addDBEntry',
           data: {
             breedOfDog: this.state.breedOfDog,
             about: this.state.about,
             image: this.state.image,
           }
         })
         .then(response => {
                this.setState({
                    success: true
                })
         }).catch(function (error) {
                console.log(error);
                alert("Unable to add breed to table.")
            });
        }
      }
      render() {
       return (
           <div>
               <p>
               </p>
               <form>
                    <p>Fill out the form and click submit to add another breed to the website! </p>
                    <input type="text" placeholder="breedOfDog" value={this.state.breedOfDog} onChange={(this.handleInputbreedOfDog)}></input>
                    <br></br>
                    <input type="text" placeholder="About" value={this.state.about} onChange={(this.handleInputAbout)}></input>
                    <br></br>
                    <input type="text" placeholder="Image" value={this.state.image} onChange={(this.handleInputImage)}></input>
                    <br></br>
                    <input type="button" value="Submit" onClick={this.updateDBEntry}></input>
                </form>
                <br />
                {this.state.success ?
                <div>
                <p> You have successfully added a breed to the website! </p>
                </div>
                :null }
            </div>

        );
    }
}

export default DBAddEntry;
