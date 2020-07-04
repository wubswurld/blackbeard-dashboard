import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "../src/Components/Shared/Navbar";
import Landing from "../src/Components/Landing/Landing";
import About from "../src/Components/Landing/About";
import Dashboard from "./Components/Dashboard/Dashboard";
import Info from "./Components/Info/Info";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Web3 from "web3";
import $ from "jquery";

// function App() {
function Map(props) {
  const { account } = props;
  return (
    <div>
      <div className="bg" id="bg" style={{ minWidth: "100%" }}>
        <NavBar account={account} />
        <Landing />
      </div>
      {/* <About /> */}
    </div>
  );
}

function MapSecond(props) {
  const { account } = props;
  return (
    <div>
      <NavBar account={account} />
      <Dashboard account={account} />
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { account: "" };
  }

  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
  }

  componentDidMount() {
    var images = [
      "phila.jpeg",
      // "tree.jpeg",
      // "skyline.jpeg",
      // "123.jpg"
    ];
    $(".bg").css({
      "background-image":
        'url("' + images[Math.floor(Math.random() * images.length)] + '")',
    });
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* <Route
              path="/Dashboard"
              render={(props) => (
                <MapSecond {...props} account={this.state.account} />
              )}
            /> */}
            <Route path="/Learn" exact component={Info} />
            <Route
              path="/"
              render={(props) => (
                <Map {...props} account={this.state.account} />
              )}
            />
            {/* <Map account={this.state.account} /> */}
            {/* <Dashboard /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
