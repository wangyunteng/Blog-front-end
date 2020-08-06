import axios from './request.js'

export function login (data) {
  return axios({
    method: 'post',
    url: '/login',
    data: data
  })
}

export function register (data) {
  return axios({
    method: 'post',
    url: '/register',
    data: data
  })
}
