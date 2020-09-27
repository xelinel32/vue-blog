import axios from 'axios'
import Vue from 'vue'

const http = axios.create({
  url: '/posts',
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  responseType: 'json',
  responseEncoding: 'utf8',
  headers: { 'content-type': 'application/json' },
})

const token = localStorage.getItem('user-token')
if (token) {
  http.defaults.headers.common['Authorization'] = token
}

Vue.prototype.$http = http

export default http
