// pages/home/home.js
// getApp()获取App()产生的示例对象
// const app = getApp()
// const name = app.globalData.name;
// const age = app.globalData.age;

// 注册一个页面
// 页面也有自己的生命周期函数
Page({
  // ------------ 2.初始化数据 ---------------
  data: {
    message:'哈哈哈',
    list:[]
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    console.log('onLoad')
  },
  // 生命周期函数--监听页面显示
  onShow: function () {
    console.log('onShow')
  },
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    console.log('onReady')
  },
  // 生命周期函数--监听页面隐藏
  onHide: function () {
    console.log('onHide')
  },
  // 生命周期函数--监听页面卸载
  onUnload: function () {
    console.log('onUnload')
  },

  // --------- 3.监听wxml中相关的一些事件--------
  handleGetUserInfo(event){
    // 获取用户信息
    console.log(event)
  },
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },

  // --------- 4.页面相关事件处理函数 ---------
  // 监听页面的滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听用户下拉动作
  onPullDownRefresh: function () {
    console.log('下拉刷新的事件')
  },
  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    console.log('页面滚动到顶部')
  },
  // 用户点击右上角分享
  onShareAppMessage: function () {
    console.log('用户右上角分享事件')
  }
})