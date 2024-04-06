import axios from "axios";

async function register(username, password) {
  try {
    const res = await axios.post("http://localhost:3000/users", {
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
    const res = await axios.post("http://localhost:3000/users/login", {
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
