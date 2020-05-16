import axios from "axios";
// import { getDetail } from "./actionProduct";

export const getTransDetail = (props) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/transaction/td", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_TRANSDETAIL", payload: response.data });
        console.warn("cek dari dalem getTransDetail", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
