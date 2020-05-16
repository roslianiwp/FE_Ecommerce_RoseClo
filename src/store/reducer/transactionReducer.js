const initialState = {
  dataCart: [],
  countCart: 0,
  statusError: true,
};

export default function transReducer(transState = initialState, action) {
  switch (action.type) {
    case "SUCCESS_GET_TRANSDETAIL":
      return {
        ...transState,
        dataCart: action.payload,
      };
    default:
      return transState;
  }
}
