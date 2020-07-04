import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import Sonnet from "react-bootstrap/Sonnet";

import Accordion from "react-bootstrap/Accordion";
// import DataComponent from "./Sheets";
import CustomComponent from "./Sheets";
import axios from "axios";
import { Chart } from "react-charts";
import {
  LineChart,
  ComposedChart,
  Line,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

const RenderLineChartHalv = (data, dataSheet, BtcData) => {
  console.log(data);
  var Cmp = data.compareData;
  // var flat = data.compareDataBtc;
  // console.log(flat);
  var cap = [];
  var num = [250000, 300000, 400000];
  var num1 = [0, 1000, 5000];

  for (var i in Cmp) {
    // console.log(formattedTime);
    // console.log(Cmp[i]);
    cap[i] = {
      time: timeConverter(Cmp[i].time),
      count: Cmp[i].transaction_count,
      height: num[i],
      BtcHeight: num1[i],
      BtcPrice: data.compareDataBtc[i].high,
      // BtcData:
    };
  }
  console.log(cap);
  // var newArr2 = data.compareData.flat(2);
  // console.log(newArr2);
  // var Hold = data.compareData.map(function (x, index) {
  //   //   console.log(x[index]);
  //   return x;
  // });
  // console.log(Hold);
  // // console.log()
  // var newArr2 = data.dataSheet.flat(2);
  // var BtcArr = data.BtcData.flat(2);

  // var BtcArr2 = [];
  // for (var i = 0; i < BtcArr.length; i++) {
  //   BtcArr2[i] = BtcArr[i].replace(/[!@#$%^&*]/g, "");
  // }
  // console.log(BtcArr2);

  // var Arr = [];
  // for (var i = 0; i < newArr2.length; i++) {
  //   Arr[i] = newArr2[i].replace(/[!@#$%^&*]/g, "");
  // }
  // var num = [-50, 0, 50];
  // var newArr = data.data.map(function (x, index) {
  //   return {
  //     name: x,
  //     Blackbeard: Arr[index],
  //     height: num[index],
  //     BTC: BtcArr2[index],
  //   };
  // });
  return (
    <div>
      <LineChart
        width={900}
        height={500}
        data={cap}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        style={{ margin: "3% auto" }}
      >
        <Line
          yAxisId="right"
          type="linear"
          dataKey="BtcPrice"
          stroke="#F70D1C"
          strokeWidth={3}
        />
        {/* <Line type="monotone" dataKey="BtcPrice" stroke="#007bff" r={1} /> */}
        <Line type="monotone" dataKey="count" stroke="#007bff" r={1} />
        <XAxis dataKey="time" padding={{ left: 30, right: 30 }} />
        <YAxis yAxisId="right" orientation="right" dataKey="BtcHeight" />
        <ReferenceLine x="12 Sep 2016 17:0:0" stroke="grey" label="Halvening" />

        <YAxis dataKey="height" />

        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

const RenderLineChart = (data, dataSheet, BtcData) => {
  // console.log(data);
  // console.log()
  console.log(data.BtcData);
  var newArr2 = data.dataSheet.flat(2);
  var BtcArr = data.BtcData.flat(2);

  var BtcArr2 = [];
  for (var i = 0; i < BtcArr.length; i++) {
    BtcArr2[i] = BtcArr[i].replace(/[!@#$%^&*]/g, "");
  }
  // console.log(BtcArr2);

  var Arr = [];
  for (var i = 0; i < newArr2.length; i++) {
    Arr[i] = newArr2[i].replace(/[!@#$%^&*]/g, "");
  }
  var num = [-50, 0, 50];
  var newArr = data.data.map(function (x, index) {
    return {
      name: x,
      Blackbeard: Arr[index],
      height: num[index],
      BTC: BtcArr2[index],
    };
  });
  console.log(newArr);
  return (
    <LineChart
      width={900}
      height={500}
      data={newArr}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      style={{ margin: "3% auto" }}
    >
      <Line type="monotone" dataKey="Blackbeard" stroke="#007bff" r={1} />
      <Line type="monotone" dataKey="BTC" stroke="#DC0073" r={1} />
      {/* <Area type="monotone" dataKey="BTC" stroke="#82ca9d" fill="#82ca9d" /> */}

      {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
      <XAxis dataKey="name" />
      <YAxis dataKey="height" />
      <ReferenceLine y={0} stroke="#A5A299" />

      <Tooltip />
      <Legend />
    </LineChart>
  );
};

const SHEET_ID = "1D9v79K5LIshzIGYnptyMxFavRWkjRbKoD1qzg16Mn_4";
const ACCESS_TOKEN =
  "ya29.a0AfH6SMDQL5KWHKJ6NLYI97AUNWKFriZ4Ug5otApDFYRJ0EMOpeEZxN0sNzFISXPDfEZhPa43eNjLDEX8ojdxXcduPFV1Qf_4b9HsVv6wTjZBSyIbKda-vq_7Bfwt8lH75bOJ9frekAMmtowyvxBTvCW12wF4I4EeAiM";
class Dashboard extends Component {
  state = {
    persons: [],
    devs: [],
    comm: [],
    eth: [],
    cryptoCompare: [],
    btcMarketData: [],
    btcPrice: "",
    sheetData: [],
    sheetDataBB: [],
    BtcData: [],
  };

  getSheetValues = async () => {
    const request = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:A118`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const data = await request.json();
    // console.log(data);
    this.setState({ sheetData: data.values });
    // console.log(this.state.sheetData[1]);
    // return data;
  };
  getSheetValues2 = async () => {
    const request = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/C2:C118`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const data = await request.json();
    // console.log(data);
    this.setState({ sheetDataBB: data.values });
    // console.log(this.state.sheetDataBB);
    // return data;
  };

  getSheetValues3 = async () => {
    const request = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/F2:F118`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    const data = await request.json();
    // console.log(data);
    this.setState({ BtcData: data.values });
  };

  componentDidMount() {
    this.getSheetValues();
    this.getSheetValues2();
    this.getSheetValues3();

    // axios
    //   .get(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}`)
    //   .then((res) => {
    //     const sheets = res.data;
    //     console.log(sheets);
    //   });
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=725&toTs=1505174400`
      )
      .then((res) => {
        console.log(res.data.Data.Data);
        // const compareData = res.data.Data.Data;
        // const devData = res.data.developer_data;
        this.setState({ compareDataBtc: res.data.Data.Data });
        // console.log(this.state.compareData);
        // console.log(this.state.devData[0]);
      });
    axios
      .get(
        `https://min-api.cryptocompare.com/data/blockchain/histo/day?fsym=BTC&limit=725&toTs=1505174400&api_key=fbcaf91425cb76cbd6fb170e8d94cb02af83836875dd3a59f0dcbcfd220abe14`
      )
      .then((res) => {
        console.log(res.data.Data.Data);
        // const compareData = res.data.Data.Data;
        // const devData = res.data.developer_data;
        this.setState({ compareData: res.data.Data.Data });
        // console.log(this.state.compareData);
        // console.log(this.state.devData[0]);
      });
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin`).then((res) => {
      const persons = res.data;
      // const devData = res.data.developer_data;
      this.setState({ persons });
      this.setState({ devs: res.data.developer_data });
      this.setState({ comm: res.data.community_data });
      this.setState({ btcMarketData: res.data.market_data });
      this.setState({ btcPrice: res.data.market_data.current_price.usd });
      // console.log(this.state.btcMarketData.tickers);

      // console.log(this.state.persons);
      // console.log(this.state.devData[0]);
    });
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/ethereum/history?date=01-1-2016`
      )
      .then((res) => {
        const person = res.data;
        // console.log(person);
      });
    axios
      .get(
        `https://min-api.cryptocompare.com/data/social/coin/latest?api_key=fbcaf91425cb76cbd6fb170e8d94cb02af83836875dd3a59f0dcbcfd220abe14
        `
      )
      .then((res) => {
        const cryptoCompare = res.data;
        // console.log(cryptoCompare);
        this.setState({ cryptoCompare: res.data.Data.Reddit });
      });
  }

  render(props) {
    const { account } = this.props;
    // const listItems = Object.keys(this.state.devs).map((key) => (
    //   <option value={key}>{this.state.devs[key]}</option>
    // ));
    // const listItems = this.state.devs.map((dev) => <Col xs={3}>{dev}</Col>);

    var arr1 = this.state.sheetDataBB;
    // console.log(arr1);
    return (
      <div className="bg1">
        <div
          style={{
            position: "absolute",
            marginTop: "8%",
            // height: "1000px",
            // left: "50%",
            width: "100%",
            marginBottom: "10%",
          }}
        >
          <Container
          // style={{ height: "1000px" }}
          >
            <Row>
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <Tabs
                      defaultActiveKey="1"

                      // id="uncontrolled-tab-example"
                    >
                      <Tab
                        eventKey="1"
                        title="Blackbeard"
                        style={{ color: "black" }}
                      >
                        <Card.Title style={{ marginTop: "5%" }}>
                          Blackbeard performance dashboard
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          All data pulled from our google sheet
                        </Card.Subtitle>
                        <RenderLineChart
                          // props={(this.state.sheetData, this.state.sheetDataBB)}
                          data={this.state.sheetData}
                          dataSheet={this.state.sheetDataBB}
                          BtcData={this.state.BtcData}
                          compareData={this.state.compareData}
                        />
                      </Tab>
                      <Tab
                        eventKey="2"
                        title="Developer data"
                        style={{ color: "black" }}
                      >
                        <Card.Title>Developer data dashboard</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          All data is pulled from coingecko and Crypto Compare
                          since creation
                        </Card.Subtitle>
                        <Container>
                          <Row>
                            <Col xs={12}>
                              <Accordion defaultActiveKey="0">
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    style={{ textAlign: "initial" }}
                                  >
                                    <img
                                      src="iconfinder_BTC_1175252.png"
                                      alt="idk"
                                      style={{
                                        maxWidth: "40px",
                                        paddingRight: "10px",
                                      }}
                                    />{" "}
                                    <span id="name">
                                      {this.state.persons.id}
                                    </span>
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="0">
                                    <Card.Body style={{}}>
                                      <Container>
                                        <Row>
                                          <Col style={{ textAlign: "end" }}>
                                            {this.state.persons.symbol}
                                          </Col>
                                          <Col
                                            style={{
                                              textAlign: "initial",
                                              marginTop: "1px",
                                            }}
                                          >
                                            {this.state.btcPrice}
                                          </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                          <Col xs={3}>4 Week Commits</Col>
                                          <Col xs={3}>Repo stars</Col>
                                          <Col xs={3}>Forks</Col>
                                          <Col xs={3}>Contributors</Col>
                                        </Row>
                                        <Row>
                                          <Col xs={3}>
                                            {
                                              this.state.devs
                                                .commit_count_4_weeks
                                            }
                                          </Col>
                                          <Col xs={3}>
                                            {this.state.devs.stars}
                                          </Col>
                                          <Col xs={3}>
                                            {this.state.devs.forks}
                                          </Col>
                                          <Col xs={3}>
                                            {
                                              this.state.devs
                                                .pull_request_contributors
                                            }
                                          </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                          <Col xs={3}>Active Reddit users</Col>
                                          <Col xs={3}>Closed Issues</Col>
                                          <Col xs={3}>Total Issues</Col>
                                          <Col xs={3}>Merged Requests</Col>
                                        </Row>

                                        <Row>
                                          <Col xs={3}>
                                            {
                                              this.state.cryptoCompare
                                                .active_users
                                            }
                                          </Col>
                                          <Col xs={3}>
                                            {this.state.devs.closed_issues}
                                          </Col>
                                          <Col xs={3}>
                                            {this.state.devs.total_issues}
                                          </Col>
                                          <Col xs={3}>
                                            {
                                              this.state.devs
                                                .pull_requests_merged
                                            }
                                          </Col>
                                        </Row>
                                        <br />
                                        <Row>
                                          <Col xs={3}>
                                            Reddit Comments per day
                                          </Col>
                                          <Col xs={3}>
                                            Reddit Comments per hour
                                          </Col>
                                          <Col xs={3}>Reddit daily posts</Col>
                                          <Col xs={3}>
                                            Reddit posts per hour
                                          </Col>
                                        </Row>

                                        <Row>
                                          <Col xs={3}>
                                            {
                                              this.state.cryptoCompare
                                                .comments_per_day
                                            }
                                          </Col>
                                          <Col xs={3}>
                                            {
                                              this.state.cryptoCompare
                                                .comments_per_hour
                                            }
                                          </Col>
                                          <Col xs={3}>
                                            {
                                              this.state.cryptoCompare
                                                .posts_per_day
                                            }
                                          </Col>
                                          <Col xs={3}>
                                            {
                                              this.state.cryptoCompare
                                                .posts_per_hour
                                            }
                                          </Col>
                                        </Row>
                                      </Container>
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                                <Card>
                                  <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="1"
                                  >
                                    Click me!
                                  </Accordion.Toggle>
                                  <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                      Hello! I'm another body
                                    </Card.Body>
                                  </Accordion.Collapse>
                                </Card>
                              </Accordion>
                            </Col>
                          </Row>
                          <Row></Row>
                        </Container>
                      </Tab>
                    </Tabs>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} style={{ marginTop: "10%" }}>
                <Card>
                  <Card.Title>Halvening Charts</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    All data is pulled from coingecko and Crypto Compare since
                    creation
                  </Card.Subtitle>

                  <Card.Body>
                    {/* <RenderLineChartHalv
                 
                      compareData={this.state.compareData}
                      compareDataBtc={this.state.compareDataBtc}
                    /> */}
                    {/* <PieChart width={730} height={250}>
                      <Pie
                        data={data01}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={50}
                        fill="#8884d8"
                      />
                    </PieChart> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* <Row>
                        <Col
                          xs={4}
                          style={{
                            float: "right",
                            marginTop: "5%",
                          }}
                        >
                          <div style={{ float: "left" }}>
                            <img
                              src="iconfinder_BTC_1175252.png"
                              alt="idk"
                              style={{
                                maxWidth: "50px",
                                paddingRight: "10px",
                              }}
                            />
                          </div>
                          <div style={{ float: "left", marginTop: "2.7%" }}>
                            <Card.Title>{this.state.persons.id}</Card.Title>
                          </div>
                          <div
                            style={{
                              float: "left",
                              marginTop: "2.19%",
                              paddingLeft: "15px",
                              fontSize: "19px",
                              fontWeight: 600,
                            }}
                          >
                            {this.state.persons.symbol}
                          </div>
                          <div
                            style={{
                              float: "left",
                              marginTop: "1.98%",
                              paddingLeft: "15px",
                              fontSize: "19px",
                              fontWeight: 600,
                            }}
                          >
                            {this.state.persons.symbol}
                          </div> */}
          {/* <div style={{ float: "left" }}>
                            <img
                              src="iconfinder_BTC_1175252.png"
                              alt="idk"
                              style={{
                                maxWidth: "50px",
                                // padding: "10px",
                              }}
                            />
                          </div>
                          <div style={{ float: "left", padding: "15px" }}>
                            <Card.Title>{this.state.persons.id}</Card.Title>
                          </div> */}{" "}
          {/* <img
                            src="iconfinder_BTC_1175252.png"
                            alt="idk"
                            style={{
                              maxWidth: "50px",
                              padding: "5px",
                            }}
                          />{" "} */}
          {/* <Card.Title>{this.state.persons.id}</Card.Title> */}
          {/* <Card.Subtitle className="text-muted">
                            {this.state.persons.symbol}
                          </Card.Subtitle> */}
          {/* </Col> */}
          {/* <Col xs={2}>
                          <Card.Title>{this.state.persons.id}</Card.Title>
                        </Col> */}
          {/* <Col xs={12}>
                          <Card.Title>{this.state.persons.id}</Card.Title>
                          <Card.Subtitle className="text-muted">
                            {this.state.persons.symbol}
                          </Card.Subtitle>
                        </Col>
                        <Col>here</Col> */}
          {/* </Row> */}
          {/* </Container> */}
          {/* <Card.Text> */}
          {/* {this.state.persons.id} */}
          {/* <p>Balance:</p> */}
          {/* <p>Percent of Total fund:</p> */}
          {/* </Card.Text> */}
          {/* </Card.Body> */}
          {/* </Card> */}
          {/* </Col> */}
          {/* <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Total Balance of Blackbeard</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col> */}
          {/* </Row> */}
          {/* </Container> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;
