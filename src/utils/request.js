import axios from 'axios';

// Create axios instance
const instance = axios.create({
  timeout: 150000
});

// Request Interceptor
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // Request Error
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  response => {
    return response;
  }, 
  error => {
    return Promise.reject(error);
  }
);

export default instance;