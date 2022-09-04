import React from "react";
import "./App.css";
import data from "./assets/data.js";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <Layout data={data}></Layout>


    </div>
  );
}

export default App;
