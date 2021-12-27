import request from '../utils/request'

export function getUsersMatches() {
  return request({
    url: 'http://localhost:9030/user/matches',
    method: 'get'
  })
}

export function getUsersLiked() {
  return request({
    url: 'http://localhost:9030/user/liked',
    method: 'get'
  })
}