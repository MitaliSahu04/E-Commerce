import axios from "axios";

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  console.log("Frontend Token:", token);

  return axios.get("http://localhost:3000/api/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};