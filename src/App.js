import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import { HomePage } from './pages/homepage/homepage.component'
import { Header } from './components/header/header.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch >
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
