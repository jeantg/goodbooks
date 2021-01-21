import axios, { AxiosInstance, AxiosResponse } from 'axios'
export class BaseService {
  client: AxiosInstance

  constructor (resourcePrefix?: string) {
    this.client = axios.create({
      timeout: 300000,
      baseURL: GOOGLE_API_BOOKS.toString().concat(resourcePrefix || '')
    })
  }

  get (url: string, config: any): Promise<AxiosResponse> {
    return this.client.get(url, config)
  }

  post (url: string, data: string, config: any): Promise<AxiosResponse> {
    return this.client.post(url, data, config)
  }

  put (url, data, config): Promise<AxiosResponse> {
    return this.client.put(url, data, config)
  }

  patch (url, data, config): Promise<AxiosResponse> {
    return this.client.patch(url, data, config)
  }

  delete (url, config): Promise<AxiosResponse> {
    return this.client.delete(url, config)
  }
}
