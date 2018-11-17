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

	/*
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
	        <Card title="Learning Credit" bordered={false}>{50}</Card>
	      </Col>

	    </Row>
	  </div>


	</div>,


	  	
	  tab2: <p>
	  Nothing
	  </p>,
	};
	*/
	
	class profile extends React.Component {

	  state = {
	    key: 'tab1',
	    user: ''
	  }




	  componentDidMount(){
	  	axios.get('http://127.0.0.1:8000/api/user/2')
	  		.then(res =>{
	  			console.log(res)

	  			this.setState({
	  				user:res.data
	  			})

	  			/*this.setState({
	  				user: res.data.
	  			})
	  			*/
	  		})
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

	        <div>

	        <div style={{ background: '#ECECEC', padding: '30px' }}>
	        	<Row gutter={16}>
	        		<Col span={8}>
	       			 	<Card title="E-mail" bordered={false}>{this.state.user.email}</Card>
	        		</Col>
	        		<Col span={8}>
	        			<Card title="Age" bordered={false}>{this.state.user.age}</Card>
	        		</Col>
	       			<Col span={8}>
	        			<Card title="Rating" bordered={false}>{this.state.user.user_rating}</Card>
	        		</Col>
	        	</Row>
	        </div>

	        <div style={{ background: '#ECECEC', padding: '30px' }}>
		       	 <Row gutter={16}>
		       		 <Col span={8}>
		        		<Card title="Learning Credit" bordered={false}>{this.state.user.learning_credit}</Card>
		       		 </Col>
		        </Row>
	        </div>


	        </div>
	          
	          
	          
	        </Card>

	        <br /><br />

	      </div>
	    );
	  
	}
}
export default profile;
