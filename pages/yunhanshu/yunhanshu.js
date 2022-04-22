Page({
  onLoad() {
    // 调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getData',
    })
      .then(res => {
        console.log('云函数获取数据库100条', res)
      })
      .catch(err => { console.error('云函数获取数据失败', err) })
  }
})