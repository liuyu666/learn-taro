import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import { ThreadList } from '../../components/thread_list'
import api from '../../utils/api'


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
    try {
      // const res = await Taro.request({
      //   url: api.getLatestTopic(),
      // })
      // this.setState({
      //   threads: res.data,
      //   loading: false,
      // })
    } catch (error) {
      // Taro.showToast({
      //   title: '载入远程数据错误',
      // })
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  addUser = async () => {
    try {
      const {result} = await Taro.cloud.callFunction({
        name: 'addUser', // 云函数名
        // 传给云函数的参数
        data: {
          name: '张三',
          age: 30,
          height: 180,
          sex: "man"
        }
      })
      console.log(result) // 输出云函数的返回结果
    } catch (err) {
      console.error(err)
    }
  }


  handleButtonClick = async () => {
    try {
      const { result } = await Taro.cloud.callFunction({
        name: 'helloWorld', // 云函数名称
        data: { // 传递给云函数的数据
          name: 'Taro User',
          age: 25,
        },
      })
      console.log(11, result) // 输出云函数返回的结果
      Taro.showToast({ title: result.message, icon: 'success' })
    } catch (error) {
      console.error('云函数调用失败', error)
      Taro.showToast({ title: '云函数调用失败', icon: 'none' })
    }
  }

  render () {
    const { loading, threads } = this.state
    const { counterStore: { counter } } = this.props.store
    return (
      <View className='index'>
        {/* <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text> */}
        <Button onClick={this.handleButtonClick}>调用函数</Button>
        <Button onClick={this.addUser}>增加用户</Button>


        <View className="index">
          <ThreadList threads={threads} loading={loading} />
        </View>
      </View>
    )
  }
}

export default Index
