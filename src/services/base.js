import axios from "axios";

// sau chu them cai token vo day lay tu state, import state auth ow tren roi goi getter ra
export default () =>
  axios.create({
    baseURL: process.env.VUE_APP_API,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer",
    },
  });
