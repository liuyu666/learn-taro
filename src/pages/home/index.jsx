
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { Waterfall } from '../../components/waterfall'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    loading: true,
    threads: [],
    items: [
      // 这里是你的项目数组，每个项目都应该有一个 `content` 属性（或其他你需要的属性）
      { content: '项目 1' },
      { content: '项目 2' },
      // ...
    ]
  }

  async componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    const { items } = this.state
    // const { counterStore: { counter } } = this.props.store
    return (
      <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 View-4 bg-slate-200 min-h-screen">
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 p-1 h-80 m-2">
          <Image
            alt="Product 1"
            className="w-full h-48 object-cover"
            height={300}
            src="https://generated.vusercontent.net/placeholder.svg"
            style={{ aspectRatio: "400/300", objectFit: "cover"}}
            width={400}
          />
          <View className="View-4 p-2">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">网红款包包</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">这是一款销量很好的包</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 text-red-600">¥29.99</View>
              <Button className="m-0 bg-orange-400 text-white">
                加入购物车
              </Button>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800 p-1 h-80 m-2">
          <Image
            alt="Product 1"
            className="w-full h-48 object-cover"
            height={300}
            src="https://generated.vusercontent.net/placeholder.svg"
            style={{ aspectRatio: "400/300", objectFit: "cover"}}
            width={400}
          />
          <View className="View-4 p-2">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">网红款包包</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">这是一款销量很好的包</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 text-red-600">¥29.99</View>
              <Button className="m-0 bg-orange-400 text-white">
                加入购物车
              </Button>
            </View>
          </View>
        </View>
      </View>

    )
  }
}

export default Index

