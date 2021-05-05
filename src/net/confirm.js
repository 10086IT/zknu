import axios from 'axios'
axios.defaults.timeout = 5000

const request = (method = 'get') => ({
    url,
    data
}) => {
    return axios({
        url,
        data,
        method,
    }).then((res) => {
        let { status: resStatus, data: resData = {} } = res
        if (resStatus === 200) {
            const { url } = resData

            if (url === 'http://localhost:3000/owner') {
                window.location.href = url
                throw (res)
            }
            return resData
        }
    }
    ).catch((e) => {
        console.log(e)
    })
}
export const post = request('post')
export const get = request('get')