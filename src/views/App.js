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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent />
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
