const initialState = {
  dataCart: [],
  countCart: 0,
  statusError: true,
  product_id: 0,
  qty: 0,
};

export default function transReducer(transState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_TRANSDETAIL":
      return {
        ...transState,
        dataCart: action.payload,
        deleted: false,
        qtyUpdated: false,
      };
    case "SUCCESS_POST_TRANS":
      return {
        ...transState,
        statusError: false,
      };
    case "SUCCESS_DELETE_TRANS":
      return {
        ...transState,
        statusError: false,
        deleted: true,
      };
    case "SUCCESS_GET_UPDATECART":
      return {
        ...transState,
        qtyUpdated: true,
      };
    case "SUCCESS_CEKOUT":
      return {
        ...transState,
      };
    case "SUCCESS_GET_ALLTRANS":
      return {
        ...transState,
        dataCart: action.payload,
      };
    default:
      return transState;
  }
}
