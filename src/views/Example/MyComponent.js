import React from "react";

//class component --> render
class MyComponent extends React.Component {
  //key:value
  state = {
    name: "",
    channel: "Luu Tuan",
  };

  /*
    JSx => return về 1 khối
    Fragment
    state --> bộ nhớ lưu biến
    */
  handleOnChangeName = (event) => {
    //merge
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    console.log("hit me button");
    alert("click me");
  };

  //re-render
  render() {
    console.log(">>> call render: ", this.state);
    return (
      //react class => className

      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          ></input>
          hello my component, My name is {this.state.name}
        </div>
        <div className="second">hello yt channel: {this.state.channel}</div>
        <div className="third">
          <button
            onClick={() => {
              this.handleClickButton();
            }}
          >
            Click me!!
          </button>
        </div>
      </>
    );
  }
}

export default MyComponent;
