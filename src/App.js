import React from "react";
import Navigation from "./components/layouts/Navigation";
import "./App.css";
import Home from "./components/pages/Home/Home.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Home />,
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked(newPage) {
    this.setState({ currentPage: newPage });
  }

  render() {
    return (
      <div className="App">
        <Navigation click={this.clicked} />
        {this.state.currentPage}
      </div>
    );
  }
}

export default App;
