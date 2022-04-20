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
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  }
})