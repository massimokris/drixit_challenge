import axios from "axios";

export const loginRequest = payload => ({
  type: "LOGIN_REQUEST",
  payload
});

export const loginUser = ({ email, password }) => async dispatch => {
  await axios({
    url: "http://localhost:3000/api/v0/authenticate",
    method: "POST",
    data: {
      email,
      password
    }
  })
    .then(async ({ data }) => {
      document.cookie = `token=${data.token}; Max-Age=7400`;
      dispatch(loginRequest(data));
    })
    .catch(err => console.log(err.message));
};
