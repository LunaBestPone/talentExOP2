import React from 'react';
import User from '../components/User';
import axios from 'axios';
import { Card, Col, Row } from 'antd';

	const tabList = [{
	  key: 'tab1',
	  tab: 'Personal Information',
	}, {
	  key: 'tab2',
	  tab: 'Involvement Record',
	}];

	const contentList = {
	  tab1: 

	<div>

	  <div style={{ background: '#ECECEC', padding: '30px' }}>
	    <Row gutter={16}>
	      <Col span={8}>
	        <Card title="E-mail" bordered={false}>zli484@wisc.edu</Card>
	      </Col>
	      <Col span={8}>
	        <Card title="Age" bordered={false}>21</Card>
	      </Col>
	      <Col span={8}>
	        <Card title="Rating" bordered={false}>4.9</Card>
	      </Col>
	    </Row>
	  </div>

	  <div style={{ background: '#ECECEC', padding: '30px' }}>
	    <Row gutter={16}>
	      <Col span={8}>
	        <Card title="Learning Credit" bordered={false}>50</Card>
	      </Col>

	    </Row>
	  </div>


	</div>,


	  	
	  tab2: <p>content2</p>,
	};
	
	class profile extends React.Component {
	  state = {
	    key: 'tab1',


	  }

	  onTabChange = (key, type) => {
	    console.log(key, type);
	    this.setState({ [type]: key });
	  }

	  render() {
	    return (
	      <div>
	      <h1> User Profile </h1>

	        <Card

	          style={{ width: '100%' }}
	       
	          extra={<a href="#">More</a>}
	          tabList={tabList}
	          activeTabKey={this.state.key}
	          onTabChange={(key) => { this.onTabChange(key, 'key'); }}

	        >

	          {contentList[this.state.key]}
	        </Card>


	        <br /><br />

	      </div>
	    );
	  
	}
}
export default profile;
