const initialState = {
  username: "",
  email: "",
  password: "",
  status: "",
  token: "",
  is_login: false,
  namaPengguna: "",
  kataKunci: "",
  statusError: true,
  name: "",
  province: "",
  city: "",
  postal_code: "",
  city_type: "",
  street: "",
  phone: "",
  bio: [],
  client: [],
  paymentMethod: "",
  shippingMethod: "",
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        token: action.payload.token,
        status: action.payload.status,
        is_login: true,
      };
    case "SUCCESS_LOGOUT":
      return {
        ...userState,
        is_login: false,
      };
    case "SUCCESS_SIGNUP":
      return {
        ...userState,
        statusError: false,
      };
    case "SUCCESS_PROFILE":
      return {
        ...userState,
        statusError: false,
      };
    case "SUCCESS_EDIT_BIODATA":
      return {
        ...userState,
        statusError: false,
      };
    case "GET_BIO":
      return {
        ...userState,
        name: action.payload.name,
        email: action.payload.email,
        province: action.payload.province,
        city: action.payload.city,
        postal_code: action.payload.postal_code,
        city_type: action.payload.city_type,
        street: action.payload.street,
        phone: action.payload.phone,
        bio: action.payload,
      };
    case "SUCCESS_GET_CLIENT":
      return {
        ...userState,
        client: action.payload,
      };
    case "SUCCESS_DEL_CLIENT":
      return {
        ...userState,
      };
    case "SUCCESS_POST":
      return {
        ...userState,
      };
    default:
      return userState;
  }
}
