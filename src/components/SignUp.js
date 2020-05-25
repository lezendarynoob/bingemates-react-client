import React, { Component } from 'react';
import '../assets/styles/SignUp.css';
import { Link } from 'react-router-dom';
import boy1 from '../assets/svg/boy1.svg';
import girl from '../assets/svg/girl.svg';
import girl1 from '../assets/svg/girl1.svg';
import man from '../assets/svg/man.svg';
import man1 from '../assets/svg/man1.svg';
import man2 from '../assets/svg/man2.svg';
import man3 from '../assets/svg/man3.svg';
import man4 from '../assets/svg/man4.svg';
import transport from '../config/transport';
import { connect } from 'react-redux';
import login from '../actions/login';

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        profilePicURI: '',
        bio: '',
        previous: '',
        message: ''
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let res = await transport.post('http://localhost:4000/auth/signup', {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                profilePicURI: this.state.profilePicURI,
                bio: this.state.bio
            });
            if(res.data.message === 'done'){
                await transport.post('http://localhost:4000/auth/login', {
                    username: this.state.username,
                    password: this.state.password
                });
                this.props.login();
                this.props.history.push('/');
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

    handleClick = e => {
        e.target.classList.toggle('yellow');
        this.state.previous && this.state.previous.classList.toggle('yellow');
        this.setState({
            previous: e.target,
            profilePicURI : e.target.id
        });
    };
    
    render() {
        return (
            <div className = 'signup  grid' >
                <div className = 'header'>
                    <h2 className = 'logo'> bingeMates </h2>
                </div>
                <h1> Sign Up </h1>
                <p> Already a member? <Link to = '/'> Log In </Link> </p>
                <p> Choose your avatar </p>

                <div className = 'avatar-box grid'>
                    <img src = {boy1} id = 'boy1' alt = '' onClick = {this.handleClick} />
                    <img src = {girl} id = 'girl' alt = '' onClick = {this.handleClick} />
                    <img src = {girl1} id = 'girl1' alt = '' onClick = {this.handleClick} />
                    <img src = {man} id = 'man' alt = '' onClick = {this.handleClick} />
                    <img src = {man1} id = 'man1' alt = '' onClick = {this.handleClick} />
                    <img src = {man2} id = 'man2' alt = '' onClick = {this.handleClick} />
                    <img src = {man3} id = 'man3' alt = '' onClick = {this.handleClick} />
                    <img src = {man4} id = 'man4' alt = '' onClick = {this.handleClick} /> 
                </div>
                
                <form className = 'grid' onSubmit = {this.handleSubmit} >
                    <p className = {this.state.message.length > 0 ? 'red' : ''}> {this.state.message} </p>
                    <input id = 'email' type = 'text' placeholder = 'Email' required onChange = {this.handleChange} />
                    <input id = 'username' type = 'text' placeholder = 'Username' required onChange = {this.handleChange} />
                    <input id = 'password' type = 'password' placeholder = 'Password' required onChange = {this.handleChange} />
                    <textarea id = 'bio' placeholder = 'Bio ... tell us something about yourself!' onChange = {this.handleChange} />
                    <input className = 'btn' type = 'submit' value = 'Enter' />
                </form>

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
    };
};

export default connect(null, mapDispatchToProps)(SignUp);