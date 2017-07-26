
var app = getApp()

Page({

  // 初始化数据（必须是可以转成JSON格式的字符串）
  data: {
    result: '' // 接口返回值
  },

  // GET请求：接口 公司Restful 获取新闻列表
  clickButton1: function () {
    var that = this;
    wx.request({
      url: 'http://www.epoint.com.cn/WebBuilderMobileService/appservice/getinfolist',
      method: 'POST',
      data: {
        ValidateData: "Epoint_WebSerivce_**##0601",
        para: {
          catenum: "025001001",
          isheadnews: "0",
          title: "",
          pagesize: "15",
          currentpageindex: "0"
        }
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (e) {
        wx.showToast({
          title: '请求成功!'
        })

        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '请求失败!'
        })
        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      }
    })

  },
  // GET请求：接口 LeanCloud 获取产品列表
  clickButton2: function () {
    var that = this;
    wx.request({
      url: 'https://leancloud.cn:443/1.1/classes/Product?limit=2&&order=-updatedAt&&',
      method: 'GET',
      data: {

      },
      header: {
        'Content-Type': 'application/json',
        'X-LC-Id': 'muOaEf1eUm1fFTGUkxoHDuXU-gzGzoHsz',
        'X-LC-Key': 'UxNkFSMvDY10sRpHBVx8uoJI'
      },
      success: function (e) {
        wx.showToast({
          title: '请求成功!'
        })

        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '请求失败!'
        })
        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      }
    })
  },
  // POST请求：接口 上报经纬度
  clickButton3: function () {
    var that = this;
    // 获取经纬度
    wx.getLocation({
      success: function (res) {
        // 获取的是number类型，上报要求是string类型，因此需要toString()
        var longitude = res.longitude.toString();
        var latitude = res.latitude.toString();
        wx.request({
          url: 'https://leancloud.cn:443/1.1/classes/location',
          method: 'POST',
          data: {
            longitude: longitude,
            latitude: latitude
          },
          header: {
            'Content-Type': 'application/json',
            'X-LC-Id': 'muOaEf1eUm1fFTGUkxoHDuXU-gzGzoHsz',
            'X-LC-Key': 'UxNkFSMvDY10sRpHBVx8uoJI'
          },
          success: function (e) {
            wx.showToast({
              title: '请求成功!'
            })

            console.log(JSON.stringify(e.data));
            that.setData({
              result: JSON.stringify(e.data)
            })
          },
          fail: function (e) {
            wx.showToast({
              title: '请求失败!'
            })
            console.log(JSON.stringify(e.data));
            that.setData({
              result: JSON.stringify(e.data)
            })
          }
        })
      }
    })
  },

  // GET请求：用户登录
  clickButton4: function () {
    var username = 'test';
    var password = '123456';
    var url = 'https://leancloud.cn:443/1.1/login?username=' + username + '&password=' + password;
    var that = this;
    wx.request({
      url: url,
      method: 'POST',
      data: {},
      header: {
        'Content-Type': 'application/json',
        'X-LC-Id': 'muOaEf1eUm1fFTGUkxoHDuXU-gzGzoHsz',
        'X-LC-Key': 'UxNkFSMvDY10sRpHBVx8uoJI'
      },
      success: function (e) {
        wx.showToast({
          title: '登录成功!'
        })
        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '请求失败!'
        })
        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      }
    })

  },
  // POST请求：用户登录
  clickButton5: function () {
    var username = '小明';
    var password = '123456';
    var that = this;
    wx.request({
      url: 'https://leancloud.cn:443/1.1/users',
      method: 'POST',
      data: {
        username: username,
        password: password
      },
      header: {
        'Content-Type': 'application/json',
        'X-LC-Id': 'muOaEf1eUm1fFTGUkxoHDuXU-gzGzoHsz',
        'X-LC-Key': 'UxNkFSMvDY10sRpHBVx8uoJI'
      },
      success: function (e) {
        wx.showToast({
          title: '请求成功!'
        })
        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '请求失败!'
        })
        console.log(JSON.stringify(e.data));
        that.setData({
          result: JSON.stringify(e.data)
        })
      }
    })

  },
  // 打开 用户登录
  login:function(){

    // 打开新页面，保留当前页面
    wx.navigateTo({
      url: '../login/login',
    })
  },
  // 打开 富文本
  openRichtextView: function () {
    wx.navigateTo({
      url: '../richtext/richtext',
    })
  },
  // 打开 发票：张家港
  openZJGView: function () {
    wx.navigateTo({
      url: '../info_zjg/info_zjg',
    })
  },
  // 打开 发票：张家港
  openSJView: function () {
    wx.navigateTo({
      url: '../info_suzhou/info_suzhou',
    })
  },
  // 页面加载（只调用一次）
  onLoad: function () {


  }

})




