import axios from "axios";

//
const BASE_URL = "/api/user";
export async function GlobalResultHelperFunction(credentials, url) {
  try {
    const { data } = await axios.post(`${BASE_URL}${url}`, credentials);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

// check total attempts

export const checkTotalAttempt = (result) => {
  return result.filter((res) => res !== undefined).length;
};

// tottal points

export const checkTotalOnpoint = (result, answer, point) => {
  const totalScore = result
    .map((element, i) => answer[i] === element)
    .filter((i) => i === true)
    .reduce((prev, curr) => prev + curr, 0);
  return totalScore * point;
};

// reset all actions
