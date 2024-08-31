import axios from "axios";

const BASE_URL = "/api/user";

export async function getUser({ username }) {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/get/${username}`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

// login

export async function UserLogin(credentials) {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/login`, credentials);
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

// GOOGLE LOGIN

export async function UserRegistration(credentials) {
  try {
    const { data, status } = await axios.post(`${BASE_URL}/new`, credentials);
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

// generate otp

export async function GenerateOTP({ username }, email) {
  // get user

  try {
    const { data, status } = await axios.get(`${BASE_URL}/generateOTP`, {
      params: { username },
    });

    if (status === 201) {
      try {
        axios.post(`${BASE_URL}/mail`, {
          name: username,
          email: email || "tayata9711@daypey.com",
          intro: "OTP",
          outro: data,
        });

        return Promise.resolve({ data, status });
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

// VERIFY OTP

export async function verifyOTP({ code }) {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/verifyOTP`, {
      params: { code },
    });

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

// RESET PASSWORD

export async function resetPassword(credentials) {
  try {
    const data = await axios.put(
      `${BASE_URL}/resetPassword`,

      credentials
    );

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

// update user

export async function updateuserInformation(username, credentials) {
  try {
    const { data, status } = await axios.put(
      `${BASE_URL}/update/${username}`,
      credentials
    );

    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}

// google login

export async function LoginWithGoogle() {
  try {
    const data = await axios.get(`${BASE_URL}/google/status`);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
}

// send mail

export async function sendMail(body) {
  try {
    const { data, status } = axios.post(`${BASE_URL}/mail`, body);
    console.log(data, status);
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject(error);
  }
}
