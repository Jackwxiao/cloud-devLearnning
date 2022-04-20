// app.js
App({
  onLaunch(){
    console.log('小程序启动')
    // 云开发初始化
    wx.cloud.init({
      env: 'cloudfist-bmr13' // 云开发id
    })

  }
})
