import React from 'react';
import logout from '../actions/logout';
import { connect } from 'react-redux';


const Home = (props) =>{
    return(
        <div className = 'home grid'>
            <h1> Welcome to home! </h1>
            <button onClick = {props.logout}> LOGOUT </button>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(null, mapDispatchToProps)(Home);