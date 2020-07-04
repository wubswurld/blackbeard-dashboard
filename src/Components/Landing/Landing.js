import React, { Component } from "react";
// import Typed from "react-typed";
import Button from "react-bootstrap/Button";
import ReactRain from "react-rain-animation";

// import all the styles
import "react-rain-animation/lib/style.css";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          top: "50%",
          //   left: "50%",
          position: "absolute",
          fontSize: "20px",
          margin: "0% auto",
          // background:
          //   "linear-gradient(to bottom,darkblue, rgba(18, 211, 245, 0.4))",

          // opacity:
          // background: "rgb(0, 0, 0, 0.2)",
          // backgroundColor: "grey",
          // opacity: "0.2",
          // background: "rgba(0, 0, 0)",

          // zIndex: 0,
          //   paddingLeft: "22%"
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#F0EBD8",
            // fontFamily: "Libre Baskerville, serif",
            fontFamily: "Crimson Text, serif",
            // fontFamily: "Zilla Slab, serif",
            // fontFamily: "Playfair Display, serif",
            // background: "rgba(0, 151, 19, 0.1)",
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "40px",
              fontFamily: "Playfair Display, serif",
              // fontFamily: "Crimson Text, serif",
              // fontFamily: "Libre Baskerville', serif",
            }}
          >
            Blackbeard.
          </span>
          <br />
          {/* <span
            style={{
              color: "white",
              fontSize: "30px",
              // fontFamily: "Playfair Display, serif",
              fontFamily: "Libre Baskerville', serif",
            }}
          > */}
          Building wealth in Crypto Asset Management.
          {/* </span> */}
        </p>
        <a
          href="/Dashboard"
          style={{
            marginTop: "10%",
            color: "white",
            // textDecoration: "none",
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Crimson Text, serif",
          }}
          className="hvr-underline-from-left"
        >
          DashBoard and Tools
        </a>
        {/*
        <br />
        <Button
          variant="outline-light"
          className="landing-page-scroll-trigger"
          style={{
            marginTop: "3%",
            borderRadius: "25px",
            height: "50px",
            width: "50px",
            backgroundColor: "transparent"
          }}
        >
          <img
            src="chevron-bottom.svg"
            alt="nope"
            style={{ height: "25px", width: "20px", padding: "3px" }}
          />
        </Button> */}
        {/* <Typed
          strings={["The Lowest Cardinal Number in Crypto Asset Management."]}
          typeSpeed={90}
          backSpeed={60}
          //   attr="placeholder"
          loop
          showCursor={false}
        > */}
        {/* <p
            type="text"
            style={{
              whiteSpace: "nowrap",
              fontSize: "30px",
              fontWeight: 600
              //   color: "#3E5C76"
            }}
          />
        </Typed> */}
      </div>
    );
  }
}

export default Landing;
