// 注册一个小程序示例
App({
  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function (options) {
    // 获取用户信息
    console.log('app onLaunch',options)
  },
  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function (options) {
    // 1.判断小程序的进入场景
    switch(options.scene){
      case 1001:
        console.log('从1001场景进入')  
        break;
      case 1005:
        break;
    }
    // 2.获取用户的信息，并将用户的信息传递给服务器（之前说要被废弃）
    wx.getUserInfo({
      success:function(res){
        console.log("用户信息:", res)
      }
    })
  },

  // 当小程序从前台进入后台，会触发 onHide
  onHide: function () {
    
  },

  // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (msg) {
    
  },

  // 一些全局数据
  globalData:{
    name: 'wzy',
    age: 18
  }
})