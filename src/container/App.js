import React from 'react';
import logo from '../assets/img/logo.svg';
import '../styles/app.scss';
import Header from "../components/Header";
import Timeline from './Timeline';
import Filters from './Filters';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <div className="container">
        <Filters />
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
