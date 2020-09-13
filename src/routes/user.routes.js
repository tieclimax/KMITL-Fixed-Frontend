import Index from "views/examples/User_view/Index";
import Profile from "components/User/Profile";

import History from "components/User/History";
import Changepassword from "components/User/Changepassword"
import Service from "components/User/Service";
// import State from "components/User/State";
// import State2 from "components/User/State2";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/user",
  },

  {
    path: "/Profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/user",
  },
  {
    path: "/Changepassword",
    name: "Changepassword",
    icon: "ni ni-single-02 text-yellow",
    component: Changepassword,
    layout: "/admin",
  },
  {
    path: "/Service",
    name: "Service",
    icon: "ni ni-basket ext-blue",
    component: Service,
    layout: "/user",
  },
 
  {
    path: "/History",
    name: "History",
    icon: "ni ni-collection text-pink",
    component: History,
    layout: "/user",
  },
  

];
export default routes;
