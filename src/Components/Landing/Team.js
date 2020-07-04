import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Team extends Component {
  render() {
    return (
      <div style={{ minHeight: "500px", marginTop: "5%" }}>
        <p style={{ fontSize: "32px", fontWeight: 700 }}>Our Team.</p>
        <Container style={{ marginTop: "5%" }}>
          <Row>
            <Col>
              <div>
                <img src="cam.jpg" alt="ok" style={{ maxWidth: "300px" }}></img>
                <p
                  style={{ marginTop: "5%", fontWeight: 700, fontSize: "18px" }}
                >
                  Cam D
                </p>
                <p>Head of Floor Licking</p>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  src="newlink.jpeg"
                  alt="jpeg"
                  //   style={{ width: "300px" }}
                ></img>
                <p
                  style={{ marginTop: "5%", fontWeight: 600, fontSize: "20px" }}
                >
                  Jack Watters
                </p>
                <p style={{ fontWeight: 600, fontSize: "16px" }}>
                  President/CTO
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Team;
