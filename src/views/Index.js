import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import axios from "axios";

import Header from "components/Headers/Header.js";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1",
      getWork: [],
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1",
    });
  };

  componentDidMount() {
    axios.get(`http://localhost:8080/api/findJobBystatusID/1`).then((res) => {
      const getWork = res.data;
      this.setState({ getWork });
    });
  }

  render() {
    const { getWork } = this.state;
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-white shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-body ls-1 mb-1">
                        ภาพรวมทั้งหมด
                      </h6>
                    </div>
                    <div className="col">
                      <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1,
                            })}
                            href="#pablo"
                            onClick={(e) => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">เดือน</span>
                            <span className="d-md-none">ด</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2,
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={(e) => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">สัปดาห์</span>
                            <span className="d-md-none">ส</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Line
                      data={chartExample1[this.state.chartExample1Data]}
                      options={chartExample1.options}
                      getDatasetAtEvent={(e) => console.log(e)}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h6 className="text-uppercase text-body ls-1 mb-1">
                        ค่าเฉลี่ยของงาน
                      </h6>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  {/* Chart */}
                  <div className="chart">
                    <Bar
                      data={chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">งาน</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        ดูทั้งหมด
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush " responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">ชื่อผู้ส่ง</th>
                      <th scope="col">ตึก</th>
                      <th scope="col">ชั้น - ห้อง</th>
                      <th scope="col">เวลาที่ส่งมา</th>
                    </tr>
                  </thead>
                  {getWork.map((getWork) => (
                    <tbody>
                      <tr>
                        <th scope="row">{getWork.id}</th>
                        <td>{getWork.User_ID}</td>
                        <td>{getWork.Building}</td>
                        <td>
                          {getWork.Floor} - {getWork.Room}
                        </td>
                        <td>{getWork.createdAt}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </Card>
            </Col>
            <Col xl="4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">สรุปรายการ</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ชื่อ</th>
                      <th scope="col">จำนวน</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">หลอดไฟ</th>
                      <td>504</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">60%</span>
                          <div>
                            <Progress
                              max="100"
                              value="60"
                              barClassName="bg-gradient-danger"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">ท่อน้ำ</th>
                      <td>321</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">14%</span>
                          <div>
                            <Progress
                              max="100"
                              value="14"
                              barClassName="bg-gradient-success"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">พัดลม</th>
                      <td>300</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">10%</span>
                          <div>
                            <Progress max="100" value="10" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">อุปกรณ์คอมพิวเตอร์</th>
                      <td>299</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">10%</span>
                          <div>
                            <Progress
                              max="100"
                              value="10"
                              barClassName="bg-gradient-info"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">เครื่องปรับอากาศ</th>
                      <td>56</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">6%</span>
                          <div>
                            <Progress
                              max="100"
                              value="6"
                              barClassName="bg-gradient-warning"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Index;
