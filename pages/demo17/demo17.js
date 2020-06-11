// pages/demo17/demo17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },
      {
        id:2,
        name:"分类",
        isActive:false
      },
      {
        id:3,
        name:"关于",
        isActive:false
      },
    ]
  },
// 自定义组件，用来接受子组件传递的数据
handleItemChange(e){
  const {index}=e.detail;
  let {tabs}=this.data;
  tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
  this.setData({
    tabs
  })
}
})