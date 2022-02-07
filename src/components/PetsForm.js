import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../myStyles.css";

class PetsForm extends Component {
  constructor() {}

  getPets() {
    console.log("dekel");
    axios
      .get("http://localhost:4000/api/pets")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  }
}

export default PetsForm;
