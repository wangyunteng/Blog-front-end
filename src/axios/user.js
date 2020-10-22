import axios from './request.js'

export function login (data) {
  return axios({
    method: 'post',
    url: '/users/login',
    data: data
  })
}

export function register (data) {
  return axios({
    method: 'post',
    url: '/users/register',
    data: data
  })
}
