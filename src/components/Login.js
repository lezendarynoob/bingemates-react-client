import React, { Component } from 'react';
import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';
import transport from '../config/transport';
import { connect } from 'react-redux';
import login from '../actions/login';


class Login extends Component{
    state = {
        user: '',
        password: '',
        message: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await transport.post('http://localhost:4000/auth/login', {
                username: this.state.user,
                password: this.state.password
            });
            if(res.data.message === 'done'){
                this.props.login();
            }
            else{
                this.setState({
                    message: res.data.message
                });
            }
        }
        catch(err){
            console.log(err);
        }
        

    };
    handleChange = e => {
        this.setState({
            [e.target.id] : e.target.value 
        });
    };
    render(){
        return(
            <div className = 'login grid'>
                <div className = 'header'>
                    <h2 className = 'logo'> bingeMates </h2>
                </div>
                <h1> Login </h1>
                <form onSubmit = {this.handleSubmit} className = 'grid'>
                    <p className = {this.state.message.length > 0 ? 'red' : ''}> {this.state.message} </p>
                    <input id = 'user' onChange = {this.handleChange} type = 'text' placeholder = 'Username' name = 'username' required />
                    <input id = 'password' onChange = {this.handleChange} type = 'password' placeholder = 'Password' name = 'password' required />
                    <input type = 'submit' value = 'Enter' className = 'btn' />
                     
                </form>
                <p> New to bingeMates?  <Link to = '/auth/signup'> Sign Up </Link> </p>
                <div className = 'yellow' >
                    <p className = 'yellow'> Hey! Are you someone who loves to watch movies and shows? <br />
                    If yes, you're at the right place! bingeMates can help you to create and track your watchlist and even to find movies and shows according to your personal taste.
                    <br /> But the best thing is you can find people having similar taste as yours and share your awesome fan theories with them. <br />
                    So what are you waiting for?<br /><Link to = '/auth/signup'> Find your bingeMates NOW! </Link></p>
                </div>
                <hr />
                <div className = 'footer' >
                    <span> Powered by </span> <br /> <br />
                    <span className = 'tmdb'> The Movie DB </span>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login())
    }
};

export default connect(null, mapDispatchToProps)(Login);