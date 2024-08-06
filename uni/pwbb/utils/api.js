import { service_url } from './config'

export function rq(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: service_url + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      header: options.header || {},
      success: (res) => {
        // 请求成功
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(new Error('请求失败'));
        }
      },
      fail: (err) => {
        // 请求失败
        reject(err);
      }
    });
  });
}