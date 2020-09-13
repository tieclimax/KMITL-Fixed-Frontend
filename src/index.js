import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
import "assets/scss/argon-design-system-react.scss";

import AdminLayout from "layouts/Admin.js";
import ManagerLayout from "layouts/Manager.js";
import StaffLayout from "layouts/Staff.js";
import UserLayout from "layouts/User.js";
import SuperStaffLayout from "layouts/SuperStaff";
// import AuthLayout from "layouts/Auth.js";

// -------------------import Home pages---------------------//
import Landing from "views/examples/Homepage/Landing.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/manager" render={(props) => <ManagerLayout {...props} />} />
      <Route path="/staff" render={(props) => <StaffLayout {...props} />} />
      <Route
        path="/superstaff"
        render={(props) => <SuperStaffLayout {...props} />}
      />
      <Route path="/user" render={(props) => <UserLayout {...props} />} />
      {/* <Route path="/auth" render={(props) => <AuthLayout {...props} />} /> */}
      {/* -------------Home page Main service-------------- */}
      <Route path="/" exact render={(props) => <Landing {...props} />} />
      <Route
        path="/landing-page"
        exact
        render={(props) => <Landing {...props} />}
      />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
