import axios from "axios";


export const AccessTokenRequest = async (token:string) => {
  const data = await axios.get("https://localhost:8001/accesstokenrequest", {
    headers: {
      Authorization: `bearer ${token}`,
    },
    withCredentials: true,
  });
  return data;
};
