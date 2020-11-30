import React from 'react'


//CSS
import './App.css';

//COMPONENTS
import Alpha from './components/Alpha'
import Beta from './components/Beta'
import Portfolio from './components/Portfolio'
import Blog from './components/Blog'



function App() {
  return (
    <div className="App">
      <Alpha />
      <Beta />
      <Portfolio />
      <Blog />
    </div>
  );
}

export default App;
