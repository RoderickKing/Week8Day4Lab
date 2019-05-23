import React, { Component } from "react";

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    const breed = evt.target.breed.value;
    this.props.getNewBreed(breed);
    this.reset();
  }

  reset() {
    this.setState({
      breed: ""
    });
  }

  handleInputChange(evt) {
    const field = evt.target.id;
    const value = evt.target.value;
    this.setState({ [field]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <label htmlFor="breed">Enter Breed:</label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={this.state.breed}
          onChange={this.handleInputChange}
        />

        <input type="submit" value="Click to get pictures: " />
      </form>
    );
  }
}

export default Selector;
