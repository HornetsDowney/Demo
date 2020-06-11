//app.js
App({
  //1 应用第一次启动就会触发的事件
  onLaunch(){
    // 应用在第一次启动的时候可以获取用户信息
    console.log("onLaunch");

    //js的方式跳转
    // wx.wx.navigateTo({
    //   url: '11/22/33',
    // });
  },
  //2 小程序被用户看到时触发
  onShow(){
      console.log("onShow");
  },
  //3 当小程序被隐藏时看到时触发
  onHide(){
    console.log("onHide");
  },
  //4 当小程序的代码发生报错的时候触发
  onError(err){
    // 作用：在小程序发生代码报错的时候，收集用户的错误信息，通过异步请求将错误信息发送到后台
    console.log("onError");
    console.log(err)
  },
  //5 表示页面找不到时就会触发
  //app第一次启动的时候，如果找不到第一个入口页面才会触发 
  onPageNotFound(){
    // console.log("onPageNotFound");
    // 如果启动页面不存在了，通过js的方式进行重新跳转页面，重新跳转到指定的页面
    wx.navigateTo({
      url: 'pages/demo06/demo06'
    });
  }
})


// onLaunch: function () {
//   // 展示本地存储能力
//   var logs = wx.getStorageSync('logs') || []
//   logs.unshift(Date.now())
//   wx.setStorageSync('logs', logs)

//   // 登录
//   wx.login({
//     success: res => {
//       // 发送 res.code 到后台换取 openId, sessionKey, unionId
//     }
//   })
//   // 获取用户信息
//   wx.getSetting({
//     success: res => {
//       if (res.authSetting['scope.userInfo']) {
//         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
//         wx.getUserInfo({
//           success: res => {
//             // 可以将 res 发送给后台解码出 unionId
//             this.globalData.userInfo = res.userInfo

//             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//             // 所以此处加入 callback 以防止这种情况
//             if (this.userInfoReadyCallback) {
//               this.userInfoReadyCallback(res)
//             }
//           }
//         })
//       }
//     }
//   })
// },
// globalData: {
//   userInfo: null
// }