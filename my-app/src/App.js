import React, {Component} from 'react';
import ContactForm from './components/ContactForm';
import MenuList from './components/MenuList';
import OrderForm from './components/OrderForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1 class="text-primary">Aidan's Place</h1>

      <div className="row">
        <div className="col-xs-6">
          <div><MenuList /></div>
        </div>
        <div className="col-xs-6">
          <div><ContactForm /></div>
          <div><OrderForm /></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
