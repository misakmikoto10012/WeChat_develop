// miniprogram/pages/index/index.ts

Page({
  data: {
    src:'/images/logo.png',
    name:'Hello Wrold'
  },
  getMyInfo: function(e: any) {
    let info = e.detail.userInfo;
    this.setData({
      src:info.avatarUrl,
      name:info.nickName
    })
  },
});