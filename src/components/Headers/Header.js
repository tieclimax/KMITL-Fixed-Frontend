import React from "react";
import "../../assets/css/style.css";
import axios from "axios";
// import DashboardRetrive from "../../services/dashboard.service";
// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      getall_work: [],
    };
  }

  componentDidMount() {
    // const getall_work = DashboardRetrive.getDataDashboard();
    // this.setState({ getall_work });

    axios.get(`http://localhost:8080/api/CountDashboard/`).then((res) => {
      const getall_work = res.data;
      this.setState({ getall_work });
    });
  }

  render() {
    const { getall_work } = this.state;
    return (
      <>
        <div className="header-top bg-gradient-warning pb-8 pt-5 pt-md-8">
          {/* <div className="header-top  pb-8 pt-5 pt-md-8"> */}
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานทั้งหมด
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {getall_work.map(
                              (getall_work) => getall_work.all_work
                            )}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="ni ni-box-2" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-4 mb-0 text-muted text-sm"></p>
                      <Progress color="info" value="" />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานเข้าใหม่
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {getall_work.map(
                              (getall_work) => getall_work.new_work
                            )}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="ni ni-cart" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-4 mb-0 text-muted text-sm"></p>
                      <Progress color="info" value="" />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานเสร็จเเล้ว
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {getall_work.map(
                              (getall_work) => getall_work.complete_work
                            )}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-green text-white rounded-circle shadow">
                            <i className="ni ni-books" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-4 mb-0 text-muted text-sm"></p>
                      <Progress color="info" value="" />
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            งานยังไม่เสร็จ
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {getall_work.map(
                              (getall_work) => getall_work.uncomplete_work
                            )}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="ni ni-archive-2" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-4 mb-0 text-muted text-sm"></p>
                      <Progress color="info" value="" />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
