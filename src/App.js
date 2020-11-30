import React from 'react'


//CSS
import './App.css';

//COMPONENTS
import Alpha from './components/Alpha'
import Beta from './components/Beta'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'



function App() {
  return (
    <div className="App">
      <Alpha />
      <Beta />
      <Portfolio />
      <Clients />
    </div>
  );
}

export default App;
