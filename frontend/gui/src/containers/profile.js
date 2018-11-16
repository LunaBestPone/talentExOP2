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

	  /*
	  <div>
		  <div style={{ background: '#ECECEC', padding: '30px' }}>
			  <Card title="Card title" bordered={false} style={{ width: 300 }}>
			  <p>Card content</p>
			  <p>Card content</p>
			  <p>Card content</p>
			  </Card>
		  </div>

		 <div style={{ background: '#ECECEC', padding: '30px' }}>
			  <Card title="Card title" bordered={false} style={{ width: 300 }}>
			  <p>Card content</p>
			  <p>Card content</p>
			  <p>Card content</p>
			  </Card>
		  </div>
	</div>
	*/

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


	</div>
	  ,

/*
	  	<div>
	  	    <div className = 'email'>User Email: 15
	  	    </div>
	  	    <div className = 'age'>Age: 16
	  	    </div>
	  	    <div className = 'user_rating'>Your Rating: 17 
	  	    </div>
	  	    <div className = 'learning_credit'>Current Learnign Credit: 18
	  	    </div>
	  	</div>

	  	*/

	  		


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

/*
class profile extends React.Component {
	render(){
		return(
			<h1> It is working</h1>
		);
	}
}

export default profile;

	const tabList = [{
	  key: 'tab1',
	  tab: 'tab1',
	}, {
	  key: 'tab2',
	  tab: 'tab2',
	}];

	const contentList = {
	  tab1: <p>content1</p>,
	  tab2: <p>content2</p>,
	};

	const tabListNoTitle = [{
	  key: 'article',
	  tab: 'article',
	}, {
	  key: 'app',
	  tab: 'app',
	}, {
	  key: 'project',
	  tab: 'project',
	}];

	const contentListNoTitle = {
	  article: <p>article content</p>,
	  app: <p>app content</p>,
	  project: <p>project content</p>,
	};

	class profile extends React.Component {
	  state = {
	    key: 'tab1',
	    noTitleKey: 'app',
	  }

	  onTabChange = (key, type) => {
	    console.log(key, type);
	    this.setState({ [type]: key });
	  }

	  render() {
	    return (
	      <div>
	        <Card

	          style={{ width: '100%' }}
	          title="Card title"
	          extra={<a href="#">More</a>}
	          tabList={tabList}
	          activeTabKey={this.state.key}
	          onTabChange={(key) => { this.onTabChange(key, 'key'); }}

	        >
	          {contentList[this.state.key]}
	        </Card>
	        <br /><br />
	        <Card
	          style={{ width: '100%' }}
	          tabList={tabListNoTitle}
	          activeTabKey={this.state.noTitleKey}
	          onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
	        >
	          {contentListNoTitle[this.state.noTitleKey]}
	        </Card>
	      </div>
	    );
	  
	}


/*

	componentDidMount() {
		let workshop_name = this.props.match.params.ws_name;
		axios.get('http://127.0.0.1:8000/api/workshop/')
		.then(res => {
			this.setState({
				workshops: res.data
			});
		})
	}

	render(){
		return(

			state = {
				workshops: []
			}


			
			<div>

				<Card title="Welcome to Talent Exchange and Meet Up Project!" bordered={false} style={{ width: '100%' }}>
				<p>This is a user profile page </p>

					<List>
					style={{width:'40%', right: '-30%'}}
					grid={{ gutter: 16, column: 1 }}
					dataSource={this.state.workshops}
					renderItem=
						{item => (
							<List.Item>
							<Workshop
							ws_id = {item.ws_id}
							ws_name = {item.ws_name}
							host_user = {item.host_user}
							min_cap = {item.min_cap}
							max_cap = {item.max_cap}
							is_active = {item.is_active}
							description = {item.description}
							start_date_time = {item.start_date_time}
							end_date_time = {item.end_date_time}
							is_detailed = {false} />

							</List.Item>
						)}
					</List>

					<User>
					email = {'12345@wisc.edu'}
					age = {13}
					user_rating = {'high'}
					learning_credit = {10}
					</User>

				</Card>

		    </div>
			)

			
	}
	
}
*/
