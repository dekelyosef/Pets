import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../myStyles.css";
// React materials
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

class AddPetForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      type: "",
      color: "",
      isLoading: false,
    };
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.changeType = this.changeType.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Updates the name given from the user
  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  // Updates the age given from the user
  changeAge(event) {
    this.setState({
      age: event.target.value,
    });
  }
  // Updates the type given from the user
  changeType(event) {
    this.setState({
      type: event.target.value,
    });
  }
  // Updates the color given from the user
  changeColor(event) {
    this.setState({
      color: event.target.value,
    });
  }
  // Call api
  onSubmit(event) {
    this.setState({ isLoading: true });
    event.preventDefault(); // prevent refresh
    const registered = {
      name: this.state.name,
      age: this.state.age,
      type: this.state.type,
      color: this.state.color,
    };
    axios
      .post("http://localhost:4000/api/pet", registered)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));

    this.setState({
      name: "",
      age: "",
      type: "",
      color: "",
      isLoading: false,
    });
  }

  render() {
    return (
      <div className="header">
        {"Add New Pet"}
        <div className="container">
          <div className="form-div">
            <form className="form-body" onSubmit={this.onSubmit}>
              <div className="input-container">
                <TextField
                  className="select-container"
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  type="text"
                  inputProps={{ maxLength: 25 }}
                  onChange={this.changeName}
                  value={this.state.name}
                />
              </div>
              <div className="input-container">
                <TextField
                  className="select-container"
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  type="number"
                  inputProps={{ min: 1 }}
                  onChange={this.changeAge}
                  value={this.state.age}
                />
              </div>
              <Select
                className="form-controll form-group input-container"
                labelId="demo-simple-name-label"
                id="demo-simple-name"
                value={this.state.type}
                onChange={this.changeType}
                input={<OutlinedInput label="Type" />}
              >
                <MenuItem value={"Dog"}>Dog</MenuItem>
                <MenuItem value={"Cat"}>Cat</MenuItem>
                <MenuItem value={"Horse"}>Horse</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
              <div className="input-container">
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Color
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={this.state.color}
                  onChange={this.changeColor}
                >
                  <FormControlLabel
                    value="Black"
                    control={<Radio />}
                    label="Black"
                  />
                  <FormControlLabel
                    value="White"
                    control={<Radio />}
                    label="White"
                  />
                </RadioGroup>
              </div>
              <Button variant="contained" onClick={this.onSubmit}>
                {this.state.isLoading && (
                  <span className="spinner-grow spinner-grow-sm"></span>
                )}
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddPetForm;
