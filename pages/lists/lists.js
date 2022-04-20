let names =''
let price = ''

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
  //跳转页面
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  // 获取用户输入的商品名和价格
  getName(e){
    names = e.detail.value
    console.log(names)
  },
  getPrice(e){
    price = e.detail.value
    console.log(price)
  },
  // 添加商品到数据库
  addGoods(){
    console.log('商品名：', names)
    console.log('价格：', price)
    if(names == '' || price == ''){
      wx.showToast({
        icon: 'none',
        title: '商品名或价格不能为空'
      })
    }
    // wx.cloud.database().collection('goods').add({
    //   name: names,
    //   price: price
    // })
  }
})