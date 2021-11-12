import axios from "axios";

const instance = axios.create({
  baseURL: "https://618dc659fe09aa0017440895.mockapi.io/"
});
export default instance;
