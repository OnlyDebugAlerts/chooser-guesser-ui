import React from 'react';

import './App.scss';
import Header from './components/Header';
import Comments from './components/Comments';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Categories/>
        <Comments/>
        <Navigation/>
      </div>
    </div>

  );
}

export default App;
