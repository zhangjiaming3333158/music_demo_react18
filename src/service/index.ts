import Request from './request'
import { BASE_URL, TIME_OUT } from './config'

const request = new Request({
  // baseURL: import.meta.env.VITE_APP_BASE_URL,
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  interceptors: {
    requestInterceptor: (config: any) => {
      // 携带token的拦截
      return config
    },
    requestInterceptorCatch: (err: any) => {
      return err
    },
    responseInterceptor: (res: any) => {
      return res
    },
    responseInterceptorCatch: (err: any) => {
      return err
    },
  },
})

export { Request, request }
export default request
