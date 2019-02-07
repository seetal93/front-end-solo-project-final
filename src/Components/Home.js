import React from 'react';
import DogNames from '../Components/DogNames'
import dog from '../Images/dog.jpg';

const Home = () => {
  const tagline = "The Dog Club"
  const intro = "A few breeds.."
  const about = "This simple website contains a library of my favourite dog breeds, followed by quirky facts and cute pictures."
  return (
    <div className="homeContainer">
    <p></p>
    <img src = {dog} alt= "main" width="225px" height="170px"/>
    <h2> {tagline} </h2>
    <h4 id="cute"> {intro} </h4>
    <DogNames />
    <p></p>
    <h4> {about} </h4>
    </div>





  );
}

export default Home;
