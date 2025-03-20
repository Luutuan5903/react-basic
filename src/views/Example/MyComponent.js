import React from "react";
import ChildComponent from "./ChildComponent";

//class component --> render
class MyComponent extends React.Component {
  //key:value
  state = {
    firstName: "",
    lastName: "",
    arrJob: [
      { id: "abcJob1", title: "Developer", salary: "500$" },
      { id: "abcJob2", title: "Tester", salary: "400$" },
      { id: "abcJob3", title: "Project managers", salary: "1000$" },
    ],
  };

  /*
    JSx => return về 1 khối
    Fragment
    state --> bộ nhớ lưu biến
    */

  handleChangefirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangelastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">> check data input: ", this.state);
  };
  //re-render
  render() {
    console.log(">>> call render: ", this.state);
    return (
      //react class => className

      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangefirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangelastName(event)}
          />
          <br />
          <br />
          <input type="submit" onClick={(event) => this.handleSubmit(event)} />
        </form>

        <ChildComponent
          name={this.state.firstName}
          age={"21"}
          address={"ha noi"}
          arrJob={this.state.arrJob}
        />
      </>
    );
  }
}

export default MyComponent;
