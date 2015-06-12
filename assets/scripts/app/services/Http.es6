import xr from 'xr'

class Http {
  constructor() {
    this.baseUrl = '';
  }

  get(url, params, args) {
    let newUrl = this.constructUrl(url);
    return xr.get(newUrl, params, args);
  }

  post(url, data, args) {
    let newUrl = this.constructUrl(url);
    return xr.post(newUrl, data, args);
  }

  put(url, data, args) {
    let newUrl = this.constructUrl(url);
    return xr.put(newUrl, data, args);
  }

  delete(url, data, args) {
    let newUrl = this.constructUrl(url);
    return xr.del(newUrl, data, args);
  }

  constructUrl(url) {
    let baseUrl = url.charAt(0) == '/' ? this.baseUrl : '';
    return this.baseUrl + url;
  }
}

export default new Http();
