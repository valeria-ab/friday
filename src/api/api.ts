import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:7542/2.0/",
  //baseURL: 'https://neko-back.herokuapp.com/2.0/',
});

export const authAPI = {
  // me() {
  //   return instance.get(`auth/me`);
  // },
  login(payload: loginDataType) {
    return instance.post(`auth/login`, payload);
  },
  // logout() {
  //   return instance.delete(`/auth/login`);
  // },
};

//types
type  loginDataType = {
  email: string
  password: string
  rememberMe: boolean
}

export  type  userType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number
  created: string
  updated: string
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean
  error?: string
}