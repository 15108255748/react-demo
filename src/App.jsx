/*
 * @Descripttion: 主页
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 13:57:50
 * @LastEditors: pdc
 * @LastEditTime: 2020-03-31 16:41:50
 */
import React, { Component } from 'react';
import '@/assets/css/global.css';
import { Button } from 'antd';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.wrapper = React.createRef()
  }

  render() {
    return <div className="App" >
      <Button ref={this.wrapper} type="primary">测试</Button>
    </div>
  };
}

export default App;
