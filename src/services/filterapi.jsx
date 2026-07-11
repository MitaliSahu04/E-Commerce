import axios from "axios";
import Constants from "../contants";

export async function SearchProduct(title) {
  try {
    const res = await axios.get(
      `${Constants.urls.baseUrlV2}${Constants.endPoints.filterApi}?title=${title}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function PriceRange(min, max) {
  try {
    const res = await axios.get(
      `${Constants.urls.baseUrlV2}${Constants.endPoints.filterApi}?price_min=${min}&price_max=${max}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function CategorySlug(category_id) {
  try {
    const res = await axios.get(
      `${Constants.urls.baseUrlV2}${Constants.endPoints.filterApi}?categoryId =${category_id}`,
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function Combination(title, min, max, category_id) {
  try {
    const res = await axios.get(
      `${Constants.urls.baseUrlV2}${Constants.endPoints.filterApi}?title=${title}&price_min=${min}&price_max=${max}&categoryId=${category_id}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function CategoryListNameData() {
  try {
    const res = await axios.get( `${Constants.urls.baseUrlV2}${Constants.endPoints.categoryData}`,
    );

    return res;
  } catch (error) {
    console.log(error);
  }
}