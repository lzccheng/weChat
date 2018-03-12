// pages/movie/movie.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onMore:function(event){
    
    var title = event.currentTarget.dataset.title;
    var url = event.currentTarget.dataset.url;
    console.log(url)
    wx.navigateTo({
      url: '/pages/movie/more/more?title='+title+'&url='+url,
    })
  },
  onPullDownRefresh:function(){
    console.log(777777777777)
  },
  toDetail:function(event){
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/movie/movieDetail/movieDetail?id='+id,
    })
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
    this.requestData('/v2/movie/coming_soon?start=0&count=3','willPlay');
    this.requestData('/v2/movie/in_theaters?start=0&count=3', 'Playing');
    this.requestData('/v2/movie/top250?start=0&count=3', 'top');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
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