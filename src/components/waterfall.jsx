import Taro, { eventCenter, useRef, useEffect, useState } from '@tarojs/taro'
import React from 'react';
import { View, Text, Navigator, Image } from '@tarojs/components'


class Waterfall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: this.transformData(props.items)
    }
  }
  componentDidUpdate (prevProps) {
    // 检查 props 中的数据是否发生变化
    if (this.props.items !== prevProps.items) {
      // 数据发生变化，转换格式
      const transformedData = this.transformData(this.props.items);
      // 你可以将转换后的数据存储在 state 中，或者直接用于渲染
      this.setState({ transformedData });
    }
  }
  transformData (items) {
    const half = Math.ceil(items.length / 2);
    console.log('items.slice(0, half), items.slice(half): ', items.slice(0, half), items.slice(half));
    this.setState({
      columns: [items.slice(0, half), items.slice(half)]
    });
  }


  render () {
    const { columns = [] } = this.state;
    console.log('columns: ', columns);
    return (
      <View className="flex">
        {columns.map((column, index) => (
          <View key={index} className="w-1/2">
            {column.map((item, idx) => (
              <View key={idx} className="mb-4">
                {/* 在这里渲染你的项目内容 */}
                <View>{item.content}</View>
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  }
}

export { Waterfall };
