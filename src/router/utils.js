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
  // if (iden !== 'teacher') {
  //   window.location.replace('/')
  //   return
  // }
  // if (!iden || !token) {
  //   localStorage.removeItem('token')
  //   localStorage.removeItem('iden')
  //   window.location.replace('/')
  //   return
  // }
}