// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const dbRes = await db.collection('user_info').add({
    // 数据
    data: {
      ...event,
      openid: wxContext.OPENID
    }
  })
  // 返回数据库操作结果
  return dbRes
}
