import React, { Component } from 'react';
import axios from 'axios';

class DBFindEntry extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: "",
      breedOfDog: "",
      about: "",
      image: "",
      result: false,
    }
    this.retrieveData = this.retrieveData.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (event) => {
      this.setState({ searchInput: event.target.value }, () => {
      });
    }

    retrieveData = (event) => {
      axios({
        method: 'get',
        url: 'http://localhost:8090/soloProjectBackEnd2/api/fetch/getDBEntry/' + this.state.searchInput,
        responseType: 'json'
      }).then(response => {
        this.setState({
          breedOfDog: response.data[0].breedOfDog,
          about: response.data[0].about,
          image: response.data[0].image,
          result: true
          })
        })
          .catch(function (error) {
            console.log(error);
            alert("Database not cooperating.")
          });
      }

      render() {
        return(
  <div className= "Search" >
      <p>
      </p>
      <form onSubmit={this.retrieveData}>
        <p>Enter breed: </p>
        <input id="text" type="text" placeholder="Search..." onChange={(this.handleInput)}></input>
        <input type="button" onClick={this.retrieveData} value="Search"></input>
      </form>
      <br />
      {this.state.result ?
      <div>
      Breed: {this.state.breedOfDog}
      <br />
      About: {this.state.about}
        <br />
      <img src={this.state.image} alt="dog" />
      </div>
      :null}
  </div >
);
  }
}

export default DBFindEntry;
