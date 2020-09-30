import Base from './base.js';

class Index extends Base {
  constructor () {
    super()
  }
  login (params) {
    return this.Http.get('/login', {
      params
    })
  }

  blogList (params) {
    return this.Http.get('/blog_list', {
      params
    })
  }

  blogListDetail (params) {
    return this.Http.get('/blog_list_detail', {
      params
    })
  }

  blog_upload (params) {
    return this.Http.post('/blog_list_update', 
      params
    )
  }

  blog_delete (params) {
    return this.Http.delete('/article_delete', 
      {params}
    )
  }

  blogAdd (params) {
    return this.Http.put('/article_create', 
      params
    )
  }

  img_upload (params) {
    return this.Http.post('/upload/img', 
      params
    )
  }

  img_upload1 (params) {
    return this.Http.post('/upload1/img1',
      params
    )
  }
}

export default new Index();