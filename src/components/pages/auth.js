import { urlencoded } from 'express';
import React, { Component } from 'react';
import Login from '../auth/login';
//import loginImg from '../../../static/assets/images/auth/login.jpn';

export default class Auth extends component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bing(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        this.props.history.push('/');
    }

    handleUnsuccessfulAuth() {
        this.props.handleSuccessfulLogin();
    }

    render() {
        return (
            <div className='auth-page-wrapper'>
                <div
                    className='left-column'
                    style={{
                        //backgroungImage: 'url(${loginImg})'
                        backgroundColor: 'darkorange'
                    }}
                />
                <div className='right-column'>
                    <Login
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>
            </div>
        );
    }
}