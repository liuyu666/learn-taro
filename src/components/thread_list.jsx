import { Component } from 'react'
import { View, Text } from '@tarojs/components'

class ThreadList extends Component {
  static defaultProps = {
    threads: [],
    loading: true,
  }

  render () {
    console.log(222);

    return <View className="thread-list">yyyy</View>;
  }
}

export { ThreadList };
