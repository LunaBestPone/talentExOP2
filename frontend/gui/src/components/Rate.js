import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from 'antd';
import axios from 'axios';

class Rate extends React.Component {
    constructor() {
        super();
        this.state = {
            rating: 0,
        }
    }
    onStarClick(nextValue, prevValue, name){
        this.setState({
            rating: nextValue,
        })
    }

    handleSubmit = () => {
        let id = this.props.location.param1
        let ws_id = this.props.location.param4
        console.log(this.state.rating);
        axios.get('http://127.0.0.1:8000/api/user/' + id).then(res => {
            axios.patch('http://127.0.0.1:8000/api/user/' + id  + '/updatelc', {
                user_rating: (res.data.user_rating + this.state.rating) / 2,
                
            }).then(res => {
                axios.get('http://127.0.0.1:8000/api/enrollment/?ws_id=' + ws_id + '&enrolled_user=' + id).then(res => {
                    axios.patch('http://127.0.0.1:8000/api/enrollment/detail/' + res.data[0].id + '/update/', {
                        is_rated: true
                    })
                })
                console.log(res);
                console.log(res.data);
                window.alert("success")
                this.props.history.push("/workshop/");
            }).catch(err => {
                window.alert("didn't work")
                console.log(err)
            })
        })
    }  
    render(){
        let user = this.props.location.param2
        let host = this.props.location.param3
        return (
            <div>
                <div>
                    <h1>How was your workshop? </h1> 
                    <br/>
                    
                </div>
                <div style={{zoom: '150%', textAlign: 'center'}}>
                Please rate the Host {host}: <br/>
                <StarRatingComponent
                    name={user} /* name of the radio input, it is required */
                    value={this.state.rating} /* number of selected icon (`0` - none, `1` - first) */
                    starCount={5} /* number of icons in rating, default `5` */
                    onStarClick={this.onStarClick.bind(this)}
                />
                </div>
                <div className="submit" style={{textAlign: 'center'}}>
                    <Button onClick={this.handleSubmit}>Submit</Button>
                </div>
            </div>
        );
    }
}

export default Rate;