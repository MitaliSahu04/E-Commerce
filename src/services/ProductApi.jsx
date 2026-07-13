import axios from "axios";
import Constants from "../contants";

export async function ProductPageApi() {
   try {
        const res = await axios.get(`${Constants.urls.baseUrlV2}${Constants.endPoints.filterApi}`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}


export async function ProductByIdApi(productID) {
  try {
    const res = await axios.get(
      `${Constants.urls.baseUrlV2}${Constants.endPoints.filterApi}${productID}`
    );
    console.log(res)
    return res.data;
  } catch (error) {
    console.log(error);
  }
}