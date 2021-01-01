//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username:'',
    password:''
  },

 formSumbit:function (e) {
    this.setData({
      username: e.detail.value.username,
      password: e.detail.value.password

    })

  },
  onLoad: function (options) {
  },
  formRest: function () {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
  },
  onUnload: function () {
  },
  onPullDownRefresh: function () {
  },
  onReachBottom: function () {
  },
  onShareAppMessage: function () {
  }
})
