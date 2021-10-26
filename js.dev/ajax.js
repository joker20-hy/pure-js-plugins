import serialize from './serialize'
/**
 * Create XHR object for request
 * @param {String} method
 * @param {String} url
 * @param {Function} success
 * @param {Function} error
 */
function create (method, url, success, error) {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.responseType = 'json'
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) success(xhr.response)
    else error({status: xhr.status, statusText: xhr.statusText, data: xhr.response})
  }
  xhr.error = function () {
    error({status: xhr.status, statusText: xhr.statusText, data: xhr.response})
  }
  return xhr
}
/**
 * @author joker20
 * @description ajax module using Promise support GET, POST, PUT, DELETE
 */
export default {
  /**
   * Make GET request
   * @param {String} url
   */
  get (url, data = null) {
    url = data===null ? url : `${url}?${serialize.object(data)}`
    return new Promise(function (resolve, reject) {
      let xhr = create('GET', url, resolve, reject)
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send()
    })
  },
  /**
   * Make POST request
   * @param {String} url
   * @param {*} data
   * @param {String} type multipart | json
   */
  post (url, data = {}, type = 'json') {
    return new Promise(function (resolve, reject) {
      let xhr = create('POST', url, resolve, reject)
      switch (type) {
        case 'multipart':
          /** */
          break;
        case 'json':
          xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
          data = JSON.stringify(data)
          break;
      }
      xhr.send(data)
    })
  },
  /**
   * Make PUT request
   * @param {String} url
   * @param {*} data
   */
  put (url, data = {}) {
    return new Promise(function (resolve, reject) {
      let xhr = create('PUT', url, resolve, reject)
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(data))
    })
  },
  /**
   * Make DELETE request
   * @param {String} url
   * @param {*} data
   */
  delete (url, data = {}) {
    return new Promise(function (resolve, reject) {
      let xhr = create('DELETE', url, resolve, reject)
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(data))
    })
  },
  /**
   * Make ajax request
   * @param {String} url
   * @param {String} method
   * @param {*} data
   * @returns {Promise}
   */
  make ({url, method, data = {}, type = 'json'}) {
    return this[method.toLowerCase()](url, data, type)
  }
}
