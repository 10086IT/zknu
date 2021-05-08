import { message } from 'antd'
import axios from 'axios'
axios.defaults.timeout = 50000
axios.defaults.withCredentials = true
const request = (method = 'get') => ({
    url,
    data
}) => {
    let iden = localStorage.getItem('iden')
    if (!iden) {
        message.info('请重新登录')
        setTimeout(function () {
            window.location.href = "http://localhost:3000"
        }, 1000)
        return
    }
    return axios({
        url,
        data,
        method,
        withCredentials: true,
        headers: {
            token: localStorage.getItem('token')
        }

    }).then((res) => {

        let { status: resStatus, data: resData = {} } = res
        if (resStatus === 200) {
            let { status } = resData
            if (status === -100) {
                throw (resData)
            }
            if (status === -99) {
                throw (resData)
            }
            else {
                return resData
            }
        }
    }
    ).catch((e) => {
        throw (e)
    })
}
export const post = request('post')
export const get = request('get')