import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from './components/Menu.js';
import HomeScreen from './screens/HomeScreen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={HomeScreen}></Route>
        <Route path='/login' component={LoginScreen}></Route>
        <Route path='/aboutus' component={AboutUsScreen}></Route>
        <Route path='/home' component={HomeScreen}></Route>
        <Route path='/article-detail/:articleID' component={ArticleDetailScreen}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
