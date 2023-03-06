import axios from 'axios'
import {message, notification} from "antd"

export const SERVER_URL = process.env.NODE_ENV === 'production' ? '' : `http://localhost:5000`;

const authedRequest = axios.create()
authedRequest.interceptors.request.use(function (config) {
  // config.url = SERVER_URL + config.url
  config.withCredentials = true;
  return config
}, function (err) {
  return Promise.reject(err)
})

authedRequest.interceptors.response.use(function (response) {
  return response
}, function (err) {
  notification.error({
    message: err.response.data
  })
  return Promise.reject(err)
})

export {
  authedRequest
}
