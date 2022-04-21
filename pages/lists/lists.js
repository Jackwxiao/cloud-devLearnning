let names = ''
let price = ''

Page({
  onLoad() {
    this.getList()
  },
  // 获取列表数据
  getList() {
    wx.cloud.database().collection('goods')
      .get()
      .then(res => {
        this.setData({
          list: res.data
        })
      }).catch(err => { console.error('商品请求失败', err) })
  },

  //跳转页面
  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  // 获取用户输入的商品名和价格
  getName(e) {
    names = e.detail.value
  },
  // 获取用户输入的更新价格
  getPrice(e) {
    price = e.detail.value
  },
  // 添加商品到数据库
  addGoods() {
    if (names == '' || price == '') {
      wx.showToast({
        icon: 'none',
        title: '添加的商品名或价格不能为空'
      })
    }
    else {
      // 更新数据库
      wx.cloud.database().collection('goods').add({
        data: {
          name: names,
          price: parseInt(price)
        }
      }).then(res => {
        console.log('添加商品成功', res)
        this.getList()
      }).catch(err => {
        console.error('添加商品失败', err)
      })
    }

  },
  // 排序操作 orderBy
  goodASort(){
    wx.cloud.database().collection('goods')
    .orderBy('price', 'asc')
    .get().then(res =>{
      console.log(res)
      this.setData({
        list: res.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  },
  goodDSort(){
    wx.cloud.database().collection('goods')
    .orderBy('price', 'desc')
    .get().then(res =>{
      console.log(res)
      this.setData({
        list: res.data
      })
    })
    .catch(err => {
      console.error(err)
    })
  }
})