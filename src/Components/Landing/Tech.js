import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Tech extends Component {
  render() {
    return (
      <div style={{ minHeight: "500px", marginTop: "5%" }}>
        <Container>
          <Row>
            <Col>
              <img src="nodes.svg" alt="nope" style={{ width: "250px" }}></img>
            </Col>
            <Col>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 500
                  // textAlign: "initial"
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "32px"
                  }}
                >
                  Technology first.
                </span>
                <br></br> Being up to date and having backgrounds in tech is a
                crucial aspect to our success when it comes to Digital assets
                and gives us a edge on our competitors. As most of our tools are
                Defi and crypto projects being able to code and set up bots for
                market making and abitrage or staking crypto allows us to
                discover the largest ROI's in investment
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  textDecoration: "underline",
                  marginTop: "5%"
                }}
              >
                Example's of this could look like
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <span style={{ fontWeight: 700 }}>1.</span>
              <Col>
                <img
                  src="humbot.png"
                  alt="nope"
                  style={{
                    width: "150px",
                    marginTop: "10%",
                    marginBottom: "13%"
                  }}
                ></img>
              </Col>
              <Col>
                <p style={{ fontSize: "16px", fontWeight: 500 }}>
                  Setting up multiple Hummingbot nodes on Google cloud servers
                  to trade abitrage oppurtunities within different crypto
                  exchanges
                </p>
              </Col>
            </Col>
            <Col>
              <span style={{ fontWeight: 700 }}>2.</span>
              <Col>
                <img
                  src="iexec.jpg"
                  alt="nope"
                  style={{ width: "150px" }}
                ></img>
              </Col>
              <Col>
                <p style={{ fontSize: "16px", fontWeight: 500 }}>
                  Hold a percentage of all funds in Iexec Rlc because our
                  analysis indicated it will evaluate over time
                </p>
              </Col>
            </Col>
            <Col>
              <span style={{ fontWeight: 700 }}>3.</span>
              <Col>
                <img
                  src="uniswap.jpeg"
                  alt="nope"
                  style={{ width: "150px" }}
                ></img>
              </Col>
              <Col>
                <p style={{ fontSize: "16px", fontWeight: 500 }}>
                  Participate in upcoming Liquidity pools that return an average
                  of 10-20% Apr with Low risk such as uniswap and Curve.fi
                </p>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tech;
