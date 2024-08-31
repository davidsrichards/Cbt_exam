import { useEffect, useState } from "react";
import { getUser } from "../../Helper/ServerHelper";

function GetUserFromDataBase(username) {
  const [user, setUser] = useState({
    userData: [],
    serverError: null,
  });

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const data = await getUser(username);
        if (data) {
          setUser((prev) => ({ ...prev, userData: data }));
          setUser((prev) => ({ ...prev, serverError: null }));
        }
      } catch (error) {
        setUser((prev) => ({ ...prev, serverError: error }));
      }
    };
    getAllUsers();
  }, []);
  return [user];
}

export default GetUserFromDataBase;
