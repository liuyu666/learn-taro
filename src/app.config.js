export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/shop/index',
    'pages/shop_detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#3cc51f',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        // iconPath: '/static/images/tabbar/home.png',
        // selectedIconPath: '/static/images/tabbar/home_active.png'
      },
      {
        pagePath: 'pages/shop/index',
        text: '店铺',
        // iconPath: '/static/images/tabbar/detail.png',
        // selectedIconPath: '/static/images/tabbar/detail_active.png'
        // iconPath: '/static/images/tabbar/detail.png',
        // selectedIconPath: '/static/images/tabbar/detail_active.png'
      }
    ],
    height: '50px',
    fontSize: '12px'
  }
})
