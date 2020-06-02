import axios from "axios";

export const changeInputProduct = (e) => {
  return {
    type: "CHANGE_INPUT_PRODUCT",
    payload: e,
  };
};

export const inputProdukSeller = (props) => {
  return async (dispatch, getState) => {
    const category = getState().product.kategori;
    const promo = getState().product.promo;
    let id;
    if (category === "sepatu") {
      id = 4;
    } else if (category === "kemeja") {
      id = 2;
    } else if (category === "celana") {
      id = 1;
    } else {
      id = 0;
    }
    let input;
    if (promo === "true") {
      input = true;
    } else if (promo === "false") {
      input = false;
    } else {
      input = "";
    }
    const bodyRequest = {
      name: getState().product.namaProduk,
      price: getState().product.harga,
      color: getState().product.warna,
      weight: getState().product.beratProduk,
      size: getState().product.ukuran,
      stock: getState().product.stock,
      promo: input,
      discount: getState().product.diskon,
      image: getState().product.image,
      product_category_id: id,
    };
    const myJSON = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    const product_id = localStorage.getItem("product_id");
    if (product_id === null || product_id === undefined || product_id === "") {
      await axios
        .post("https://clothingbe.roslianistory.my.id/items", myJSON, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          dispatch({ type: "SUCCESS_INPUT_PRODUCT" });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      await axios
        .patch(
          "https://clothingbe.roslianistory.my.id/items/" + product_id,
          myJSON,
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json; charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(async (response) => {
          dispatch({ type: "SUCCESS_UPDATE_PRODUCT" });
          localStorage.removeItem("product_id");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
};

export const getProduk = (props) => {
  return async (dispatch) => {
    await axios
      .get("https://clothingbe.roslianistory.my.id/items", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_PRODUCT", payload: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getRes = (category) => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://clothingbe.roslianistory.my.id/items"
    );
    if (category !== null) {
      const filtercategory = response.data.filter((item) => {
        if (+item.product_category_id === +category) {
          return item;
        } else {
          return false;
        }
      });
      dispatch({
        type: "REQUEST_LIST_SUCCESS",
        payload: filtercategory,
      });
    }
  };
};

export const getDetail = (category) => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://clothingbe.roslianistory.my.id/items/" + category
    );
    dispatch({
      type: "REQUEST_LIST_DETAIL_SUCCESS",
      payload: response.data,
    });
  };
};

export const getProdukSeller = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    await axios
      .get("https://clothingbe.roslianistory.my.id/items/seller", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "REQUEST_LIST_SUCCESS_SELLER",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteProdukSeller = (e) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    await axios
      .delete("https://clothingbe.roslianistory.my.id/items/" + e, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "DELETED_SUCCESS_SELLER",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// export const patchProdukSeller = (e) => {
//   const token = localStorage.getItem("token");

//   return async (dispatch, getState) => {
//     const category = getState().product.kategori;
//     const promo = getState().product.promo;
//     let id;
//     if (category === "sepatu") {
//       id = 4;
//     } else if (category === "kemeja") {
//       id = 2;
//     } else if (category === "celana") {
//       id = 1;
//     } else {
//       id = 0;
//     }
//     let input;
//     if (promo === "true") {
//       input = true;
//     } else if (promo === "false") {
//       input = false;
//     } else {
//       input = "";
//     }
//     const bodyRequest = {
//       name: getState().product.namaProduk,
//       price: getState().product.harga,
//       color: getState().product.warna,
//       weight: getState().product.beratProduk,
//       size: getState().product.ukuran,
//       stock: getState().product.stock,
//       promo: input,
//       discount: getState().product.diskon,
//       image: getState().product.image,
//       product_category_id: id,
//     };
//     const myJSON = JSON.stringify(bodyRequest);

//     await axios
//       .patch("https://clothingbe.roslianistory.my.id/items/" + e, myJSON, {
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//           Accept: "application/json; charset=utf-8",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(async (response) => {
//         dispatch({
//           type: "DELETED_SUCCESS_SELLER",
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
// };
