import { Component } from "react";

export default class Hello extends Component {
  state = { age: 47 };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 3,
    });
  };
  render() {
    return (
      <div>
        <p>
          Hello from {this.props.name} and you are {this.state.age}
        </p>
        <button onClick={this.handleAgeChange}>Add to age</button>
      </div>
    );
  }
}
