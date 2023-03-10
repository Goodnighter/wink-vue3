import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

service.interceptors.request.use(
    (config: AxiosRequestConfig): any => {
      console.log(config);
      
      return config;
    },
    (error: any) => {
      Promise.reject(error)
    }
  );

service.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    console.log(response);
  },
  (error: any) => {
    return Promise.reject(error);
  }
  )

export default service;
