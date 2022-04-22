let names = ''
let price = ''
Page({
  onLoad() {
    this.getList(0)
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
  // 获取列表数据
  getList(type) {
    let db = wx.cloud.database().collection('goods')
    // type为0 代表默认排序，为1代表升序，为-1代表降序  orderBy代表排序
    if (type == 1) {
      db = db.orderBy('price', 'asc')
    } else if (type == -1) {
      db = db.orderBy('price', 'desc')
    }
    db.get().then(res => {
      this.setData({
        list: res.data
      })
    }).catch(err => { console.error('商品请求失败', err) })
  },
  // 升序
  goodASort() {
    this.getList(1)
  },
  // 降序
  goodDSort() {
    this.getList(-1)
  },
  limit() {
    let db = wx.cloud.database().collection('goods')
    db.limit(3).get().then(res => {
      this.setData({
        list: res.data
      })
    }).catch(err => {
      console.error('前三条商品信息请求失败', err)
    })
  }
})