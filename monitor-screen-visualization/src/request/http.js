import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据

// 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//     axios.defaults.baseURL = 'http://53591h4z16.wicp.vip:80';} 
// else if (process.env.NODE_ENV == 'debug') {    
//     axios.defaults.baseURL = 'http://53591h4z16.wicp.vip:80';
// } 
// else if (process.env.NODE_ENV == 'production') {    
//     axios.defaults.baseURL = 'http://53591h4z16.wicp.vip:80';
// }

// 设置请求超时
axios.defaults.timeout = 10000;

// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.withCredentials = true // 若跨域请求需要带 cookie 身份识别

axios.defaults.crossDomain=true

// 请求拦截

// 响应拦截

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
        })    
    })
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
 export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    })
}