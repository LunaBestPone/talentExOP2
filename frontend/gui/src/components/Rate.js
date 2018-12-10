import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { List, Card, Button } from 'antd';
import axios from 'axios';

class Rate extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 0,
            stars: [],
            loading: true
        }
    }
    onStarClick(nextValue, prevValue, name){
        var stars = this.state.stars;
        console.log(name)
        for(var i = 0; i < stars.length; i++){
            if(stars[i].name == name){
                stars[i].rating = nextValue;
                console.log(stars[i].rating)

                break;
            } else if (stars[i].name.includes(" (Host)")){
                stars[i].rating = nextValue;
            }
        }
        // console.log(stars[i].rating)
        this.setState({
            rating: nextValue,
            stars: stars
        })
    }
    handleBack(){
        this.props.history.push("/workshop/");
    }
    handleSubmit = () => {
        console.log(this.state.rating)
        for(let i = 0; i < this.state.stars.length; i++){
            let id = this.state.stars[i].id;
            let score = this.state.stars[i].rating;
            console.log(score);
            axios.get('http://127.0.0.1:8000/api/user/' + id).then(res => {
                axios.patch('http://127.0.0.1:8000/api/user/' + id  + '/updatelc', {
                    user_rating: (score + res.data.user_rating) / 2
                }).then(res => {
                    console.log(res);
                    console.log(res.data);
                    window.alert("success")
                }).catch(err => {
                    window.alert("didn't work")
                    console.log(err)
                })
            })
        }
    }  
    componentDidMount() {
        // if(prevState.stars !== this.state.stars){
            let enrolled_users = this.props.location.param1
            let user = this.props.location.param2
            let host = this.props.location.param3
            let star = this.state.stars
            console.log(enrolled_users, user)
            // var rating = [];
            if(enrolled_users != undefined){
                let index = 0;
                for(let i = 0; i < enrolled_users.length; i++){
                    if(enrolled_users[i].user != user){
                        console.log(enrolled_users[i].user + ", " + host)
                        var jsx = 
                            (<div style={{zoom: '150%'}} key={i}>
                            <StarRatingComponent
                            key={i}
                            name={enrolled_users[i].user} /* name of the radio input, it is required */
                            value={this.state.rating} /* number of selected icon (`0` - none, `1` - first) */
                            starCount={5} /* number of icons in rating, default `5` */
                            onStarClick={this.onStarClick.bind(this)}
                            />
                            </div>);
                        console.log(jsx);
                        let title =  enrolled_users[i].user == host ? enrolled_users[i].user + " (Host)" : enrolled_users[i].user
                        var x = {
                            name: title,
                            id: enrolled_users[i].id,
                            rating: 0,
                            item:jsx, }
                            // <div key={i}>
                            // <Card title= {enrolled_users[i].user == host ? enrolled_users[i] + "(Host)" : enrolled_users[i]}>
                            // <div style={{zoom: '150%'}}>
                            // <StarRatingComponent
                                
                            //     key={i}
                            //     name={enrolled_users[i].user} /* name of the radio input, it is required */
                            //     value={this.state.rating[index]} /* number of selected icon (`0` - none, `1` - first) */
                            //     starCount={5} /* number of icons in rating, default `5` */
                            //     onStarClick={this.onStarClick.bind(this)}
                            // />
                            // </div>
                            // </Card>
                            // <br key={i + "break"}/>
                            // </div>}
                            
                        this.setState({
                            
                            stars: this.state.stars.concat(x)
                        })
                        star.push(x)
                            // {
                            // name: enrolled_users[i].user,
                            // id: enrolled_users[i].id,
                            // item:
                            // <div  key={i}>
                            // <Card title= {enrolled_users[i].user == host ? enrolled_users[i] + "(Host)" : enrolled_users[i]}>                            <div style={{zoom: '150%'}}>
                            // <StarRatingComponent
                                
                            //     key={i}
                            //     name={enrolled_users[i].user} /* name of the radio input, it is required */
                            //     value={this.state.rating[index]} /* number of selected icon (`0` - none, `1` - first) */
                            //     starCount={5} /* number of icons in rating, default `5` */
                            //     onStarClick={this.onStarClick.bind(this)}
                            // />
                            // </div>
                            // </Card>
                            // <br key={i + "break"}/>
                            // </div>}
                        console.log(star)
                        index++;
                    }
                }
                
                
                this.setState({
                    loading: false
                })
                
                
            }
        // }
    }
    render(){
        // console.log(this.props.location.param1)
        var stars = [];
        if(this.state.loading) {
            return 'Loading...'
        } 
        for(let i = 0; i < this.state.stars.length; i++){
            stars.push(this.state.stars[i].item);
        }
        console.log(stars)
        console.log(this.state.rating)
        return (
            <div>
                <div>
                    {stars.length >= 1 ? <h1>Please Rate the Following People: </h1> : <h1>You have No one to Rate</h1>}
                </div>
                <div >
                    {console.log(this.state.stars.length)}
                    {/* <List
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={stars}
                        renderItem={item => (
                            <List.Item>
                            <Card
                                title= {this.props.location.param2}>
                                {item}
                                </Card>
                            </List.Item>
                        )}
                        /> */}
                    <List
                        grid={{ gutter: 16, column: 1 }}
                        dataSource={this.state.stars}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                title= {item.name}>
                                {item.item}
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    {stars.length >= 1 ? <Button onClick={this.handleSubmit}>Submit</Button> : <Button onClick={this.handleBack}>Go Back</Button>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
}

export default connect(mapStateToProps)(Rate);