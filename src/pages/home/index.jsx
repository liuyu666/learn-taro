
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Image, Button } from '@tarojs/components'
import ProductList from '../../components/product_list/index'
import { observer, inject } from 'mobx-react'

import { taroRequest } from '../../utils/http'

import './index.scss'


@inject('store')
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
    usingComponents: {},
  }

  state = {
    pid: null,
    source: 'wx',
  }

  onLoad(query) {
    // 在 onLoad 方法中，options 对象包含了页面启动时的参数
    const { pid, source } = query;
    console.log('pid, source: ', pid, source);

    // 你也可以将这些值保存到组件的 state 或 data 中，以便在页面中使用
    this.setState({
      pid,
      source
    }, () => {
      this.fetchProductList()
    })
  }

  async fetchProductList () {
    const { pid } = this.state;
    try {
      const { data = {} } = await taroRequest({
        url: '/product/list',
        method: 'GET',
        data: {
          pid
        }
      })
      console.log('data.data.list: ', data.data.list);
      this.setState({
        productList: data.data.list || {}
      })
    } catch (error) {
      console.log('error: ', error);
      Taro.showToast({
        title: '载入远程数据错误',
      })
    }
  }

  render () {
    const { productList = [], pid } = this.state || {}
    return (
      <View className="min-h-screen bg-slate-200">
        <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 View-4 bg-slate-200 min-h-screen">
          <ProductList data={ productList } pid={ pid } />
        </View>
      </View>
    )
  }
}

export default Index

