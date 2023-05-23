import { useHttp } from "../hooks/http.hook";

const useRequestService = () => {
  const { request } = useHttp();

  const findUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHBASE}/find`,
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

  const loginUser = async (data) => {
    const response = await request(
      `${process.env.REACT_APP_FETCHBASE}/login`,
      "POST",
      JSON.stringify(data)
    );
    return response;
  };

  return {
    findUser,
    registerUser,
    loginUser,
  };
};

export default useRequestService;
