import axios from 'axios'

const service = axios.create({
  withCredentials: false,
  timeout: process.env.VUE_APP_IS_USE_FOR_AA ? 120 * 1000 : 60 * 1000,
})

service.interceptors.request.use(
  config => {
    config.headers['user_uuid'] = 'f7c9381f-28d6-4711-b1c7-da8da3c5d13f'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get information such as headers or status
   * Please return  response => response
   */
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service