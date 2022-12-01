import React from 'react';
import Main from './pages/MainPage/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
