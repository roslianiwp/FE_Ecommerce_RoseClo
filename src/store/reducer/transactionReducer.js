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
      };
    default:
      return transState;
  }
}
