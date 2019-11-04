import React from 'react';
// import logo from '../assets/img/logo.svg';
import '../../styles/app.scss';
import Header from "../../components/Header/Header"
import Timeline from '../Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header mb-5">
          <Header />
        </header>
        <main id="app" className="main">
          <Timeline />
        </main>
      </div>
    </div>
  );
}

export default App;
