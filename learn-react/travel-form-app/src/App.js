import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      location: "Chicago",
      isVegetarian: false,
      isLactoseFree: false,
      isDiabetic: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleSubmit() {
      var firstName = "First Name: " + this.state.firstName + "\n";
      var lastName = "Last Name: " + this.state.lastName + "\n";
      var age = "Age: " + this.state.age + "\n";
      var location = "Location: " + this.state.location + "\n";
      console.log(this.state.isVegetarian);
      var dietaryRestrictions = [];
      if (this.state.isVegetarian) dietaryRestrictions.push("Vegetarian")
      if (this.state.isLactoseFree) dietaryRestrictions.push("Lactose Free")
      if (this.state.isDiabetic) dietaryRestrictions.push("Diabetic")  
      var dietaryInfo = "Dietary Restrictions: " + dietaryRestrictions.join(',') + "\n";
      
      var completeInfo = firstName + lastName + age + location + dietaryInfo;
      alert("Submitted: " + completeInfo)
  }

  render() {
    return (
      <main>
        <div class="wrapper">
          <div class="title">Travel Form</div>
          <form class="form" onSubmit={this.handleSubmit}>
            <div class="inputfield">
              <label>First Name: </label>
              <input
                type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder="First Name"
                class="input"
                onChange={this.handleChange}
              />
            </div>
            <div class="inputfield">
              <label>Last Name: </label>
              <input
                type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder="Last Name"
                class="input"
                onChange={this.handleChange}
              />
            </div>
            <div class="inputfield">
              <label>Age: </label>
              <input
                type="text"
                value={this.state.age}
                name="age"
                placeholder="Age"
                class="input"
                onChange={this.handleChange}
              />
            </div>
            <div class="inputfield">
              <label>Location: </label>
              <div class="custom_select">
                <select
                  value={this.state.location}
                  onChange={this.handleChange}
                  name="location"
                >
                  <option value="chicago">Chicago</option>
                  <option value="newyork">New York</option>
                  <option value="sanfrancisco">San Francisco</option>
                  <option value="dallas">Dallas</option>
                </select>
              </div>
            </div>
            <div class="checkBoxesContainer">
              <div class="head">
                <label>Dietary Restrictions: </label>
              </div>
              <div class="rightboxes">
              <input class="asd" type='checkbox' name="isVegetarian" value={this.state.isVegetarian} id="valuable1" onChange={this.handleChange}/><label class="d_label" for="valuable1"><span></span> Vegetarian</label> 
              <input class="asd" type='checkbox' name="isDiabetic" value={this.state.isDiabetic} id="valuable2" onChange={this.handleChange}/><label class="d_label"  for="valuable2"><span></span> Diabetic</label> 
              <input class="asd" type='checkbox' name="isLactoseFree" value={this.state.isLactoseFree} id="valuable3" onChange={this.handleChange}/><label class="d_label"  for="valuable3"><span></span> Lactose Free</label>
              </div>
            </div>
            <br />
            <br />
            <button class="btn"><i class="fa fa-send"></i> Submit</button>
          </form>
        </div>
      </main>
    );
  }
}

export default App;
/*
<input class="asd" type='checkbox' value='valuable1' id="valuable1"/><label class="d_label" for="valuable1"><span></span> Content 5</label> 
        <input class="asd" type='checkbox' value='valuable2' id="valuable2"/><label class="d_label"  for="valuable2"><span></span> Content 4</label> 
        <input class="asd" type='checkbox' value='valuable3' id="valuable3"/><label class="d_label"  for="valuable3"><span></span> Content 3</label>
        */
