/*
 * @Descripttion: 主页
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 13:57:50
 * @LastEditors: pdc
 * @LastEditTime: 2020-04-02 17:01:14
 */
import React, { Component } from 'react';
import '@/assets/css/global.less';
import { Layout, Menu, Button } from 'antd';
import { UserOutlined, BellOutlined, MailOutlined, ExportOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { initProps } from '@/assets/js/tools';
import userInfo from '@/assets/json/getUserInfo';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

/* 菜单类 */
class MenuItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      childrenType: 1
    };
  }

  MenuItem(array, props, index) {
    return array.map((a) => {
      let obj = initProps(a, props);
      if (index < this.state.childrenType && obj.children && obj.children.length > 0) {
        return <SubMenu key={obj.id} title={obj.title}>
          {this.MenuItem(obj.children, props, index + 1)}
        </SubMenu>
      } else {
        return <Menu.Item key={obj.id}>{obj.title}</Menu.Item>
      }
    })
  }

  initMenu() {
    const { menuList, menuProps } = this.props;
    return this.MenuItem(menuList, menuProps, 0);
  }
  render() {
    return <Menu mode="inline" theme="dark">{this.initMenu()}</Menu>;
  }
}


/* 主页 */
class App extends Component {

  constructor() {
    super();
    this.state = {
      collapsed: false,
      menuProps: {
        id: 'id',
        title: 'authorityName',
        children: 'childAuthorities'
      },
      menuList: []
    }
  }

  componentDidMount = () => {
    this.setState({ menuList: userInfo.data.menuPermissions });
  }

  isCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render = () => {
    const webLogo = require('./assets/img/icon/logo.svg');
    const userIcon = require('./assets/img/icon/user-icon.jpg');
    const { menuList, menuProps, collapsed } = this.state;
    const closeIcon = collapsed ? <MenuFoldOutlined style={{ fontSize: 22 }} /> : <MenuUnfoldOutlined style={{ fontSize: 22 }} />;
    return <div className="App">
      <Layout className="App-Box">
        <Header className="App-header">
          <div className="system-title">
            <img src={webLogo} className="App-logo" alt="logo" />
            PDcontrol
          </div>
          <div className="App-close">
            <Button type="primary" onClick={this.isCollapsed} style={{ marginBottom: 16 }}>
              {closeIcon}
            </Button>
          </div>
          <div className="App-Tabs">
          </div>
        </Header>
        <Layout className="App-main">
          <Sider trigger={null} className="App-sider" collapsible collapsed={this.state.collapsed}>
            <div className="user">
              <img className="user-icon" src={userIcon} alt="" />
              {collapsed || <p className="user-name">pdc</p>}
              {collapsed || <div className="user-action">
                <UserOutlined className="action-font" />
                <BellOutlined className="action-font" />
                <MailOutlined className="action-font" />
                <ExportOutlined className="action-font" />
              </div>}
            </div>
            <div className="sider-Menu">
              <MenuItem menuList={menuList} menuProps={menuProps} />
            </div>
          </Sider>
          <Layout className="App-content">
            <Content></Content>
            <Footer></Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  };

}

export default App;
