import axios from "axios";

export const getTransDetail = (props) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/transaction", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_TRANSDETAIL", payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const updateQtyPlus = (e) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      product_id: e,
      qty: 1,
      shipping_id: 1,
      payment_method_id: 1,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/transaction", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_UPDATECART", payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const updateQtyMinus = (e) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      product_id: e,
      qty: -1,
      shipping_id: 1,
      payment_method_id: 1,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/transaction", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_UPDATECART", payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const postTrans = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      product_id: item,
      qty: 1,
      shipping_id: 1,
      payment_method_id: 1,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/transaction", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST_TRANS" });
      })
      .catch(function (error) {
        alert("anda belum mengisi data diri!");
      });
  };
};

export const deleteTrans = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:5050/transaction/" + item, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_DELETE_TRANS" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const checkOut = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      status: false,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/transaction/checkout", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_CEKOUT" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getHistoryTrans = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const status = localStorage.getItem("status");
    if (status === "seller") {
      await axios
        .get("http://0.0.0.0:5050/transaction/checkout", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_ALLTRANS", payload: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      await axios
        .get("http://0.0.0.0:5050/transaction/historybuyer", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_GET_ALLTRANS", payload: response.data });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
};
