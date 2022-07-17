import request from '@/utils/request'
// 登录接口
const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}
export default {
  login
}