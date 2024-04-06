import axios from "axios";

const BASE_URL = "http://localhost:3000";

async function getAllBooks() {
  try {
    const res = await axios.get(BASE_URL + "/books");
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data ?? err.message);
  }
}

export { getAllBooks };
