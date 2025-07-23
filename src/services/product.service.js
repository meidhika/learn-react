import axios from "axios";

const API_BASE_URL = "https://be-devarsip.vercel.app/api";
export const getProducts = (callback) => {
  axios
    .get(`${API_BASE_URL}/products`)
    .then((res) => {
      callback(res.data.slice(0, 3));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
