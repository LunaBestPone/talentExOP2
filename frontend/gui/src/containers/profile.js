import React from 'react';
import User from '../components/User';
import axios from 'axios';
import { Card, Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';


const tabList = [{
	key: 'tab1',
	tab: 'Personal Information',
}];



class profile extends React.Component {
	constructor(props, context) {
    super(props, context);
    this.state = {
      isRegistered: false,
      user:{}
    };

  }
	// state = {
	// 	key: 'tab1',
	// 	user: ''
	// }

	componentDidMount() {
		if (this.props.isAuthenticated) {
			axios.get('http://127.0.0.1:8000/api/user/' + this.props.user)
				.then(res => {
					console.log(res)
					this.setState({
						user: res.data
					})
				})
		}
		else {
			window.alert("Please log in");
      this.props.history.push("/login");
		}
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

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.token !== null,
		user: state.user
	}
}

export default connect(mapStateToProps)(profile);

