// pages/movie/movieDetail/movieDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    var that = this;
    var host = app.globalDate.doubanHost;
    var url = host + '/v2/movie/subject/' + id;
    wx.request({
      url,
      method:'get',
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        console.log(res)
        var json = {};
        var data = res.data;
        var languagesFn = function(arr){
          let str = ''
          for(let i=0;i<arr.length;i++){
            str += arr[i] + ' / ';
          };
          return str.slice(0, -3);
        }
        json.average = data.rating.average;
        json.imgSrc = data.images.large;
        json.title = data.title;
        json.year = data.year;
        json.id = data.id;
        json.pubdate = data.pubdate;
        json.languages = languagesFn(data.languages);
        that.setData({data,json})
      }
    })
    this.setData({id})
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