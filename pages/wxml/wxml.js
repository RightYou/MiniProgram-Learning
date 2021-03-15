// pages/wxml/wxml.js
Page({
  data: {
    message: "hello world",
    firstname: 'bobe',
    lastname: 'bryant',
    age: 12,
    nowTime: new Date().toLocaleString(),
    score:50,
    movies:['a','b','c']
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  }
})