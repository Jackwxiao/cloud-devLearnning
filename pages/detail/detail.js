// pages/detail/detail.js
let price = ''
var id = ''
Page({
  /**
   * 页面的初始数据
   */
  data: {
    good: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad(options) {
    console.log('列表携带的值', options)
    id = options.id
    this.getDetail()
  },
  // 获取商品详情
  getDetail(){
    wx.cloud.database().collection('goods').doc(id).get()
    .then(res =>{
      console.log('商品详情请求成功', res)
      this.setData({
        good: res.data
      })
    })
    .catch(err => {
      console.error('商品详情请求失败', err)
    })
  },
 // 获取用户输入的新价格
 getPrice(e){
    price = this.validateNumber(e.detail.value)
    // price = e.detail.value
 },
 validateNumber(val) {
  return val.replace(/\D/g, '')
},
 update(){
  if(price == '' ){
    wx.showToast({
      icon: 'none',
      title: '请输入数字',
    })
  }else{
    wx.cloud.database().collection('goods').doc(id).update({
      data:{
        price: price
      }
    }).then(res => {
      console.log('更新价格成功',res)
      this.getDetail()
    }).catch(err => {
      console.error('更新价格失败', err)
    })
  }
  
 },

})