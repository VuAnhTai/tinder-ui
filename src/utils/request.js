import axios from 'axios'

const service = axios.create({
  withCredentials: false,
  timeout: process.env.VUE_APP_IS_USE_FOR_AA ? 120 * 1000 : 60 * 1000,
})

service.interceptors.request.use(
  config => {
    config.headers['user_uuid'] = '2c43be3d-800e-4b58-a5f8-a9ffca403844'
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