import React from 'react';
import './App.scss';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Header/>
      <HelloWorld />
      <Footer />
    </div>
  );
}

export default App;
