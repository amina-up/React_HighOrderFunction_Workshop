import React, { Component } from "react";
import FromSpinner from "./spinner";
import About from "./about";

class App extends Component {
  state = { isLoading: true };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    //Appel
    const Spinner = FromSpinner(About);

    return (
      <div>
        <Spinner isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
