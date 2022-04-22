Page({
  onLoad() {
    // 调用云函数
    wx.cloud.callFunction({
      // 云函数名称
      name: 'getData',
      data: {

      }
    })
      .then(res => {
        console.log('调用云函数成功', res)
        this.setData({
          openid: res.result.openid
        })
      })
      .catch(err => { console.error('调用云函数失败', err) })
  }
})