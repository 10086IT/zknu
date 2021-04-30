import { get, post } from './confirm.js'
const tp = 'http://127.0.0.1:7001'
export const login = ({ account, pwd, iden }) => post({
  url: `${tp}/login?`,
  data: {
    account,
    pwd,
    iden
  }
})
