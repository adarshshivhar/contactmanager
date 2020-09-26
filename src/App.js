import React from 'react';
import  Contact  from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact
          name="Adarsh Shivhare"
          email="adarsh@gmail.com"
          phone="7587138569"
        />
        <Contact
          name="Ayush Mathur"
          email="ayush@gmail.com"
          phone="7587199999"
        />
      </div>
    </div>
  );
}

export default App;
