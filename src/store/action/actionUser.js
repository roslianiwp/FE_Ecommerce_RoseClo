import axios from "axios";

export const doLogin = (props) => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: "http://0.0.0.0:5050/login",
      params: {
        username: getState().user.namaPengguna,
        password: getState().user.kataKunci,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
        }
      })
      .catch(async () => {
        await alert("Password atau Username anda salah. Coba lagi :) ");
      });
  };
};

export const doSignUpSeller = () => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
      status: "seller",
    };
    await axios
      .post("http://0.0.0.0:5050/client", bodyRequest)
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
export const doSignUpCustomer = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
      status: "customer",
    };
    const myJSON = JSON.stringify(bodyRequest)
    await axios
      .post("http://0.0.0.0:5050/client", myJSON, {headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json; charset=utf-8'
      }} )
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// export const doSignUpCustomer = () => {
//   return async (dispatch, getState) => {
//     await axios({
//       method: "POST",
//       url: "http://0.0.0.0:5050/client",
//       headers: { "Content-Type": "application/json" },
//       body: {
//         username: "aisyah",
//         password: "alta123",
//         status: "customer"
//       },
//     })
//       .then(async (response) => {
//         dispatch({ type: "SUCCESS_SIGNUP" });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };

export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const doSignOut = () => {
  return {
    type: "SUCCESS_LOGOUT",
  };
};
