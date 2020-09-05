import axios from "axios";

const instance = axios.create({
  baseURL: `${
    process.env.REACT_APP_BUILD_MOD === "prod"
      ? ""
      : process.env.REACT_APP_BASE_URL
  }/api/v1`
  // baseURL: `/api/v1`,
});
export default instance;
