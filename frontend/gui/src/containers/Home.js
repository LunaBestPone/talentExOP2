import React from 'react';
import { Card } from 'antd';

class Home extends React.Component {
    render() {
        return(
            <Card title="Welcome to Talent Exchange and Meet Up Project!" bordered={false} style={{ width: '100%' }}>
                <p>This is a CS 506 Team Project by <br></br>
                Yong Jae Cho, Charles Grosz, William Laine, Jamie Lee, Zihan Wang, Xiaochao Yan, Sung Ho Youn, Hao Yuan, Zhaoqi Li</p>
                <p>The github could be found <a href="https://github.com/LunaBestPone/talentExOP2">HERE</a></p>
                <p>The purpose of this application is to build a community for
                talent sharing. You can sign up available workshops or
                create your workshops. For each workshop you registered
                to particiate, 1 learning credit will be deducted. If you host a
                workshop, you will earn credits based on the number of
                participants. Currently, we only allow new workshops to start
                and end on the same day. If you have find bugs, whoa,
                we encourage you to open issues on our repository :) </p>
            </Card>
        )
    }
}

export default Home;
