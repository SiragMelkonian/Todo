import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});
