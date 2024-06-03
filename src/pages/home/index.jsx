
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { ProductApi } from '../../utils/api'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    loading: true,
    productList: []
  }

  async componentDidMount () {
    this.fetchProductList()
  }

  async fetchProductList () {
    try {
      const { data = {} } = await Taro.request({
        url: 'http://liuyu666.cn/product/list',
        method: 'GET',
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

  render () {
    const { productList } = this.state
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 View-4 bg-slate-200 min-h-screen">
        {
          productList.map(product => {
            return (
              <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 p-1 pb-2 h-72 m-2">
                <Image
                  alt={product.title}
                  className="w-full h-48 object-cover"
                  height={300}
                  src={this.splitImages(product.images)[0] || 'https://generated.vusercontent.net/placeholder.svg'}
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  width={400}
                />
                <View className="View-4 p-2">
                  <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{product.title}</View>
                  <View className="flex items-center justify-between mt-2">
                    <View className="text-base font-semibold text-gray-900 text-red-600">¥{product.price}</View>
                    <Button className="m-0 bg-orange-400 text-white" open-type="share" >
                      分享
                    </Button>
                  </View>
                </View>
              </View>
            )
          })
        }

      </View>

    )
  }
}

Index.onShareAppMessage = function (options) {
  return {
    title: '自定义分享标题', // 分享标题
    path: 'pages/home/index', // 分享链接，这里为当前页面路径
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

export default Index

