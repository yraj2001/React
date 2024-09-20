import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import ListGroup from "./components/ListGroup";
import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import Like from "./components/Like";

function App() {
  const [drink, setDrink] = useState({ title: "ABC", price: 50 });
  // setDrink({ title: "XYZ", price: 40 });
  // console.log(drink.title);

  const handleClick = (likeState: boolean) => {
    if (likeState) {
      const newDrinkPrice = drink.price + 1;
      setDrink({ ...drink, price: newDrinkPrice });
    } else {
      const newDrinkPrice = drink.price - 1;
      setDrink({ ...drink, price: newDrinkPrice });
    }
  };
  let [alertVisibility, setAlertVisibility] = useState(false);
  let items = ["Chicago", "Naperville", "Aurora", "Dekalb", "Sycamore"];
  return (
    <>
      <h1>
        {drink.price}
        <Like onClick={handleClick} />
      </h1>
    </>
  );
}

export default App;
