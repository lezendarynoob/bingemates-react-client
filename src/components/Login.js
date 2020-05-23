import React, { Component } from 'react';
import '../assets/styles/Login.css';
import { Link } from 'react-router-dom';


class Login extends Component{
    state = {
        user: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);

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

export default Login;