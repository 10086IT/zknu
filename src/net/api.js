import { get, post } from './confirm.js'
const tp = 'http://127.0.0.1:7001'

/*
登录
*/
export const login = ({ account, pwd, iden }) => post({
  url: `${tp}/slogin?`,
  data: {
    account,
    pwd,
    iden
  }
})
/*
学生个人信息
*/
export const ownerMsg = ({ }) => post({
  url: `${tp}/user?`,
})
