// 引入云开发 SDK
const cloud = require('wx-server-sdk')
// process.env.TARO_ENV === 'weapp'
// 初始化云环境
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event) // 打印前端传递的事件对象
  console.log(context) // 打印云函数上下文对象

  // 假设我们要返回前端传递过来的信息
  const { name, age } = event
  const response = {
    message: `Hello, ${name}! You are ${age} years old.`,
    event, // 返回前端传递的事件对象
  }

  return response
}
