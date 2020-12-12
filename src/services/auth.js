import BaseService from "./baseService";
import API from "../config/rest";

const login = (username, password) => {
  return BaseService.post(API.LOGIN, { username, password });
};

const getAllProduk = () => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 10,
      offset: 0,
      search: "bango",
    },
  });
};

export default { login, getAllProduk };
