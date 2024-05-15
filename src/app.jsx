import { Component } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

class App extends  Component {
  componentDidMount () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   这里请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'xor-cloud-9gsby5k97930d06b', // 替换为你的云环境 ID
        traceUser: true, // 是否在控制台输出用户访问日志，默认为 true
      });
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
