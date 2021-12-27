import request from '../utils/request'
const API_USER = process.env.NEXT_PUBLIC_API_USER
export function getUser(user_uuid) {
  return request({
    url: `${API_USER}/user/${user_uuid}`,
    method: 'get'
  })
}

export function getUsers() {
  return request({
    url: `${API_USER}/user`,
    method: 'get'
  })
}

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

export function userLike(data) {
  return request({
    url: `${API_USER}/user/like`,
    method: 'post',
    data
  })
}

export function userPass(data) {
  return request({
    url: `${API_USER}/user/pass`,
    method: 'post',
    data
  })
}