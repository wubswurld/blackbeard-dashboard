import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Base from "../Landing/Base";
import Team from "../Landing/Team";
import Tech from "../Landing/Tech";

class About extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "750px",
          top: "10%",
          width: "100%"
          //   marginTop: "20%",
          //   backgroundColor: "#748CAB"
        }}
      >
        <Base />
        <Tech />
        <Team />
      </div>
    );
  }
}

export default About;
