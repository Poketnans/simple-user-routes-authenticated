import { SIGN_IN } from "./actionTypes";

const token = JSON.parse(localStorage.getItem("token")) || "";

const initialValue = {
  token,
  userData: {}
};

const userReducer = (state = initialValue, { type, token }) => {
  switch (type) {
    case SIGN_IN:
      return { ...state, token };

    default:
      return state;
  }
};

export default userReducer;
