import React from 'react';
import { Card } from 'antd';

class Home extends React.Component {
    render() {
        return(
            <Card title="Welcome to Talent Exchange and Meet Up Project!" bordered={false} style={{ width: '100%' }}>
                <p>This is a CS 506 Team Project by <br></br>
                Yong Jae Cho, Charles Grosz, William Laine, Jamie Lee, Zihan Wang, Xiaochao Yan, Sung Ho Youn, Hao Yuan</p>
                <p>The github could be found <a href="https://github.com/LunaBestPone/talentExOP2">HERE</a></p>
            </Card>
        )
    }
}

export default Home;