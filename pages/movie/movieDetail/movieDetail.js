// pages/movie/movieDetail/movieDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    err:false
  },
  onLook:function(event){
    var src = event.currentTarget.dataset.src;
    wx.previewImage({
      current:src,
      urls: [src],
    })
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
        if (res.statusCode === 404){
          return that.setData({err:true});
        }
        var json = {};
        var data = res.data;
        var languagesFn = function(arr){
          let str = ''
          for(let i=0;i<arr.length;i++){
            str += arr[i] + ' / ';
          };
          return str.slice(0, -3);
        };
        var name = function(arr){
          let a = [];
          for(let i=0;i<arr.length;i++){
            a.push(arr[i].name);
          };
          return a;
        }
        json.average = data.rating.average;
        json.imgSrc = data.images.large;
        json.title = data.title;
        json.year = data.year;
        json.id = data.id;
        json.pubdate = data.pubdate;
        json.languages = languagesFn(data.languages);
        json.writers = data.writers;
        json.pubdates = data.pubdates;
        json.tags = languagesFn(data.tags);
        json.durations = data.durations;
        json.aenres = languagesFn(data.genres);
        json.trailers = data.trailers;
        json.caste = data.casts;
        json.countries = languagesFn(data.countries);
        json.summary = data.summary;
        json.directors = data.directors;
        json.directorsStr = languagesFn(name(data.directors));
        json.comments_count = data.comments_count;
        json.ratings_count = data.ratings_count;
        json.arter = languagesFn(name(data.casts));
        json.writersStr = languagesFn(name(data.writers));
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