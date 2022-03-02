import axios from "axios";

// Step-1: Create a new Axios instance with a custom config.
const customAxios = axios.create({
  baseURL: ` https://atlas.mapmyindia.com/api`,
  timeout: 10000
});

// Step-2: Create request, response & error handlers
const requestHandler = async (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  request.headers.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;
  return request;
};

const errorHandler = (error) => {
  console.log(error);
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

export default customAxios;
