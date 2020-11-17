import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
//REMEMBER TO CD INTO REACT-PROJECT!!

function App() {
  return (
    <div className="container">
      <Router>
      <Header/>
      <Switch>
        {/* Since all routes stem from /, use the exact modifier to only display the items when on the home page*/}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/products/:id">
          <Product/>
        </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
