
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './index.scss'


@inject('store')
@observer
class ProductList extends Component {
  state = {
    loading: true,
    currentProduct: ''
  }

  onShareAppMessage() {
    const { title = '商品', id, images } = this.currentProduct || {}
    console.log('id???: ', id);
    if (id) {
      return {
        title: `分享商品：${title}`, // 分享标题
        path: `pages/home/index?pid=${id}`, // 分享链接，这里为当前页面路径
        imageUrl: this.splitImages(images)[0],
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

  splitImages (images) {
    return images.split(';')
  }

  handleShareButtonTap (product) {
    this.currentProduct = product
  }

  render () {
    const { data: productList = [], pid } = this.props
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 View-4 bg-slate-200 min-h-screen">
        {
          productList.map((product, index) => {
            return (
              <View className={`${(product.id == pid && index == 0) ? 'orange-shadow ': ''} bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 p-1 pb-2 h-72 m-2`} >
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
                    <Button
                      className="m-0 bg-orange-400 text-white"
                      open-type='share'
                      data-pid={product.id} // 在这里绑定产品的 ID
                      onTap={() => this.handleShareButtonTap(product)} // 处理按钮的点击事件
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

    )
  }
}

export default ProductList

