/*
 * @Descripttion: 主页
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 13:57:50
 * @LastEditors: pdc
 * @LastEditTime: 2020-04-01 14:16:28
 */
import React, { Component } from 'react';
import '@/assets/css/global.less';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.wrapper = React.createRef();
  }

  render() {
    return <div className="App">
      <Layout className="App-Box">
        <Sider className="App-sider">
          <p className="system-title">PDcontrol</p>
          <div className="user">
            <img className="user-icon" src={require('./assets/img/icon/user-icon.jpg')} alt=""/>
            <div className="user-action">
              
            </div>
          </div>
        </Sider>
        <Layout className="App-main">
          <Header className="App-header"></Header>
          <Content></Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </div>
  };

}

export default App;
