import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import './App.css';
import { HomePage } from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/signin-and-signup-page/signin-and-signup.component'
import { setCurrentUser } from './redux/user/user.actions'

function App({ setCurrentUser }) {
  let unsuscribeFromAuth = null
  useEffect(() => {
    unsuscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if(authUser) {
        const userRef = await createUserProfileDocument(authUser);
  
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data
          })
        })
       }
       
       setCurrentUser(authUser);
    })
        return () => {
          unsuscribeFromAuth();
        }
  })

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage}/>
          <Route exact path='/signin' component={SignInAndSignUpPage}/>
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
