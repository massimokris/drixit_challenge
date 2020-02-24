import axios from "axios";
import swal from "sweetalert";

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
      window.location = "/user-info";
    })
    .catch(async err => {
      alert("The email address or password is incorrect. Please retry...");
      console.log(err.message);
    });
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
      localStorage.setItem("avatar", data.avatar);
      localStorage.setItem("name", data.name);
      localStorage.setItem("surname", data.surname);
      localStorage.setItem("email", data.email);
      localStorage.setItem("age", data.age);
      localStorage.setItem("role", data.role);
      dispatch(loginRequest(data));
    })
    .catch(async err => {
      alert("Error during the authentication");
      console.log(err);
      window.location = "/login";
    });
};
