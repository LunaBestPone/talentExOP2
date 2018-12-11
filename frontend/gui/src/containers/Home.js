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
              <img class='img' src={require('../images/workshop-1.jpg')}/>    
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
              <img class='img' src={require('../images/workshop-1.jpg')}/>   
            </Col>


        </Row>

        <hr class="line-break" />


        <Row>
            <Col md={5}>
              <img class='img' src={require('../images/workshop-1.jpg')}/> 
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
                  <img class='img' src={require('../images/workshop-1.jpg')}/>   
                </Col>


        </Row>

    </Grid>

        )
  }
    
}

export default Home;