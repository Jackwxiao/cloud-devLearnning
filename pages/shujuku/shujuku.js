// pages/shujuku/shujuku.js
Page({
  data:{
    list: [],
    good: {}
  },
  onLoad(){
    const db = wx.cloud.database()
    // promise写法。where条件查询。doc查询单条数据
    db.collection('goods').get()
    .then(res => {
      console.log(res)
      this.setData({
        list: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    db.collection('goods').doc('f1dedd58625f9f7500aec6475187f10f').get()
    .then(res => {
      this.setData({
        good: res.data 
      })
    })
    .catch(err => {
      console.log('请求失败')
    })
  }
})