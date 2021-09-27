// import { div } from "prelude-ls";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // called anytime a new instance of the app is created (Native JS)
  constructor(props) {
    // calling the constructor function from React.Component
    super(props);
    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO
    // this.state
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
