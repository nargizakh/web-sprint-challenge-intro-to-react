import React, { useState, useEffect } from "react";
import Character from "./components/Character";
import axios from "axios";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("http://swapi.dev/api/people")
      .then((res) => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((e) => {
        return `${e}. These are not the droids you are looking for!`;
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Bounty List</h1>
      {data.map((item) => {
        return (
          <Character
            key={data.url}
            data={item}
            bounty={Math.random() * 1000000}
          />
        );
      })}
    </div>
  );
};

export default App;
