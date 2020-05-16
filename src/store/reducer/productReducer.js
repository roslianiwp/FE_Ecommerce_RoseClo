const initialState = {
  namaProduk: "",
  harga: 0,
  warna: "",
  beratProduk: 0,
  ukuran: "",
  stock: 0,
  promo: "",
  diskon: 0,
  image: "",
  kategori: "",
  data: [],
  dataDetail: [],
  countCart: 0,
  statusError: true,
};

export default function productReducer(productState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_PRODUCT":
      return {
        ...productState,
        [action.payload.target.name]: action.payload.target.value,
      };

    case "SUCCESS_INPUT_PRODUCT":
      return {
        ...productState,
        statusError: false,
      };
    case "SUCCESS_GET_PRODUCT":
      return {
        ...productState,
        data: action.payload,
        namaProduk: action.payload.name,
        harga: action.payload.price,
        warna: action.payload.color,
        beratProduk: action.payload.weight,
        ukuran: action.payload.size,
        stock: action.payload.stock,
        promo: action.payload.promo,
        diskon: action.payload.discount,
        image: action.payload.image,
        kategori: action.payload.product_category_id,
      };
    case "REQUEST_LIST_SUCCESS":
      return {
        ...productState,
        data: action.payload,
      };
    case "REQUEST_LIST_DETAIL_SUCCESS":
      return {
        ...productState,
        dataDetail: action.payload,
      };
    default:
      return productState;
  }
}
