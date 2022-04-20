// pages/shujuku/shujuku.js
Page({
  data:{
    list:[]
  },
  onLoad(){
    const db = wx.cloud.database()
    // promise写法
    db.collection('goods').where({
      name: "苹果"
    })
    .get()
    .then(res => {
      console.log(res)
      this.setData({
        list: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
})