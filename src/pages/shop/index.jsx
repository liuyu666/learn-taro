
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { taroRequest } from '../../utils/http'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '店铺',
    usingComponents: {},
  }

  state = {
    loading: true,
    shopList: [],
    sid: null,
    source: 'wx',
    currentShop: {}
  }

  onShareAppMessage() {
    const { title = '店铺', id, photos } = this.currentShop || {}
    if (id) {
      return {
        title: `分享店铺：${title}`, // 分享标题
        path: `pages/shop/index?sid=${id}`, // 分享链接，这里为当前页面路径
        imageUrl: photos,
        success: function (res) {
          // 用户点击分享后执行的回调函数
          console.log('分享成功', res)
        },
        fail: function (err) {
          // 分享失败的回调函数
          console.log('分享失败', err)
        }
      }
    }
  }

  onLoad (query) {
    const sid = query.sid
    const source = query.source
    // 你也可以将这些值保存到组件的 state 或 data 中，以便在页面中使用
    this.setState({
      sid,
      source
    }, () => {
      this.fetchShopList()
    })
  }

  async fetchShopList () {
    const { sid } = this.state;
    try {
      const { data = {} } = await taroRequest({
        url: '/shop/list',
        method: 'GET',
        data: {
          sid
        }
      })
      this.setState({
        shopList: data.data.list || {}
      })
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误',
      })
    }
  }

  splitImages (images) {
    return images.split(';')
  }

  handleShareButtonTap (e, shop) {
    e.stopPropagation()
    this.currentShop = shop
    console.log('this.currentShop: ', this.currentShop);
  }

  handleClickShop (shop) {
    console.log('shop88: ', shop);
    const { id } = shop
    Taro.navigateTo({
      url: `/pages/shop_detail/index?sid=${id}`
    })
  }

  render () {
    const { shopList, sid } = this.state
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className="min-h-screen bg-slate-200">
        <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 View-">
        {
          shopList.map((shop, index) => {
            return (
              <View onClick={()=>this.handleClickShop(shop)} className={`${(shop.id == sid && index == 0) ? 'orange-shadow ': ''} bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 p-1 pb-2 h-64 m-2`} >
                <Image
                  alt={shop.title}
                  className="w-full h-48 object-cover"
                  height={300}
                  src={this.splitImages(shop.photos)[0] || 'https://generated.vusercontent.net/placeholder.svg'}
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  width={400}
                />
                <View className="View-4 p-2 flex justify-between items-center">
                  <View className="text-lg font-semibold text-gray-900 truncate">{shop.title}</View>
                  <View className="flex items-center justify-between mt-2">
                    <Button
                      className="m-0 bg-orange-400 text-white"
                      open-type="share"
                      data-sid={shop.id} // 在这里绑定店铺的 ID
                      onClick={(e) => this.handleShareButtonTap(e, shop)} // 处理按钮的点击事件
                    >
                      分享
                    </Button>
                  </View>
                </View>
              </View>
            )
          })
        }

        </View>
      </View>

    )
  }
}

export default Index

