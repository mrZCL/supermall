import axios from 'axios'

export function request(config) {
  //  1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 20000
  })

  //2.axios拦截器,请求拦截
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
  })

  //2响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err =>{
    console.log(err)
  })

  //3发送真正的网络请求
  return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //  1.创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


// export function request(config,success,failure) {
// //  1.创建axios实例
//   const instance = axios.create({
//     baseURL: '',
//     timeout: 5000
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err)
//       failure(err)
//     })
// }
