// httpUtils.js
import Taro from '@tarojs/taro'

// 封装后的请求函数
function Request (options) {
  // 在这里可以添加请求拦截、请求参数处理等逻辑
  // ...

  return Taro.request(options)
    .then(res => {
      // 在这里可以添加响应拦截、错误处理等逻辑
      // ...
      return res.data // 返回处理后的数据
    })
    .catch(err => {
      // 处理请求失败的情况
      // ...
      throw err // 可以选择抛出错误，让调用者处理
    })
}

export default Request
