//app.js
App({
  globalData: {
    userInfo: null
  },

  onLaunch: function () {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              wx.login({
                success (ress) {
                  var datas = res.userInfo;
                  datas.code = ress.code; 
                  console.log(datas);
                  if (ress.code) {
                    //发起网络请求
                    wx.request({
                      method: 'post',
                      url: 'http://localhost:8080/saveUserLoginInfo',
                      data: datas
                    })
                  } else {
                    console.log('登录失败！' + res.errMsg)
                  }
                }
              })
            }
          })
        }else{
          wx.reLaunch({
            url: '/pages/auth/auth',
          })
        }
      }
    })
  },
})