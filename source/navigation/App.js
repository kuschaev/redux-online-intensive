// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Pages
import { Feed, Profile, Login, Signup, NewPassword } from '../pages';

// Instruments
import { book } from './book';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
    };
};

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
            <Switch>
                <Route component = { Feed } path = { book.feed } />
                <Route component = { Profile } path = { book.profile } />
                <Route component = { NewPassword } path = { book.newPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        ) : (
            <Switch>
                <Route component = { Login } path = { book.login } />
                <Route component = { Signup } path = { book.signUp } />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
