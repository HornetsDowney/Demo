// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0
  },
  //输入框的input事件的执行逻辑
  handInput(e) {
    // console.log(e.detail.value);
    this.setData({
      num: e.detail.value
    })
  },
  // 加 减 按钮事件
  handletap(e) {
    // console.log(e);
    // 1 获取自定义属性 operation
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num + operation
    })
  }
})