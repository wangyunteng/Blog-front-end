import axios from './request.js'

export function markdown (data) {
  return axios({
    method: 'post',
    url: '/markdown',
    data: data
  })
}
