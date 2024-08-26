import router from "@/router";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { singleton } from "tsyringe";

@singleton()
export class HttpService {
    private readonly _baseUrl: string
    constructor() {
        this._baseUrl = import.meta.env.VITE_APP_BASE_URL || ''
        this.setupResponseInterceptor()
    }
    setupResponseInterceptor() {
        axios.interceptors.response.use(
            (respone) => { return respone },
            (error: AxiosError) => {
                if (error.response?.status === 401) {
                    router.push({ name: 'login.index' }).catch(() => { })
                }
                return Promise.reject(error)
            }
        )
    }
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        
        return axios.get<T>(`${this._baseUrl}${url}`, this.addHeaders(config))
    }

    public async post<T, D>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig
    ): Promise<AxiosResponse<T>> {
      return axios.post<T, AxiosResponse<T>, D>(
        `${this._baseUrl}${url}`,
        data,
        this.addHeaders(config, data)
      )
    }

    private addHeaders (config?: AxiosRequestConfig, data?: any): AxiosRequestConfig {
      
      const tokenString = localStorage.getItem('token')
      console.log('add: ', );
      const token = tokenString ? JSON.parse(tokenString): null
        if(!config) {
            config = {}
        }
        if (!config.headers) {
            config.headers = {}
          }
      
          // Set the 'Authorization' header with the token value
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
          }
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
          }
          if (data && typeof data === 'object' && !(data instanceof FormData)) {
            config.headers['Content-Type'] = 'application/json'
          } else {
            // For FormData or other cases, set 'multipart/form-data'
            config.headers['Content-Type'] = 'multipart/form-data'
          }
      
          return config
    }
}