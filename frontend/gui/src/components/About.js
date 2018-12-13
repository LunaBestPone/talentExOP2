import React from 'react';
import { Card } from 'antd';
import { Carousel, Grid,Jumbotron, Button, Row, Col} from 'react-bootstrap';


class About extends React.Component {
    render() {
        return(

            <Grid>
                <Row>
                    <Col md={7}>
                          
                            <p class='title'>About us</p>
                            <p>The purpose of this application is to build a community for
                            talent sharing. You can sign up available workshops or
                            create your workshops. For each workshop you registered
                            to particiate, 1 learning credit will be deducted. Similarly,
                            If you host a workshop, the number of credits you earn will be
                            based on the number of participants. If you find bugs, whoa,
                            we encourage you to open issues on our repository :)
                            </p>

                            <p>The github could be found <a href="https://github.com/LunaBestPone/talentExOP2">HERE</a></p>
                      
                    </Col>
                    <Col md={5}>
                         <img class='img' src={require('../images/workshop-1.jpg')}/>   
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default About;
