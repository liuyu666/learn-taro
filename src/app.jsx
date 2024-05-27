import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'
import 'windi.css';
import './app.scss'

const store = {
  counterStore
}

class App extends  Component {
  componentDidMount () {
    if (process.env.TARO_ENV === 'wx') {
      if (!wx.cloud) {
        console.error('请使用 2.2.3 或以上的基础库以使用云能力');
      } else {
        wx.cloud.init({
          env: 'xor-cloud-9gsby5k97930d06b', // 替换为你的云环境 ID
          traceUser: true, // 是否在控制台输出用户访问日志，默认为 true
        });
      }
    }

  }

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
