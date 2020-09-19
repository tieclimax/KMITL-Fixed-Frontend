import React from "react";
import { Link } from "react-router-dom";
import "assets/scss/argon-dashboard-react.scss";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

class AdminNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <FormGroup
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to="/admin/index"
            >
              {this.props.brandText}
            </FormGroup>

            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      <img
                        alt="..."
                        src={require("assets/img/theme/team-1-800x800.jpg")}
                      />
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        Panuwat Khrai-udom (ADMIN)
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">ยินดีต้อนรับ</h6>
                  </DropdownItem>
                  <DropdownItem to="/admin/profile" tag={Link}>
                    <i className="ni ni-single-02" />
                    <span>โปรไฟล์ของฉัน</span>
                  </DropdownItem>
                  <DropdownItem to="/admin/Editprofile" tag={Link}>
                    <i className="ni ni-settings-gear-65" />
                    <span>แก้ไขประวัติส่วนตัว</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
