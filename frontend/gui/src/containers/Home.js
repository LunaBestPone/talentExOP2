import React from 'react';
import { Card } from 'antd';
import {Layout} from 'antd';
import { Carousel, Grid,Jumbotron, Button, Row, Col} from 'react-bootstrap';
import './stylesheet.css'


const {
  Header, Footer, Sider, Content,
} = Layout;

class Home extends React.Component {
    render() {

    return(

    <Grid>
    	<Row class='carousel-top'>
	    	 <Carousel>
	
			  <Carousel.Item>
			    <img width={1200} height={300} alt="900x600" src={require('../images/test-carousel-3.png')} />
			    <Carousel.Caption>
			      <h3></h3>
			      <p></p>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>;
    	</Row>

       	<hr class="line-break" />	

    	<Row>
    		<Col md={5}>
    		  <img class='img' src={require('../images/ws-1.jpg')}/>	
    		</Col>
    		<Col md={7}>
  				  <h1 className='title'>Talent</h1>
				  <p className='subtitle'>
				  Register a workshop to learn something that you do not know before, it has never been easy like this.
				  </p>
				  <p class='button-more'>
				    <Button bsStyle="primary">Browse workshop</Button>
				  </p>
    		</Col>
    	</Row>

    	<hr class="line-break" />

    	 <Row>
    	     <Col md={7}>
	  			  <h1 className='title'>Skill</h1>
				  <p className='subtitle'>
				  Register a workshop to learn something that you do not know before, it has never been easy like this.
				  </p>
				  <p class='button-more'>
				    <Button bsStyle="primary">Browse workshop</Button>
				  </p>
    		</Col>
    		<Col md={5}>
    		  <img class='img' src={require('../images/reading-book.jpeg')}/>	
    		</Col>


    	</Row>

    	<hr class="line-break" />


    	<Row>
    		<Col md={5}>
    		  <img class='img' src={require('../images/talent.jpeg')}/>	
    		</Col>
    		<Col md={7}>
				  <h1 className='title'>Study</h1>
				  <p className='subtitle'>
				  Register a workshop to learn something that you do not know before, it has never been easy like this.
				  </p>
				  <p class='button-more'>
				    <Button bsStyle="primary">Browse workshop</Button>
				  </p>
    		</Col>
    	</Row>

		<hr class="line-break" />	

    	 <Row>
	    	     <Col md={7}>
					  <h1 className='title'>Community</h1>
					  <p className='subtitle'>
					  Host a study group on Talent & Exchange and help each other to learn knolwedge from different subjects or prepare for final together.
					  </p>
					  <p class='button-more'>
					    <Button bsStyle="primary">Browse workshop</Button>
					  </p>

	    		</Col>
	    		<Col md={5}>
	    		  <img class='img' src={require('../images/reading-book.jpeg')}/>	
	    		</Col>


    	</Row>

    </Grid>

    	)
/*
    	

    	<Row>
    	  	<Col sm={{ size: 'auto', offset: 1 }}>
				<div>
					<Jumbotron>
			        <h1 className="display-3">Talent Exchange!</h1>
			        <p className="lead">This is a place where you learn, involve and have fun</p>

			        <hr className="my-2" />
			        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			         <div>
			       
			        </div>
			        <p className="lead">
			          <Button color="primary">Learn More</Button>
			        </p>
			      	</Jumbotron>

				</div>
			</Col>
			<Col sm={{ size: 'auto', offset: 1 }}>>
				<div>
					<Jumbotron>
			        <h1 className="display-3">Talent Exchange!</h1>
			        <p className="lead">This is a place where you learn, involve and have fun</p>

			        <hr className="my-2" />
			        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
			         <div>
			       
			        </div>
			        <p className="lead">
			          <Button color="primary">Learn More</Button>
			        </p>
			      	</Jumbotron>

				</div>
			</Col>
			<Col> One of three columns</Col>

		</Row>
    	
        return(
        	<div>
			    <Layout>
			      <Layout>
			        <Content>
			        	<div>
			        		<MainArea />
			        	</div>
			        </Content>
			        <Sider>Sider</Sider>
			      </Layout>
			      <Footer>Footer</Footer>
			    </Layout>


            <Card title="Welcome to Talent Exchange and Meet Up Project!" bordered={false} style={{ width: '100%' }}>
                <p>This is a CS 506 Team Project by <br></br>
                Yong Jae Cho, Charles Grosz, William Laine, Jamie Lee, Zihan Wang, Xiaochao Yan, Sung Ho Youn, Hao Yuan, Zhaoqi Li</p>
                <p>The github could be found <a href="https://github.com/LunaBestPone/talentExOP2">HERE</a></p>
            </Card>

            </div>
        )

*/
  }
    
}

export default Home;