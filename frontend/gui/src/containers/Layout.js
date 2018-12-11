import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Link, withRouter } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  state = {
    page_name: "Home",
    userName: 'default'
  }
  updatePage(pageName){
    this.setState({
      page_name: pageName
    })
  }
  HandleLogoutAndUpdatePage(pageName){
    //  this.props.logout,
    this.updatePage(pageName)
  }
  // UpdateUserName(user){
  //   this.setState({
  //     userName: user
  //   })
  // }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['0']}
            style={{ lineHeight: '64px', float: 'left' }}
          >
            <Menu.Item key="1" onClick = {() => this.updatePage("Home")}><Link to="/">Talent Exchange</Link></Menu.Item>
            {
            this.props.isAuthenticated ?
            <Menu.Item key="2" onClick = {this.props.logout} >Logout</Menu.Item>
            :
            <Menu.Item key="2" onClick = {() => this.updatePage("Log In")}><Link to="/login/">Log in</Link></Menu.Item>
            }
            <Menu.Item key="3" onClick = {() => this.updatePage("Sign Up")}><Link to="/signup/">Sign up</Link></Menu.Item>
            <Menu.Item key="4" onClick={() => this.updatePage("Workshop List")}><Link to="/workshop/">Workshop</Link></Menu.Item>
            <Menu.Item key="5" onClick={() => this.updatePage("My Workshops")}><Link to="/MyWorkshopList/">My Workshops</Link></Menu.Item>
            <Menu.Item key="6" onClick = {() => this.updatePage("About Us")}><Link to="/about/">About us</Link></Menu.Item>
            <Menu.Item key="7" onClick = {() => this.updatePage("profile")}><Link to="/profile/">Profile</Link></Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px' }}>
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

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
