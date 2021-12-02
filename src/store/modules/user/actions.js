import { SIGN_IN } from "./actionTypes";

export const userLogin = (token) => ({
  type: SIGN_IN,
  token
});
