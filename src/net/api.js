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

/*
头像
*/
export const uploadfile = ({ imgUrl }) => post({
  url: `${tp}/upload?`,
  data: {
    imgUrl
  }
})
/*
学生手机号
*/
export const modifyPhone = ({ phone }) => post({
  url: `${tp}/modifyPhone?`,
  data: {
    phone
  }
})
/*
学生兼职信息
*/
export const getJobsMsg = ({ count }) => post({
  url: `${tp}?`,
  data: {
    count
  }
})
export const searchJobs = ({ data }) => post({
  url: `${tp}/searchJobs?`,
  data: {
    data
  }
})
