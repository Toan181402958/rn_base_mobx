import R from "@src/assets/R";
import { BASE_URL } from "@src/utils/config/setting"
import axios, { Axios } from "axios"
import { Alert } from "react-native";
 interface ResponseType<T> {
    result_code: number
    result_error: any
    status: number
    code: number
    message: string
    data: any
  }
const createAPI = () => {
    const AxiosClient = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        timeout: 60000,
    });
    AxiosClient.interceptors.request.use(config => {
      //add token from local storage
      const token = '';
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })
    AxiosClient.interceptors.response.use(response => {
        const data = response.data;
        //check type code, status response
        return response
    }, err => {
        //check error response
        console.log("🚀 ~ createAPI ~ err:", err)
        return err
    });
    return AxiosClient;
}

const axiosClient = createAPI();
function handleResult<T>(api: any) {
    return api.then((res: any) => {
      return handleResponse<T>(res.data)
    })
  }
  
  function handleResponse<T>(data: ResponseType<T>) {
    // if (data.status !== 1)
    //   return Promise.reject(new Error(data?.message || 'Co loi xay ra'))
    return Promise.resolve(data)
  }

  export const ApiClient = {
    get: (url: string, payload?: any) =>
      handleResult(axiosClient.get(url, payload)),
    post: (url: string, payload?: any, options?: any) =>
      handleResult(axiosClient.post(url, payload, options)),
    put: (url: string, payload?: any) =>
      handleResult(axiosClient.put(url, payload)),
    path: (url: string, payload?: any) =>
      handleResult(axiosClient.patch(url, payload)),
    delete: (url: string, payload?: any) =>
      handleResult(axiosClient.delete(url, payload)),
  }
  