import fetch from 'dva/fetch';
import { message } from 'antd';
import { getToken } from './util';
import { browserHistory, hashHistory } from 'dva/router';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, call = () => { }, err = () => { }) {
  options.method = options.method || 'POST';
  let urls;
  if (url.indexOf('.') > 0) {
    urls = url;
  } else {
    urls = (options.domain ? getToken(options.domain) : 'http://192.168.1.162:8802/') + url;
  }
  if (options.method == 'POST') {
    options.body = {
      data: options.body || {},
      token: getToken('token'),
      platformSystemNum: "",
      operationName: "",
      serviceName: "",
      methodName: "",
      platformFrom: "",
    }
    options.body = JSON.stringify(options.body);
  }
  options.headers = {
    'Content-Type': 'application/json'
  };
  return fetch(urls, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      //console.log(data, "data返回值")
      if (data.code === 20000) {
      } else {
        // if (data.code === 49090) {
        //   setTimeout(() => {
        //     hashHistory.push('/login');
        //   }, 1000);
        // }
        data.error && message.error(data.error.errorMsg);
      }
      return data;
    })
    .catch(err => ({ err }));
}

