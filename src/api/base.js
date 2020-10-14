import Server from './index.js'
const Http = new Server('http://81.68.105.76:8088');
// const Http = new Server('http://localhost:8088');

Http.request({
  yes(config){
    // config.headers['Authorization'] = 'Bearer 123sddasdad324324234fdgdfgd'
    return config
  }
})

Http.response({
  yes(config){
    return config.data
  }
})

class Base {
  constructor() {
    this.Http = Http
  }

}
export default Base;