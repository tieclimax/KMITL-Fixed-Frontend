import Index from "views/Index.js";
import Profile from "components/Admin/Profile";
import Listitem from "components/Manager/Listitem";
import Listitem2 from "components/Manager/Listitem2";
import Changepassword from "components/Admin/Changepassword";
import History from "components/Manager/History";
import Editprofile from "components/Admin/Editprofile";
import Components from "components/Admin/Components";
import Contacts from "components/Admin/Contacts";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-chart-bar-32 text-orange",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/Profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/Changepassword",
    name: "Changepassword",
    icon: "ni ni-single-02 text-yellow",
    component: Changepassword,
    layout: "/admin",
  },
  
  {
    path: "/Contacts",
    name: "Contacts",
    icon: "ni ni-world text-indigo",
    component: Contacts,
    layout: "/admin",
  },
];
export default routes;
