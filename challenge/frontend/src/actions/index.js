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
      dispatch(getUser(data.token));
    })
    .catch(err => console.log(err.message));
};

export const getUser = token => async dispatch => {
  await axios({
    url: "http://localhost:3000/api/v0/users/me",
    method: "get",
    headers: {
      "x-access-token": token
    }
  })
    .then(({ data }) => {
      dispatch(loginRequest(data));
    })
    .catch(err => console.log(err));
};
