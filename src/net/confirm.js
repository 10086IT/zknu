import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true
const request = (method = 'get') => ({
    url,
    data
}) => {
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
            const { code, msg } = resData
            if (code == -100) {
                throw (resData)
                window.location.href = "http://localhost:3000/login"
                return
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