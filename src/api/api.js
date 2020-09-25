import Base from './base.js';

class Index extends Base {
  constructor () {
    super()
  }
  login (params) {
    console.log(params);
    return this.Http.get('/login', {
      params
    })
  }
}

export default new Index();