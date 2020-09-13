import Index from "views/examples/Manager_view/Index";
import Profile from "components/Manager/Profile";

import Assignjob from "components/Manager/Assignjob";
import Changepassword from "components/Manager/Changepassword";
import History from "components/Manager/History";
import Editprofile from "components/Manager/Editprofile";
import Listitem from "components/Manager/Listitem"
import Contacts from "components/Manager/Contacts";
//import Button from "components/Manager/Button";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/manager",
  },
  {
    path: "/Profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/manager",
  },
  {
    path: "/Changepassword",
    name: "Changepassword",
    icon: "ni ni-basket ext-blue",
    component: Changepassword,
    layout: "/manager",
  },

  {
    path: "/Assignjob",
    name: "Assignjob",
    icon: "ni ni-send text-blue",
    component: Assignjob,
    layout: "/manager",
  },
  {
    path: "/Listitem",
    name: "Listitem",
    icon: "ni ni-world text-indigo",
    component: Listitem,
    layout: "/manager",
  },

  {
    path: "/History",
    name: "History",
    icon: "ni ni-collection text-pink",
    component: History,
    layout: "/manager",
  },
  {
    path: "/Contacts",
    name: "Contacts",
    icon: "ni ni-world text-indigo",
    component: Contacts,
    layout: "/manager",
  },
  
];
export default routes;
