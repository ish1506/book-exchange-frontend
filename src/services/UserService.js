import axios from "axios";

const BASE_URL = "http://localhost:3000";

async function register(username, password) {
  try {
    const res = await axios.post(BASE_URL + "/users", {
      username,
      password,
    });
    console.log(res);
    localStorage.setItem("userId", JSON.stringify(res.data));

    return res.data;
  } catch (err) {
    throw new Error(err.response?.data ?? err.message);
  }
}

async function login(username, password) {
  try {
    const res = await axios.post(BASE_URL + "/users/login", {
      username,
      password,
    });
    console.log(res);
    localStorage.setItem("userId", JSON.stringify(res.data));

    return res.data;
  } catch (err) {
    throw new Error(err.response?.data ?? err.message);
  }
}

export { register, login };
