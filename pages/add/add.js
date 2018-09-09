// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    accounts: ['胖妞妞5454', 'b2d3472...', 'ls172023...', 'ls15544...', 'nibubizhidao','京东', '拼多多'],
    array: ['立返', '货返', '其他'],
    array1: ['立返', '货返', '其他'],
    principalIndex: 0,
    accountIndex: 4,
    commissionIndex: 1
  },
  bindPrincipalChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      principalIndex: e.detail.value
    })
  },
  bindCommissionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      commissionIndex: e.detail.value
    })
  },
  bindAccountChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      accountIndex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})