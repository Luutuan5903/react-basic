import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import { Component } from "react";

function App() {
  // JSX
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HelloWorld!! with reactjs</p>

        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
