import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MediaQuery from "react-responsive";

class Base extends Component {
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={1001}>
          <Container>
            <Row>
              <Col>
                <div style={{ paddingTop: "25%" }}>
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      float: "left"
                    }}
                  >
                    What We Do.
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div style={{ paddingTop: "25%" }}>
                  <img
                    src="images.png"
                    alt="nope"
                    style={{
                      position: "absolute",
                      width: "50px",
                      right: "50%"
                    }}
                  ></img>
                  <img
                    src="images.png"
                    alt="nope"
                    style={{
                      position: "absolute",
                      width: "50px",
                      right: "54%",
                      top: "270px"
                    }}
                  ></img>
                  <img
                    src="images.png"
                    alt="nope"
                    style={{ position: "absolute" }}
                  ></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    textAlign: "initial"
                  }}
                >
                  Our goal is to give any person access to itellectual
                  investment in Digital Assets. Our backgrounds in Software
                  development specifically Crypto, defi and traditional markets
                  such as futures, options and currency trading translates into
                  a well built track record. We apply tool and strategies from
                  traditional financial markets to profit on short and long term
                  blockchain projects. On track to becoming largest non
                  traditional hedge fund.
                </p>
              </Col>
            </Row>
          </Container>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1000}>
          <Container>
            <Row>
              <Col>
                <div style={{ paddingTop: "25%" }}>
                  <p
                    style={{
                      fontSize: "32px",
                      fontWeight: 700,
                      float: "left"
                    }}
                  >
                    What We Do.
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div style={{ paddingTop: "25%" }}>
                  {/* <img
                    src="images.png"
                    alt="nope"
                    style={{
                      position: "absolute",
                      width: "35px",
                      right: "50%"
                    }}
                  ></img> */}
                  <img
                    src="images.png"
                    alt="nope"
                    style={{ position: "absolute", right: "8%", top: "100%" }}
                  ></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    textAlign: "initial"
                  }}
                >
                  Our goal is to give any person access to itellectual
                  investment in Digital Assets. Our backgrounds in Software
                  development specifically Crypto, defi and traditional markets
                  such as futures, options and currency trading translates into
                  a well built track record. We apply tool and strategies from
                  traditional financial markets to profit on short and long term
                  blockchain projects.
                </p>
              </Col>
            </Row>
          </Container>
        </MediaQuery>
      </div>
    );
  }
}

export default Base;
