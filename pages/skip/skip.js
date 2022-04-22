Page({
  onLoad(){
    wx.cloud.database().collection('num')
    .skip(1)
    .get()
    .then(res => {
      console.log('请求成功', res)
      this.setData({
        list: res.data
      })
    })
    .catch(err =>{
      console.error('请求失败', err)
    })
  }
})