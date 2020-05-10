// pages/demo12/demo12.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:"",
    list:[
      {
        id:0,
        name:"🍎",
        value:"apple"
      },
      {
        id:1,
        name:"🍌",
        value:"bananer"
      },
      {
        id:2,
        name:"🍇",
        value:"grape"
      }
    ],
    checkedList:""
  },
  handechange(e){
    // console.log(e)
    // 获取单选框中的值
    let gender=e.detail.value;
    this.setData({
      // gender:gender  简写后的方式 gender
      gender
    })
  },
  // 多选框
  hendeItemchange(e){
    // console.log(e)
    // 初始化一个数组
    const checkedList=e.detail.value;
    // 给数组赋值
    this.setData({
      checkedList
    })
  }
})