import React from "react";
import { Link } from "react-router-dom";
import { isEmail } from "validator";
import AuthService from "../../../services/auth.service";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
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

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      successful: false,
      message: "",
    };
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });
    if (this.state.username && this.state.password) {
      AuthService.register(
        this.state.firstname,
        this.state.lastname,
        this.state.email,
        this.state.username,
        this.state.password
      ).then(
        (response) => {
          this.setState({
            message: response.data.message,
            successful: true,
          });
          this.props.history.push("/Login-page");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage,
          });
        }
      );
    }
  }

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
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div
                        className="text-muted text-center mb-3"
                        style={{ fontSize: "1.4rem" }}
                      >
                        <small>ลงทะเบียน</small>
                      </div>
                      <div className="text-center">
                        <Button
                          className="btn-neutral btn-icon ml-1"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-2">
                      <div
                        className="text-center text-muted mb-4"
                        style={{ fontSize: "1.25rem" }}
                      >
                        <small>หรือลงทะเบียนเข้าใช้ด้วยข้อมูลรับรอง</small>
                      </div>
                      <Form role="form" onSubmit={this.handleRegister}>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="ชื่อ"
                              type="text"
                              name="name"
                              value={this.state.firstname}
                              onChange={this.onChangeFirstname}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="นามสกุล"
                              type="text"
                              name="lastname"
                              value={this.state.lastname}
                              onChange={this.onChangeLastname}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="อีเมล"
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                              validations={[email]}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="ชื่อผู้ใช้"
                              type="text"
                              name="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={[vusername]}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="รหัสผ่าน"
                              type="password"
                              autoComplete="off"
                              name="username"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[vpassword]}
                            />
                          </InputGroup>
                        </FormGroup>

                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  ฉันเห็นด้วยกับ{" "}
                                  <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="submit"
                          >
                            สร้างบัญชี
                          </Button>
                        </div>
                      </Form>
                      <Row className="justify-content-center mt-4">
                        <div className="to-login">
                          <p>
                            หากมีบัญชีอยู่แล้ว{" "}
                            <Link to={"/login-page"} activeClassName="active">
                              เข้าสู่ระบบ
                            </Link>
                          </p>
                        </div>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Register;
