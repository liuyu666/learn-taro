
import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View } from '@tarojs/components'
import ProductList from '../../components/product_list/index'
import { observer, inject } from 'mobx-react'

import { taroRequest } from '../../utils/http'

import './index.scss'


@inject('store')
@observer
class ShopDetail extends Component {
  config = {
    navigationBarTitleText: '店铺详情',
  }

  state = {
    pid: null,
    sid: null,
    source: 'wx',
  }

  onLoad(query) {
    console.log('query??====: ', query);
    // 在 onLoad 方法中，options 对象包含了页面启动时的参数
    const { sid, pid, source } = query;
    console.log('sid, pid, source: ', sid, pid, source);

    // 你也可以将这些值保存到组件的 state 或 data 中，以便在页面中使用
    this.setState({
      pid,
      sid,
      source
    }, () => {
      this.fetchProductList()
    })
  }

  async fetchProductList () {
    const { pid, sid } = this.state;
    console.log('pid, sid!!!: ',  pid, sid);
    try {
      const { data = {} } = await taroRequest({
        url: '/product/list',
        method: 'GET',
        data: {
          pid,
          sid
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
          <ProductList data={productList} pid={pid} />
        </View>
      </View>

    )
  }
}

export default ShopDetail

