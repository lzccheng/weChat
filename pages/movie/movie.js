// pages/movie/movie.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  requestData:function(url,key){
    var _host = app.globalDate.doubanHost;
    var _url = _host + url;
    var _that = this;
    wx.request({
      url: _url,
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var data = res.data;
        console.log(data)
        var _json = {};
        _json[key] = data
        _that.setData(_json)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData('/v2/movie/coming_soon','willPlay');
    this.requestData('/v2/movie/in_theaters', 'Playing');
    this.requestData('/v2/movie/top250', 'top');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    console.log(this.data.top,res)
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