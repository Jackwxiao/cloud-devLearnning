// pages/add/add.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },
  // 添加商品
  add() {
    wx.cloud.database().collection('goods').add({
      data:{  // 添加数据
        name: '车厘子',
        price: '112'
      }
    }).then(res => {
      console.log('添加成功',res)
    }).catch(err => {
      console.log('添加失败',err)
    })
  },
  update(){
    wx.cloud.database().collection('goods').doc('1cf827d0625fb62100fd689644471e8c').update({
      data: { //修改数据
        price: 100
      }
    }).then(res => {
      console.log('修改成功',res)
    }).catch(err => {
      console.error('修改失败', err)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})