import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// import NavigationContainer from './navigation/navigation-container';
// import Auth from './pages/auth';
// import Signup from './pages/signup';
// import Shop from './pages/shop';
// import Checkout from './pages/checkout';
// import ThankYou from './pages/thankyou';
// import Profile from './pages/profile';

export default class App extends Component {
    constructor(props) {
        super(props);
    
        Icons();
        this.state = {
          loggedInStatus: "NOT_LOGGED_IN",
        };
    
        this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
        this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
        this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
      }
    
      handleSuccessfulLogin() {
        this.setState({
          loggedInStatus: "LOGGED_IN",
        });
      }
    
      handleUnsuccessfulLogin() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
        });
      }
    
      handleSuccessfulLogout() {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
        });
      }
    
    checkLoginStatus() {
        return axios
        // use user.js from './actions/users' for the get statement
        .get("https://api.devcamp.simport pace/logged_in", {
            withCredentials: true,
          })
          .then((response) => {
            const loggedIn = response.data.logged_in;
            const loggedInStatus = this.state.loggedInStatus;
    
            if (loggedIn && loggedInStatus === "LOGGED_IN") {
              return loggedIn;
            } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
              this.setState({
                loggedInStatus: "LOGGED_IN",
              });
            } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
              this.setState({
                loggedInStatus: "NOT_LOGGED_IN",
              });
            }
          })
          .catch((error) => {
            console.log("Error", error);
          });
      }

      componentDidMount() {
        this.checkLoginStatus();
      }

    //   authorizedPages() {
    //       return [
    //           <Route
    //             key="shop"
    //             path="./pages/shop"
    //             component={Shop}
    //           />,
    //           <Route
    //             key="checkout"
    //             path="./pages/checkout"
    //             component={Checkout}
    //           />,
    //           <Route
    //             key="thank-you"
    //             path="./pages/thank-you"
    //             component={ThankYou}
    //           />,
    //           <Route
    //             key="profile"
    //             path="./pages/profile"
    //             component={Profile}
    //           />,
    //       ];
    //   }
  render() {
    return (
      <div className='container'>
          <Router>
              <div>
                <NavigationContainer
                    loggedInStatus={this.state.loggedInStatus}
                    handleSuccessfulLogin={this.handleSucessfulLogout}
                />

                <Switch>
                    {/* <Route exact path='/' component={Home} />
                    <Route
                        path='/'
                        render={(props) => (
                            <Auth
                                {...props}
                                handleSuccessfulLogin={this.handleSuccessfulLogin}
                                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                            />
                        )}
                    />
                    <Route path='/signup' component={Signup} /> */}
                    {/* shop checkout thank you profile */}
                    {/* <Route
                        path='/shop'
                        render={(props) => (
                            <Shop {...props} loggedInStatus={this.state.loggedInStatus} />
                        )}
                    />
                    <Route
                        path='/checkout'
                        render={(props) => (
                            <Checkout {...props} loggedInStatus={this.state.loggedInStatus} />
                        )}
                    />
                    <Route
                        path='/thankyou'
                        render={(props) => (
                            <ThankYou {...props} loggedInStatus={this.state.loggedInStatus} />
                        )}
                    />
                    <Route
                        path='/profile'
                        render={(props) => (
                            <Shop {...props} loggedInStatus={this.state.loggedInStatus} />
                        )}
                    /> */}

                    {this.state.loggedInStatus === 'LOGGED_IN'
                        ? this.authorizedPages()
                        :null}
                </Switch>
              </div>
          </Router>
      </div>
    );
  }
}
 