import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";
import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";

function App() {
  let [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Buttons onClick={() => setAlertVisibility(true)}>Button</Buttons>
    </>
  );
}

export default App;
