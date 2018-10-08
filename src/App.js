import React, { Component } from 'react';
import Container from "./components/container";
import images from "./images.json";
import Picture from "./components/picture";
class App extends Component {
  state = {
    images,
    score: 0
  };

  clickHandler = id => {
    let images = this.state.images;
    //console.log(images.find(element=>element.id===id));
    if (images.find((element) => element.id === id).clicked === false) {
      images.find(element => element.id === id).clicked = true;
      this.setState({ score: this.state.score + 1 });
    }
    else {
      for (let i = 0; i < 12; i++) {
        images.find(element => element.id === id).clicked = false;
      }
      this.setState({ score: 0 });
    }
    this.shuffle();
    //console.log(this.state.score);
  };
  shuffle = () => {
    let images = this.state.images;
    //console.log(images);
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for (let i = 1; i <= 12; i++) {
      let random = Math.floor(Math.random() * nums.length);
      let randomNum = nums[random];
      nums.splice(random, 1);
      //we stored a random number out of the arr of 1 thru 12 and then removed it from the array
      images[i - 1].order = randomNum;
    }
    images.sort((a, b) => {
      if (a.order < b.order) {
        return 1;
      }
      else {
        return -1;
      }
    })
    this.setState({ images })
  }

  render() {
    return (
      <Container>
        <h3 id="score">Your Score: {this.state.score}</h3>
        {this.state.images.map(image => (
          <Picture
            image={image.image}
            clickHandler={this.clickHandler}
            id={image.id}
          />
        ))}
        <p id="instructions">Dont click on the same image twice.</p>
      </Container>
    )
  }
};

export default App;
