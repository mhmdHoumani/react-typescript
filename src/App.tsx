import React, { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Container from "./Components/Container";
import Box from "./Components/Context/Box";
import Greet from "./Components/Greet";
import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Oscar from "./Components/Oscar";
import Person from "./Components/Person";
import PersonList from "./Components/PersonList";
import DomRef from "./Components/Ref/DomRef";
import MutableRef from "./Components/Ref/MutableRef";
import Counter from "./Components/State/Counter";
import LoggedIn from "./Components/State/LoggedIn";
import User from "./Components/State/User";
import Status from "./Components/Status";

function App() {
  const [value, setValue] = useState("");

  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="app-container">
      <Greet name="Vishwas" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Heading>
        <p>Hello From Heading</p>
      </Heading>
      <Oscar>
        <Heading>
          <h5>Oscar goes to Leonardo Dicaprio</h5>
        </Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked: ", event.target);
          console.log("ID: ", id);
        }}
      />
      <Input
        value={value}
        handleChange={(e) => {
          setValue(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
      <User />
      <Counter />
      <Box />
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
