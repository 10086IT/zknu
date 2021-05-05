import { get, post } from './confirm.js'
const tp = 'http://127.0.0.1:7001'
export const login = ({ account, pwd, iden }) => get({
  // url: `${tp}/api/user/posts?`,
  url: 'http://127.0.0.1:7001?',
  data: {
    account,
    pwd,
    iden
  }
})
