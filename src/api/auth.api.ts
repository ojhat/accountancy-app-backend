import axiosCreator from "axios";

const axios = axiosCreator.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});
//set axios configuration
axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  request.headers!["Authorization"] = `Bearer ${token}`;
  return request;
});
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    throw new Error(error);
  }
);

//TYPES

export class User {
  _id: string = "";
  email: string = "";
  name: string = "";
  isEmailVerified: boolean = false;
}

const API = {
  signUp: async (
    name: string,
    email: string,
    password: string
  ): Promise<{ user: User; token: string }> => {
    return await (
      await axios.post(`users/signup`, { name, email, password })
    ).data;
  },
  logIn: async (
    email: string,
    password: string
  ): Promise<{ user: User; token: string }> => {
    return await (
      await axios.post(`users/login`, { email, password })
    ).data;
  },
  getUserFromToken: async (token: string): Promise<User> => {
    return await (
      await axios.get(`users?token=${token}`)
    ).data;
  },
  sendVerificationEmail: async (_id: string): Promise<string> => {
    return await (
      await axios.post("users/verify", { _id })
    ).data.message;
  },
};

export default API;
