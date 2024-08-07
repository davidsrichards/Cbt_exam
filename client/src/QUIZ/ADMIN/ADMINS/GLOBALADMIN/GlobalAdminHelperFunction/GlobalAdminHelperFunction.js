// admin post

import axios from "axios";

export async function AdminPost(url, credentials) {
  try {
    const { data } = await axios.post(url, credentials);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}
