//getApp()获取App()产生的示例对象
const app = getApp()

const name = app.globalData.name;
const age = app.globalData.age;

//注册一个页面
//页面也有自己的生命周期函数
Page({
  //2、初始化数据
  data: {
    content: "U.N-Owen",
    movies: ["大话西游", "盗梦空间", "星际穿越"],
    counter: 0
  },

  //3、监听wxml中的事件
  handleGetUserInfo(event) {
    console.log(event.detail);
  },

  increment() {
    this.setData({
      counter: ++this.data.counter
    })
  },

  decrement() {
    this.setData({
      counter: --this.data.counter
    })
  },

  //1、监听页面的生命周期函数,这里采用ES6的增强写法，所以和自动生成的不同
  //页面被加载出来
  onLoad() {

  },
  //页面初次渲染完成时
  onReady() {

  },
  //页面显示出来时
  onShow() {

  },
  //页面隐藏起来时
  onHide() {

  },
  //页面向回跳转时
  onUnload() {

  },

  //4、其他事件
  //下拉刷新
  onPullDownRefresh() {
    console.log("下拉刷新的事件");
  }
})