import api from "../../../utils/api";
import { userLogin } from "./actions";

export const userLoginThunk = (userData) => (dispatch) => {
  api
    .post("ENDPOINT", userData)
    .then((resp) => {
      localStorage.setItem("key", JSON.stringify(resp.token));

      dispatch(userLogin(resp.token));
    })
    .catch((error) => console.log(error));
};
