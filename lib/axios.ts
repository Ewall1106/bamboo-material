import axios, { AxiosInstance } from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      return Promise.reject(res)
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
