import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import "../../../assets/css/style.css";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
// import Download from "../IndexSections/Download.js";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250 ">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        เว็บไซต์แจ้งซ่อม
                        {/* <span>completed with EZrepair</span> */}
                      </h1>
                      <p className="lead text-white">
                        ระบบที่ช่วยในการรับเรื่องการแจ้งซ่อมอุปกรณ์
                        ที่เสียหายชำรุดภายในคณะวิทยาศาสตร์
                        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
                        โดยผู้ใช้นักศึกษา บุคลากร
                        สามารถแจ้งซ่อมได้ทุกเวลาเมื่อพบอุปกรณ์ที่ชำรุดหรือเสียหาย
                        ไม่ว่าจะเป็นหลอดไฟ โต๊ะเรียน จอโปรเจคเตอร์ท่อน้ำ
                        ท่อประปา เป็นต้น ระบบจะแจ้งไปยังช่างเพื่อให้ช่าง
                        ดำเนินการซ่อมตามที่ผู้ใช้งานได้แจ้งไว้
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          to="/service-page"
                          tag={Link}
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">
                            เริ่มต้นใช้งาน
                          </span>
                        </Button>
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="btn-wrapper">
                        <img
                          alt="..."
                          className="img-fluid floating"
                          src={require("assets/img/brand/KMITL-FIXED-White.png")}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  // viewBox="0 0 2560 100"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg mb-6  ">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">สะดวก รวดเร็ว ทันใจ</h2>
                  <p className="lead text-muted">แจ้งซ่อม 3 ขั้นตอนง่ายๆ</p>
                </Col>
              </Row>
              <Row className="justify-content-center text-center mb-lg">
                <Col className="mb-5 mb-lg-0 " lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/example1.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">ขั้นตอนที่ 1</span>
                        <small className="h6 text-muted">
                          เลือกแจ้งซ่อมอุปกรณ์
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/example2.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">ขั้นตอนที่ 2</span>
                        <small className="h6 text-muted">
                          ถ่ายรูปอุปกรณ์ สถานที่ และกรอกรายละเอียด
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/theme/example3.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">ขั้นตอนที่ 3</span>
                        <small className="h6 text-muted">
                          ตรวจสอบและยืนยันการแจ้งซ่อม
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ height: "20rem" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-bell-55" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            การแจ้งเตือน
                          </h6>
                          <p className="description mt-3">
                            การแจ้งเตือนของระบบ KMITL-Fixed
                            เมื่อผู้ใช้ทำการดำเนินเรื่องแจ้งซ่อมไปยังระบบแล้วหรืองานซ่อม
                            ถูกทำเสร็จแล้วระบบจะส่งการแจ้งเตือนไปยังผู้ใช้เพื่อให้ผู้ใช้รับทราบ
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ height: "20rem" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-archive-2" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            แจ้งซ่อมออนไลน์
                          </h6>
                          <p className="description mt-3">
                            ระบบสามารถบันทึกข้อมูลการแจ้งซ่อมข้อมูลการทำงาน
                            ผู้ใช้สามารถตรวจสอบสถานะการซ่อมและประวัติงานซ่อมที่ผู้ใช้ได้ทำการแจ้งไว้ได้
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ height: "20rem" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-user-run" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            ข้อจำกัดการใช้งาน
                          </h6>
                          <p className="description mt-3">
                            ผู้ใช้สามารถดำเนินการแจ้งซ่อมได้ทีละครั้งเท่านั้นหากผู้ใช้ต้องการส่งเรื่องอีกสามารถส่งเรื่องเพิ่มได้หลังทำรายการอันแรกเสร็จ
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/promo-1.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>คุณสมบัติยอดเยี่ยม</h3>
                    <p>
                      KMITL-Fixed เป็น Web Application ทำให้ผู้ใช้สามารถ
                      เข้าใช้งานได้ทุกอุปกรณ์ไม่ว่าจะเป็น มือถือ แท็บเล็ต หรือ
                      คอมพิวเตอร์และผู้ใช้ไม่จำเป็นต้องโหลดโปรแกรมของระบบ
                      สามารถเข้าใช้งานผ่าน Browser ได้ทันที
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              {/* <i className="ni ni-settings-gear-65" /> */}
                              <i class="fa fa-desktop" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">ใช้งานได้หลากหลายแพลตฟอร์ม</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fa fa-clock" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              รวดเร็ว เชื่อมต่อเว็บแอพหรือบริการอื่นๆได้ง่าย
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i class="fa fa-smile" aria-hidden="true"></i>
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              อยู่ที่ไหนก็ใช้งานได้
                              เพราะสามารถล็อกอินเข้าใช้งานได้เลย
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/theme/img-1-1200x1000.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        การออกแบบระบบ
                      </h4>
                      <p className="lead text-italic text-white">
                        ระบบถูกออกแบบมาเพื่อตอบสนองให้ผู้ใช้ภายใน
                        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง นักศึกษา
                        ครู แม่บ้าน
                        ได้มีสิทธิ์แจ้งซ่อมหรือเรียกร้องให้มีการซ่อมอุปกรณ์ที่ชำรุดภายในสถาบันได้
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>ผู้แจ้งซ่อม</h3>
                    <p className="lead">
                      ผู้ใช้จำเป็นต้องอัพโหลด หรือถ่ายรูปภาพของอุปกรณ์
                      ที่เสียหายหรือชำรุด เพื่อให้ทางผู้ดูแลได้เห็นว่ารูปของ
                      อุปกรณ์ว่าคืออะไรหรือมีความเสียหายมากน้อยเท่าไร
                      อีกทั้งระบุรายละเอียดต่างๆ เพื่อให้ผู้ดูแลได้สามารถ
                      ไปจัดการได้ถูกที่และเวลา
                    </p>
                    <p>
                      สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาด
                      กระบังจะมีความก้าวหน้าและทันสมัย หากทุกคน
                      ภายในสถาบันหันมาช่วยกันดูแลสิ่งต่างๆ อุปกรณ์ เครื่องมือ
                      เครื่องใช้
                      หรือช่วยกันแจ้งไปยังผู้ดูแลให้มาจัดการปัญหาต่างๆ
                    </p>

                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      “เพราะเราห่วงใยคุณ”
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning ">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1 " lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">KMITL</h4>
                      <p className="text-white">
                        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบังหรือเรียกอีกอย่างหนึ่งว่าพระจอมเกล้าลาดกระบัง
                        <p className="text-white">
                          เป็นมหาวิทยาลัยที่มีชื่อเสียงในด้านวิทยาศาสตร์และเทคโนโลยี
                        </p>
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-1">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">ความช่วยเหลือ</h5>
                          <p>
                            การให้ความช่วยเหลือในด้านต่างๆ คอยสนับสนุนนักศึกษา
                            บุคลาการ อย่างสม่ำเสมอ
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">การปรึกษา</h5>
                          <p>
                            มีการให้คำปรึกษาคำแนะนำได้ที่ดีไม่ว่าเรื่องอะไรก็ตามมีปัญหาลาดกระบังพร้อมช่วยเสมอ
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">เอกสารแนะนำโปรแกรม</h3>
                      <p className="lead text-white mt-3">
                        เอกสารนี้เป็นเอกสารที่เกี่ยวกับการใช้งาน React
                        ในการทำเว็บไซต์เป็นเอกสารที่ทำให้เว็บไซต์ของเราออกมาคุณภาพและมีความพร้อมในการใช้งานและน่าสนใจมากขึ้น
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        ดาวน์โหลดไฟล์
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default ">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">ช่องทางติดต่อ</h2>
                  <p className="lead text-white"></p>
                </Col>
              </Row>
              <Row className="row-grid mt-5 text-center justify-content-center">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i class="fa fa-phone-square" aria-hidden="true"></i>
                  </div>
                  <h5 className="text-white mt-3">ติดต่อ</h5>
                  <p className="text-white mt-3">
                    โทร. 02-329-8400 ถึง 8411
                    <p>โทรสาร. 02-329-8412</p>
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">คณะวิทยาศาสตร์</h5>
                  <p className="text-white mt-3">
                    คณะวิทยาศาสตร์ สถาบันเทคโนโลยี
                    พระจอมเกล้าเจ้าคุณทหารลาดกระบัง เลขที่ 1 ซอยฉลองกรุง 1
                    ถ.ฉลองกรุง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพ 10520
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-world-2 text-primary" />
                  </div>
                  <h5 className="text-white mt-3">เว็บไซต์คณะวิทยาศาสตร์</h5>
                  <p className="text-white mt-3">www.science.kmitl.ac.th</p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">แสดงความคิดเห็น</h4>
                      <p className="mt-0">ความคิดเห็นของคุณสำคัญมากสำหรับเรา</p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="ชื่อของคุณ"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="ที่อยู่อีเมล์"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="ความคิดเห็น ข้อเสนอแนะของคุณ..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          ส่งข้อความ
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <Download /> */}
        </main>

        <CardsFooter />
      </>
    );
  }
}

export default Landing;
