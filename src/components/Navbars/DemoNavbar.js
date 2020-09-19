import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import "../../assets/css/style.css";

import AuthService from "services/auth.service";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
      });
    }
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialize
    headroom.init();
  }

  logOut() {
    AuthService.logout();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/kmitl-fixed2-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/kmitl-fixed-orange-white.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">แจ้งซ่อม</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          to="/service-page"
                          tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              แจ้งซ่อม
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              แจ้งซ่อม 3 ขั้นตอนง่ายๆ
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          to="/getstart-page"
                          tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              เริ่มต้นใช้งาน
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              ผู้ใช้จำเป็นต้องอัพโหลด หรือถ่ายรูปภาพของอุปกรณ์
                              ที่เสียหายหรือชำรุด
                              เพื่อให้ทางผู้ดูแลได้เห็นว่ารูปของ
                              อุปกรณ์ว่าคืออะไรหรือมีความเสียหายมากน้อยเท่าไร
                              อีกทั้งระบุรายละเอียดต่างๆ
                              เพื่อให้ผู้ดูแลได้สามารถ ไปจัดการได้ถูกที่และเวลา
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">เกี่ยวกับเรา</span>
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          to="/"
                          tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-book-bookmark" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              ระบบแจ้งซ่อม
                            </h6>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          to="/"
                          tag={Link}
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-send" />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              ข้อมูลติดต่อ
                            </h6>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="ni ni-square-pin d-lg-none mr-1" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="ni ni-tag d-lg-none mr-1" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Kmitl
                      </span>
                    </NavLink>
                  </NavItem>
                  {currentUser ? (
                    <UncontrolledDropdown nav>
                      <DropdownToggle nav>
                        <i className="ni ni-collection d-lg-none mr-1" />
                        <span className="nav-link-inner--text">
                          {currentUser.username}
                        </span>
                      </DropdownToggle>

                      <DropdownMenu className="dropdown-menu-md">
                        <div className="dropdown-menu-inner">
                          <Media
                            className="d-flex align-items-center"
                            to="/Login-page"
                            tag={Link}
                            onClick={this.logOut}
                          >
                            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                              <i className="ni ni-bold-left" />
                            </div>
                            <Media
                              body
                              className="ml-3"
                              style={{ width: "30px" }}
                            >
                              <h6 className="heading text-primary mb-md-1">
                                ออกจากระบบ
                              </h6>
                            </Media>
                          </Media>
                        </div>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  ) : (
                    <NavItem className="d-none d-lg-block ml-lg-4">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        to="/Login-page"
                        tag={Link}
                      >
                        <span className="ni ni-active-40 ">
                          <i className=" mr-2" />
                        </span>
                        <span className="nav-link-inner--text ml-1">
                          เข้าสู่ระบบ
                        </span>
                      </Button>
                    </NavItem>
                  )}
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/Login-page"
                      tag={Link}
                    >
                      <i className="ni ni-active-40 d-lg-none mr-1" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        เข้าสู่ระบบ
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
