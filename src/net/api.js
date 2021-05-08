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
检查登录
*/

export const checkStudentLogin = () => {
  let iden = localStorage.getItem('iden')
  let token = localStorage.getItem('token')
  if (iden !== 'student') {
    window.location.replace('/')
    return
  }
  if (!iden || !token) {
    localStorage.removeItem('token')
    localStorage.removeItem('iden')
    window.location.replace('/')
    return
  }
}
export const checkAdminLogin = () => {
  let iden = localStorage.getItem('iden')
  let token = localStorage.getItem('token')
  if (iden !== 'admin') {
    window.location.replace('/')
    return
  }
  if (!iden || !token) {
    localStorage.removeItem('token')
    localStorage.removeItem('iden')
    window.location.replace('/')
    return
  }
}
export const checkTeacherLogin = () => {
  let iden = localStorage.getItem('iden')
  let token = localStorage.getItem('token')
  if (iden !== 'teacher') {
    window.location.replace('/')
    return
  }
  if (!iden || !token) {
    localStorage.removeItem('token')
    localStorage.removeItem('iden')
    window.location.replace('/')
    return
  }
}
export const uploadfile = ({ imgUrl }) => post({
  url: `${tp}/upload?`,
  data: {
    imgUrl
  }
})
export const modifyPhone = ({ phone }) => post({
  url: `${tp}/modifyPhone?`,
  data: {
    phone
  }
})