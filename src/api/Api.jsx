import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://652628ba67cfb1e59ce7f1b6.mockapi.io/api/v1/product"
  );

  return products;
}
