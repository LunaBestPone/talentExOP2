import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', float: 'right' }}
          >
            {
            this.props.isAuthenticated ?
            <Menu.Item key="1" onClick ={this.props.logout}>Logout</Menu.Item>
            :
            <Menu.Item key="1"><Link to="/login/">Log in</Link></Menu.Item>
            }

            <Menu.Item key="2"><Link to="/signup/">Sign up</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about/">About us</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to='/home'>Home(ConstView)</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(CustomLayout);
