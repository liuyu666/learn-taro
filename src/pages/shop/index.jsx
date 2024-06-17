
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
    productList: [],
    sid: null,
    source: 'wx',
    currentProduct: {}
  }

  onShareAppMessage() {
    const { title = '店铺', id, photos } = this.currentProduct || {}
    console.log('this.currentProduct: ', this);
    console.log('id, photos: ', id, photos);
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
      this.fetchProductList()
    })
  }

  async fetchProductList () {
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
        productList: data.data.list || {}
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

  handleShareButtonTap (product) {
    this.currentProduct = product
  }

  handleClick (product) {
    const { id } = product
    Taro.navigateTo({
      url: `/pages/shop_detail/index?sid=${id}`
    })
  }

  render () {
    const { productList, sid } = this.state
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className="min-h-screen bg-slate-200">
        <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 View-">
        {
          productList.map((product, index) => {
            return (
              <View catchtap={()=>this.handleClick(product)} className={`${(product.id == sid && index == 0) ? 'orange-shadow ': ''} bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 p-1 pb-2 h-64 m-2`} >
                <Image
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  height={300}
                  src={this.splitImages(product.photos)[0] || 'https://generated.vusercontent.net/placeholder.svg'}
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  width={400}
                />
                <View className="View-4 p-2 flex justify-between items-center">
                  <View className="text-lg font-semibold text-gray-900 truncate">{product.title}</View>
                  <View className="flex items-center justify-between mt-2">
                    <Button
                      className="m-0 bg-orange-400 text-white"
                      open-type="share"
                      data-sid={product.id} // 在这里绑定店铺的 ID
                      onClick={() => this.handleShareButtonTap(product)} // 处理按钮的点击事件
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

