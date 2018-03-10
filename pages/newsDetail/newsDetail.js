// pages/newsDetail/newsDetail.js
var data = require('../../data/news_data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onShare:function(){
    var shareList = [
      "分享到QQ",
      "分享到微信",
      "分享到朋友圈",
      "分享到QQ空间"
    ];
    wx.showActionSheet({
      itemList: shareList,
      success:function(res){
        wx.showModal({
          title: '提示',
          content: shareList[res.tapIndex]+'？',
          success:function(res){
            if (res.confirm){
              wx.showToast({
                title: '无此api',
              })
            }
          }
        });
      }
    })
  },
  onGood: function () {
    var isGood = !this.data.isGood;
    this.setData({
      isGood: !this.data.isGood
    });
    wx.showToast({
      title: isGood ? '收藏成功' : "取消收藏成功"
    });
    wx.setStorageSync('isGood', isGood ? '1' : '0');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var dataBase = data.default;
    var isGood = Number(wx.getStorageSync('isGood'))?true:false;
    this.setData({ id, dataBase, isGood});
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

  }
})