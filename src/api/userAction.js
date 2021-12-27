import request from '../utils/request'
const API_USER = process.env.NEXT_PUBLIC_API_USER

export function getUsersMatches() {
  return request({
    url: `${API_USER}/user/matches`,
    method: 'get'
  })
}

export function getUsersLiked() {
  return request({
    url: `${API_USER}/user/liked`,
    method: 'get'
  })
}