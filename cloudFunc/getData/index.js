// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 这样云函数内发起数据库请求、存储请求或调用其他云函数的时候，默认请求的云环境就是云函数当前所在的环境
})

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection('goods').get()
  // const wxContext = cloud.getWXContext()

  // return {
  //   event,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
}