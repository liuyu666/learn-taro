import Taro from '@tarojs/taro'
// 假设你有一个 baseUrl
const baseUrl = 'http://liuyu666.cn';

// 封装 Taro.request 方法
export function taroRequest (options = {}) {
  let { url } = options;
  // 如果传入的 url 不是完整的 URL（即不包含协议和域名），则添加 baseUrl
  if (!/^https?:\/\//.test(url)) {
    url = `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
  }
  console.log('url77: ', url);

  // 合并或覆盖默认选项
  const finalOptions = {
    ...options,
    url, // 确保最终使用的 url 是完整的
    // 可以在这里添加更多默认选项，比如 headers、method 等
  };

  // 调用 Taro.request 发送请求
  console.log('finalOptions: ', finalOptions);
  return Taro.request(finalOptions);
}

// 使用封装的 taroRequest 方法
// taroRequest({
//   url: '/users'
//   method: 'GET',
//   // 其他选项...
// }).then(response => {
//   // 处理响应数据
// }).catch(error => {
//   // 处理错误
// });
