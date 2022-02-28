import React, { useState, useEffect, useCallback, Component } from 'react'
import LoginMain from './components/LoginMain';
import Routes from './Routes';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useLocation,
  useHistory,
  withRouter
} from "react-router-dom";

import jwt_decode from "jwt-decode";
import SendmailTransport from 'nodemailer/lib/sendmail-transport'
const jwt = require('jsonwebtoken');

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    //this.logOut = this.logOut.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      loginStatus: false,
      users: JSON.parse(localStorage.getItem("user"))

    };
    // alert(12);

    // const decodedJwt = parseJwt(this.state.users);
    // console.log(decodedJwt);
    // if (decodedJwt.exp * 1000 < Date.now()) {
    //   alert();
    // }else{
    //   alert(2);
    // }


  }


  // props.history.listen(() => {
  //     const user = JSON.parse(localStorage.getItem("token"));
  //     if (user) {
  //       const decodedJwt = parseJwt(user.token);
  //       if (decodedJwt.exp * 1000 < Date.now()) {
  //         props.logOut();
  //         this.setStatus({ loginStatus: true });
  //       }
  //     }
  //   });

  //  const  useras = JSON.parse(localStorage.getItem("twk_token"));
  //   alert(useras)
  //   if (useras) {
  //     const decodedJwt = parseJwt(useras.token);
  //       this.setStatus({ loginStatus: true });
  //     }
  //   }



  //     if(this.state.users){
  //   <Routes />
  // }
  // else{
  //   <Switch>
  //      <Route path="/">
  //           <LoginMain />
  //         </Route>
  //   </Switch>
  // }

  //   </div>


  // logOut() {

  //   this.setState({
  //     showModeratorBoard: false,
  //     showAdminBoard: false,
  //     currentUser: undefined,
  //   });
  // }
  render() {
    let {
      users
    } = this.state;

    return (
      <div className="App">
        {this.state.users ? (
          <Router>
            <Routes />
          </Router>
        ) : (
          <Router>
            <Switch>
                <Route path="/">
                  <LoginMain />
                </Route>
              </Switch>
            </Router>
        )}

      </div>



    );
  }
}

export default App;