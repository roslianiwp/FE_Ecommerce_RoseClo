import axios from "axios";
import { bindActionCreators } from "redux";

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
    } else {
      id = 1;
    }
    let input;
    if (promo === "true") {
      input = true;
    } else {
      input = false;
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
    await axios
      .post("http://0.0.0.0:5050/items", myJSON, {
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
  };
};

export const getProduk = (props) => {
  return async (dispatch) => {
    await axios
      .get("http://0.0.0.0:5050/items", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_PRODUCT", payload: response.data });
        // console.warn("cek dari fungsi getProduk", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getRes = (category) => {
  return async (dispatch) => {
    const response = await axios.get("http://0.0.0.0:5050/items");
    console.warn("cek dari getRes action", category);
    if (category !== null) {
      const filtercategory = response.data.filter((item) => {
        if (item.product_category_id == category) {
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
