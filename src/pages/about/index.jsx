
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

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
  }

  async componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 View-4">
        {/* <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
          <Image
            alt="Product 1"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{ aspectRatio: "400/300", objectFit: "cover"}}
            width={400}
          />
          <View className="View-4">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">Stylish Sunglasses</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">UV protection</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 dark:text-gray-100">$29.99</View>
              <Button size="sm" variant="outline">
                Add to Cart
              </Button>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
          <Image
            alt="Product 2"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <View className="View-4">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">Leather Crossbody Bag</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">Stylish and practical</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 dark:text-gray-100">$49.99</View>
              <Button size="sm" variant="outline">
                Add to Cart
              </Button>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
          <Image
            alt="Product 3"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <View className="View-4">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">Wireless Headphones</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">High-quality sound</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 dark:text-gray-100">$79.99</View>
              <Button size="sm" variant="outline">
                Add to Cart
              </Button>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
          <Image
            alt="Product 4"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <View className="View-4">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">Classic Wristwatch</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">Timeless design</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 dark:text-gray-100">$59.99</View>
              <Button size="sm" variant="outline">
                Add to Cart
              </Button>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
          <Image
            alt="Product 5"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <View className="View-4">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">Flexi Wearables</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">Comfortable and stylish</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 dark:text-gray-100">$39.99</View>
              <Button size="sm" variant="outline">
                Add to Cart
              </Button>
            </View>
          </View>
        </View>
        <View className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-800">
          <Image
            alt="Product 6"
            className="w-full h-48 object-cover"
            height={300}
            src="/placeholder.svg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <View className="View-4">
            <View className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">Eco Planters</View>
            <View className="text-gray-500 dark:text-gray-400 text-sm">Sustainable gardening</View>
            <View className="flex items-center justify-between mt-2">
              <View className="text-base font-semibold text-gray-900 dark:text-gray-100">$24.99</View>
              <Button size="sm" variant="outline">
                Add to Cart
              </Button>
            </View>
          </View>
        </View> */}
      </View>
    )
  }
}

export default Index

