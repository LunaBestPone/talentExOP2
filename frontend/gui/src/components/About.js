import React from 'react';
import { Card } from 'antd';

class About extends React.Component {
    render() {
        return(
            <Card title="Welcome to Talent Exchange and Meet Up Project!" bordered={false} style={{ width: '100%' }}>
                <p>This is a CS 506 Team Project by <br></br>
                Yong Jae Cho, Charles Grosz, William Laine, Jamie Lee, Zihan Wang, Xiaochao Yan, Sung Ho Youn, Hao Yuan, Zhaoqi Li</p>
                <p>The github could be found <a href="https://github.com/LunaBestPone/talentExOP2">HERE</a></p>
                <p>The purpose of this application is to build a community for
                talent sharing. You can sign up available workshops or
                create your workshops. For each workshop you registered
                to particiate, 1 learning credit will be deducted. Similarly,
                If you host a workshop, the number of credits you earn will be
                based on the number of participants. If you find bugs, whoa,
                we encourage you to open issues on our repository :)
                </p>
            </Card>
        )
    }
}

export default About;
