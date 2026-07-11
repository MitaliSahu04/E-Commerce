import axios from "axios";
import Constants from "../contants";

export async function LoginApi(payload) {
  try {
    const res = await axios.post(
      `${Constants.urls.baseUrlV1}${Constants.endPoints.userLogin}`,
      payload,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function RegisterApi(payload) {
  try {
    const res = await axios.post(
      `${Constants.urls.baseUrlV1}${Constants.endPoints.registeredUser}`,
      payload,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
