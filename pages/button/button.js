// pages/button/button.js
Page({
  // 页面的初始数据
  data: {

  },
  onBindContact(){
    console.log('打开了客户会话')
  },

  onGetUserInfo(event){
    console.log('获取用户的信息',event)
  }
})