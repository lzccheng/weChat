// pages/movie/more/more.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cancelIcon:false,
    search:[],
    isShow:false,
    inputValue:'',
    num:0,
    count:20
  },
  onFocus:function(event){
    this.setData({ cancelIcon: true, isShow:true})
  },
  onCancel:function(){
    this.setData({ cancelIcon: false, isShow: false, inputValue:''})
  },
  onBlur:function(event){
    var that = this;
    var inputValue = event.detail.value;
    this.setData({ inputValue})
    if (inputValue){
      wx.showLoading({
        title: '数据加载中....'
      })
      wx.request({
        url: app.globalDate.doubanHost + '/v2/movie/search?q=' + inputValue,
        header: {
          "Content-Type": "json"
        },
        success: function (res) {
          that.setData({ search: res.data.subjects })
          wx.hideLoading();
        }
      })
    }
  },
  onPullDownRefresh :function(){
    console.log(888888);
  },
  onScroll:function(){
    this.data.num += 20;
    var that = this;
    var _count = that.data.data.total - this.data.num >= this.data.count ? this.data.count : that.data.data.total - this.data.num;
    var url = app.globalDate.doubanHost + '/v2/movie/' + this.data.url + '?start='+this.data.num+'&count='+_count;
    wx.showNavigationBarLoading();
    wx.request({
      url,
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        var data = res.data;
        that.data.data.subjects = that.data.data.subjects.concat(data.subjects);
        var data = that.data.data;
        var title = that.data.title + '(' + that.data.data.subjects.length + '/' + that.data.data.total+')';
        wx.setNavigationBarTitle({
          title
        })
        that.setData({ data });
        wx.hideNavigationBarLoading();
      }
    })
  },
  toDetail:function(event){
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/movie/movieDetail/movieDetail?id='+id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var title = options.title;
    var url = options.url;
    var _url = app.globalDate.doubanHost +'/v2/movie/'+url+'?start=0';
    this.setData({title,url})
    wx.showNavigationBarLoading();
    wx.request({
      url:_url,
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        var data = res.data;
        that.setData({ data });
        var title = that.data.title + '(' + that.data.data.subjects.length + '/' + that.data.data.total+')';
        wx.setNavigationBarTitle({
          title
        });
        wx.hideNavigationBarLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.title
    })
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