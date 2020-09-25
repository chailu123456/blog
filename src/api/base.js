import Server from './index.js'
const Http = new Server('http://81.68.105.76:8088');

Http.request({
  yes(config){
    console.log(config);
    // config.headers['Authorization'] = 'Bearer 123sddasdad324324234fdgdfgd'
    return config
  }
})

Http.response({
  yes(config){
    console.log(config);
    return config.data
  }
})

class Base {
  constructor() {
    this.Http = Http
  }

}
export default Base;