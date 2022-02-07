import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ArticleList from './pages/ArticleList';
import Article from './pages/Article';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/articles-list" component={ArticleList}/>
          <Route exact path="/article/:name" component={Article}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
