import axios from 'axios';

class Server {
  constructor(BASE_API) {
    console.log(BASE_API);
    this.init(BASE_API);
    return this.instance;
  }

  init(BASE_API) {
    this.instance = this.create(BASE_API)
    this.instance.request = this.request.bind(this)
    this.instance.response = this.response.bind(this)
  }

  create(BASE_API) {
    this.instance = axios.create({
      baseURL: BASE_API,
    });
    return this.instance
  }

  // 添加请求拦截器
  request({yes}) {
    this.instance.interceptors.request.use(config => {
      // config.headers['Authorization'] = 'Bearer 123'
      yes(config);
      
      return config
    },  error=>{
      // 对请求错误做些什么
      console.log(error);
    })
  }

  // 添加响应拦截器
  response({yes}) {
    this.instance.interceptors.response.use(res => {
      // 对响应数据做点啥
      console.log(res);
      return yes(res);
    }, err => {
      // 对请求错误做些什么
      console.log(err);
    })
  }
}



export default Server