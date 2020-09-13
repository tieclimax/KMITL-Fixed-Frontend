import Assignjob from "components/SuperStaff/Assignjob"
import History from "components/SuperStaff/History"
import Report from "components/SuperStaff/Report"
import Index from "views/examples/SuperStaff/index"
import Listitem from "components/SuperStaff/Listitem";
import Profile from "components/SuperStaff/Profile"
import Contacts from "components/Admin/Contacts";
import Changepassword from "components/SuperStaff/Changepassword"
var routes = [
     {
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-chart-bar-32 text-orange",
        component: Index,
        layout: "/superstaff",
      },
      {
        path: "/Profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/superstaff",
      },
      {
        path: "/Changepassword",
        name: "Changepassword",
        icon: "ni ni-single-02 text-yellow",
        component: Changepassword,
        layout: "/superstaff",
      },

    {
        path: "/Assignjob",
        name: "Assign Job",
        icon: "ni ni-send text-blue",
        component: Assignjob,
        layout: "/superstaff",
      },
      {
        path: "/Listitem",
        name: "Listitem",
        icon: "ni ni-active-40 text-red",
        component: Listitem,
        layout: "/superstaff",
      },
      {
        path: "/History",
        name: "History",
        icon: "ni ni-collection text-pink",
        component: History,
        layout: "/superstaff",
      },
      {
        path: "/Contacts",
        name: "Contacts",
        icon: "ni ni-chart-bar-32 text-orange",
        component: Contacts,
        layout: "/superstaff",
      },
      {
        path: "/Report",
        name: "Report",
        icon: "fa fa-file text-green",
        component: Report,
        layout: "/superstaff",
      },
     
]

export default routes;