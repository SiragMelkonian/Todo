import axios, { Method } from "axios";
import { axiosInstance } from "./axios";

export const apiCall = async (
  path: string,
  method: Method,
  data?: any,
  headers?: any
) => {
  try {
    const response = await axiosInstance({ method, url: path, data, headers });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Handle the connection refused error specifically
      if (error.code === "ECONNREFUSED") {
        // Log the error or handle it as needed
        console.error("Server connection refused. Returning empty object.");
        return {}; // Return an empty object or any default value you choose
      }
      if (error.response) {
        // Handle errors that have a response from the server (status code is not 200 range)
        throw error.response.data;
      }
    }
    // For errors that are not axios errors or for any other unexpected errors
    console.error("An unexpected error occurred:", error);
    return {}; // Return an empty object or any default value you choose
  }
};
