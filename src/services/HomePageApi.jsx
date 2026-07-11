import axios from "axios";
import Constants from "../contants";

export async function HomePageApi() {
    try {
        const res = await axios.get(`${Constants.urls.baseUrlV2}${Constants.endPoints.categoryData}`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}