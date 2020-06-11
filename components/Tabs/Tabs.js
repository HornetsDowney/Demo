// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   * 里面存放的是从父组件接收的数据
   */
  properties: {
    // 要接受的数据名称
    // aaa:{
    //   // type 表示要接受的数据类型
    //   type:String,
    //   // value 表示数据的默认值
    //   value:""
    // }
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

/*
  1 在页面.js文件中存放事件回调函数的时候存放在data同层级下
  2 组件.js文件中，存放时间回调函数的时候必修要存在methods中！！！！
*/
  methods: {
    hanldeItenTap(e){
      /*
      1 绑定单机时间  需要在methods中绑定
      2 获取被点击的索引
      3 获取原数组
      4 对数组循环 
        1 给每个循环项的选中属性状态修改为false
        2 给当前的索引项添加激活选中的效果就可以了

      5 点击事件触发的时候
        触发父组件中的自定义事件，同时传递数据给父组件，代码如下
        this.triggerEvent{"父组件自定义事件的名称"，要传递的参数}
      */
     // 2 获取索引
     const {index}=e.currentTarget.dataset;
     this.triggerEvent("itemChange",{index});
     // 3 获取data中的数组
     // 解构 对复杂类型进行解构的时候，只是复制了一份变量的引用而已，原始写法：let tabs=this.data
     // 最严谨的做法是重新拷贝一份数组，再对这个数组的备份进行处理，不要直接修改 this.data.xxx  里面的数据
    //  let {tabs}=this.data;
     // 4 数组循环
     // [].forEach 遍历数组的时候，如果修改了v ，也会导致源数组被修改
    //  tabs.forEach((v,i)=>i===index?v.isAcive=true:v.isAcive=false)

    //  this.setData({
    //   tabs
    //  })
    },
  }
}) 
