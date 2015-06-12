import io from 'lib/io/sails'

class Socket {
  constructor() {
    this.io = new io('localhost:1337')
  }

  delete(url, options = {}) {
    return this.request('delete', url, {}, options)
  }

  get (url, query = '', options = {}) {
    let newUrl = Socket.addQueryToUrl(url, query)
    return this.request('get', newUrl, {}, options)
  }

  post(url, data = {}, options = {}) {
    return this.request('post', url, data, options)
  }

  put(url, data = {}, options = {}) {
    return this.request('put', url, data, options)
  }

  request(method, url, data, options) {
    options = Object.assign({
      'method': method,
      'url': url,
      'params': data
    }, options);
    return this._request(options)
      // .catch((res) => {
      //   console.error(res.jwr.error)
      //   return res
      // });
  }

  _request(options) {
    return new Promise((resolve, reject) => {
      this.io.socket.request(options, (data, jwr) => {
        if (jwr.error) {
          return reject({ data, jwr })
        }
        return resolve({ data, jwr })
      });
    });

  }

  static addQueryToUrl(url, query) {
    if (query) {
      let queryPresent = url.split('?').length > 1
      if (typeof query == 'object') {
        for (let param in query) {
          let value = encodeURIComponent(JSON.stringify(query[param]))
          let seperator = queryPresent ? '&' : '?'
          url += seperator + param + '=' + value
          queryPresent = true
        }
      } else {
        let seperator = queryPresent ? '&' : '?'
        url += seperator + 'q=' + query
      }
    }
    return url
  }

}

export default new Socket()
