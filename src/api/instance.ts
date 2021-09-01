import axios from 'axios'
import {
    ElLoading,
    ElMessage
} from 'element-plus';
//创建axios的一个实例 
var instance = axios.create({
    // baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
    timeout: 6000, //设置超时
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})
let loading :any;
//正在请求的数量
let requestCount = 0
//显示loading
const showLoading = () => {
    if (requestCount === 0 && !loading) {
        loading = ElLoading.service({
            text: "Loading  ",
            background: 'rgba(0, 0, 0, 0.7)',
            spinner: 'el-icon-loading',
        })
    }
    requestCount++;
}
//隐藏loading
const hideLoading = () => {
    requestCount--
    if (requestCount == 0) {
        loading.close()
    }
}

//请求拦截器 
instance.interceptors.request.use((config) => {
    showLoading()
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    const token = window.localStorage.getItem('token');
    token && (config.headers.Authorization = token)
    //若请求方式为post，则将data参数转为JSON字符串
    if (config.method === 'POST') {
        config.data = JSON.stringify(config.data);
    }
    return config;
}, (error) =>
    // 对请求错误做些什么
    Promise.reject(error));

//响应拦截器
instance.interceptors.response.use((response) => {
    hideLoading()
    //响应成功
    return response.data;
}, (error) => {
  let err = {
    info:''
  }
    console.error(error)
    //响应错误
    if (error.response && error.response.status) {
        const status = error.response.status
        switch (status) {
          case 400:
            err.info = '请求无效'
            break
    
          case 401:
            err.info = '由于长时间未操作，登录已超时，请重新登录'
            break
    
          case 403:
            err.info = '拒绝访问'
            break
    
          case 404:
            err.info = `请求地址出错`
            break
    
          case 405:
            err.info = `未授权`
            break
    
          case 408:
            err.info = '请求超时'
            break
    
          case 500:
            err.info = '服务器内部错误'
            break
    
          case 501:
            err.info = '服务未实现'
            break
    
          case 502:
            err.info = '网关错误'
            break
    
          case 503:
            err.info = '服务不可用'
            break
    
          case 504:
            err.info = '网关超时'
            break
    
          case 505:
            err.info = 'HTTP版本不受支持'
            break
            default:
              err.info = '错误'
        }
        ElMessage.error(err.info);
        return Promise.reject(error);
    }
    return Promise.reject(error);
});



/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
 let http = {
   get:{},
   post:{}
 }
http.get = function(url:'string', params:null|object = null) {
  // const obj = { params, t: new Date().getTime().toString() }
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params: { ...params, t: new Date().getTime().toString() } })
      .then((res) => {
        resolve(res.data)
      })
      .catch((e) => {
        reject(e.data)
      })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

http.post = function(url:string, params:object) {
  return new Promise((resolve, reject) => {
    instance
      .post(
        url,
        { ...params },
   
      )
      .then((res) => {
        resolve(res.data)
      })
      .catch((e) => {
        reject(e.data)
      })
  })
}

export default http

