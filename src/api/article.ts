import request from './instance'
export function getCommonAccount(data:any) {
  return request.post('/upms/user/info', data)
}