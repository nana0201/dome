import axios from 'axios'
import qs from 'qs'

let ip = 'http://127.0.0.1:88'

//登录
export function log(acc, pwd) {
    return axios.post(ip + '/login.php', qs.stringify({ acc, pwd }))
}
//注册
export function register(acc, pwd) {
    return axios.post(ip + '/reg.php', qs.stringify({ acc, pwd }))
}
//获取验证码
export function valitecode() {
    return axios.get(ip + '/valitecode.php')
}

//房产列表
export function gethouselist() {
    return axios.get(ip + '/gethouselist.php')
}