//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
        subname: '副文本',
        openType: 'share'
      }
    ]
  },
  onClose() {
    this.setData({ show: false });
  },

  onSelect(event) {
    console.log(event.detail);
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
    
  },
  getUserInfo: function(e) {
  }
})
