Page({

  onLoad(){
    wx.cloud.database().collection('goods')
    .get()
    .then(res => {
      console.log('商品请求成功', res)
      this.setData({
        list: res.data
      })
  })
    .catch(err => {console.error('商品请求失败', err)})
  }
})