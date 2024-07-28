import axios from "axios";
import { useEffect, useState } from "react";

export function FetchUserInfo(username) {
  const BASE_URL = "/api/user/get";
  const [userData, setUserData] = useState({
    userInfo: undefined,
    serverError: null,
    isLoading: false,
  });

  useEffect(() => {
    const fetData = async () => {
      setUserData((prev) => ({ ...prev, isLoading: true }));
      try {
        const { data, status } = await axios.get(`${BASE_URL}/${username}`);
        if (status === 200) {
          setUserData((prev) => ({ ...prev, userInfo: data }));
          setUserData((prev) => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        setUserData((prev) => ({ ...prev, serverError: error }));
        setUserData((prev) => ({ ...prev, isLoading: false }));
      }
    };
    fetData();
  }, [username]);
  return [userData, setUserData];
}
