import request from '../utils/request'

export function getUsers() {
  return request({
    url: 'http://localhost:9030/user',
    method: 'get'
  })
}

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

export function userLike(data) {
  return request({
    url: 'http://localhost:9030/user/like',
    method: 'post',
    data
  })
}

export function userPass(data) {
  return request({
    url: 'http://localhost:9030/user/pass',
    method: 'post',
    data
  })
}