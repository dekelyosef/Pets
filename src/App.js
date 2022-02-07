import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPetForm from "./components/AddPetForm";
import PetsForm from "./components/PetsForm";
import Button from "@mui/material/Button";

export default function App() {
  return (
    <div className="container">
      <div className="pets-screen">
        <Button variant="contained" onClick={PetsForm.getPets}>
          Pets
        </Button>
      </div>
      <AddPetForm />
    </div>
  );
}
