import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class DashboardRetrive {
  async getDataDashboard() {
    return await axios.get(API_URL + "CountDashboard").then((response) => {
      const getall_work = response.data[0];
      console.log(getall_work);
    });
  }
}
export default new DashboardRetrive();
