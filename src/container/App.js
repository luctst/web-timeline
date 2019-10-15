import React from 'react';
// import logo from '../assets/img/logo.svg';
import '../styles/app.scss';
import Header from "../components/Header";
import Timeline from './Timeline';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header mb-5">
          <Header />
        </header>
        <main id="app" className="main">
          <section className="main--left">
            <Timeline />
          </section>
          <section className="main--right is__none">
            <div className="timeline--event mt-5">
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
