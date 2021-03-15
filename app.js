//注册一个小程序示例
App({
  //生命周期函数，在后台会存活一段时间
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //console.log("小程序初始化完成了：onLanuch");
    //异步调用，获取用户信息，甚至比后面函数启动更慢
    // wx.getUserInfo({
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //console.log("小程序界面显示出来：onShow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  /**
   * 全局属性，便于其他页面获取
   */
  globalData: {
    name: 'U.N-Owen',
    age: 18
  }
})