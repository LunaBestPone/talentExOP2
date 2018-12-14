import React from 'react';
import { Card } from 'antd';
import {Layout} from 'antd';
import { Carousel, Grid,Jumbotron, Button, Row, Col} from 'react-bootstrap';
import './stylesheet.css';





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
                <img width={1200} height={300} alt="900x600" src={require('../images/beginning.png')} />
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
              <img class='img' src={require('../images/learn.jpeg')}/>    
            </Col>
            <Col md={7}>
                  <h1 className='title'>Learn</h1>
                  <p className='subtitle'>
                  At talent & Exchange, you can learn anything you want from all the workshops near you for free. It's never too late to learn a new skill, no matter it's piano or spanish!
                  </p>
                  <p class='button-more'>
                    <Button bsStyle="primary">Browse workshop</Button>
                  </p>
            </Col>
        </Row>

        <hr class="line-break" />

         <Row>
             <Col md={7}>
                  <h1 className='title'>Involve</h1>
                  <p className='subtitle'>
                  By registering workshops, you get the opportunities to involve in the community and make more friends. Too shy to say "Hi" to them directly? Come to have a workshop together. You and your community are connected by Talent & Exchange.
                  </p>
                  <p class='button-more'>
                    <Button bsStyle="primary">Browse workshop</Button>
                  </p>
            </Col>
            <Col md={5}>
              <img class='img' src={require('../images/involve.jpeg')}/>   
            </Col>


        </Row>

        <hr class="line-break" />


        <Row>
            <Col md={5}>
              <img class='img' src={require('../images/enjoy.jpeg')}/> 
            </Col>
            <Col md={7}>
                  <h1 className='title'>Enjoy</h1>
                  <p className='subtitle'>
                  Enjoy making a new friend, enjoy learning a new skill, enjoy embracing a bigger world. At Talent & Exchagne, alwasy export more, and enjoy more!
                  </p>
                  <p class='button-more'>
                    <Button bsStyle="primary">Browse workshop</Button>
                  </p>
            </Col>
        </Row>

        <hr class="line-break" />   


    </Grid>

        )
  }
    
}

export default Home;