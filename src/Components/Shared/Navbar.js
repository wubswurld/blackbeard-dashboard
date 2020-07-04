import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MediaQuery from "react-responsive";
import $ from "jquery";

class NavBar extends Component {
  componentDidUpdate() {
    // console.log(document.getElementsByName("acct")[0]);
    // var doc = document.getElementsByName("acct")[0].innerText;
    // var str = doc.match(/.{1,6}/g);
    // var fin = str[0] + "..." + str[str.length - 1];
    // document.getElementsByName("acct")[0].innerText = fin;
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      $("#nav").css({
        "background-color": "white",
      });
      $(".nav-link1").css({
        color: "black",
      });
      $(".nav-link").css({
        color: "black",
      });
    } else {
      $("#nav").css({
        "background-color": "transparent",
      });
      $(".nav-link").css({
        color: "white",
      });
    }
  };

  render() {
    const { account } = this.props;
    return (
      <div>
        <MediaQuery minDeviceWidth={1001}>
          <Navbar expand="lg" className="fixed-top" id="nav">
            <Container>
              <Row>
                <Col>
                  <Navbar.Brand
                    href="#home"
                    style={{ fontSize: "32px", fontWeight: 700 }}
                  >
                    <img src="lo.png" alt="lol" style={{ height: "50px" }} />
                  </Navbar.Brand>
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <Nav className="mr-auto">
                    <Nav.Link
                      href="#home"
                      id="acct"
                      className="nav-link1"
                      style={{ color: "white" }}
                    >
                      <p
                        style={{ fontWeight: 700, marginTop: "4.5%" }}
                        name="acct"
                      >
                        {account}
                      </p>
                    </Nav.Link>
                    <Nav.Link
                      href="#link"
                      className="nav-link"
                      style={{ color: "white", marginTop: "3%" }}
                    >
                      Link
                    </Nav.Link>
                  </Nav>
                </Col>
              </Row> */}
            </Container>
          </Navbar>
        </MediaQuery>
        {/* {isMobile && ( */}
        <MediaQuery maxDeviceWidth={1000}>
          <Navbar expand="lg" className="fixed-top" id="nav">
            <Navbar.Brand href="#home">
              <img src="lo.png" alt="lol" style={{ height: "40px" }} />
            </Navbar.Brand>
            <Navbar.Toggle
              className="navbar-toggler"
              aria-controls="basic-navbar-nav"
              style={{
                border: "none",
                outline: "none",
              }}
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </MediaQuery>
        {/* )} */}
      </div>
    );
  }
}

export default NavBar;
