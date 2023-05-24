import { useHttp } from "../hooks/http.hook";

const useRequestService = () => {
  const { request } = useHttp();

  const loginUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHBASE}/login`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const registerUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHBASE}/users`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const findUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHBASE}/find`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const createProduct = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHTEMPLATE}/products`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const getProducts = async () => {
    const response = await request(
      `${process.env.REACT_APP_FETCHTEMPLATE}/products`
    );
    return response;
  };

  const createOrder = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHTEMPLATE}/orders`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  const removeOrder = async (id) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHTEMPLATE}/orders/${id}`,
      "DELETE"
    );
    return response;
  };

  return {
    loginUser,
    registerUser,
    findUser,
    createProduct,
    getProducts,
    createOrder,
    removeOrder,
  };
};

export default useRequestService;
