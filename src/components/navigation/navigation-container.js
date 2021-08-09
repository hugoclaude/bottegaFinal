import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return(
            <div className='link-wrapper'>
                <NavLink to={route} activeClassName='nav-link-active'>
                    {linkText}
                </NavLink>
            </div>
        );
    };

    const handleSignOut = () => {
        axios
            .delete('https://api.devcamp.space/logout', { withCredenatilas: true })
            .then(response => {
                if (response.status === 200) {
                    props.history.pysh('/');
                }
                return response.data;
            })
            .catch(error => {
                console.log('Error signing out', error);
            });
    };

    return (
        <div className='nav-wrapper'>
            <div className='left-side'>
                <div className='nav-link-wrapper'>
                    <NavLink exact to='/' activeClassName='nav-link-active'>
                        Home
                    </NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink('/shop', 'Shop')
                ) : null}

                {props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink('/checkout', 'Checkout')
                ) : null}

                {props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink('/profile', 'Profile')
                ) : null}

                <div className='nav-link-wrapper'>
                    <NavLink exact to='/signup' activeClassName='nav-link-active'>
                        Signup
                    </NavLink>
                </div>
            </div>

            <div className='right-side'>
                {userName}
                {props.loggedInStatus === 'LOGGED_IN' ? (
                    <a onClick={handleSignOut}>
                        <FontAwesomeIcon icon='sign-out-alt' />
                    </a>
                ) : null }
            </div>            
        </div>
    );
};

export default withRouter(NavigationComponent);