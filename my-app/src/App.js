import React, {Component} from 'react';
import ContactForm from './components/ContactForm';
import MenuList from './components/MenuList';
import OrderForm from './components/OrderForm';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1>Aidan's Place</h1>
      <ContactForm />
      <MenuList />
      <OrderForm />
    </React.Fragment>
  );
}

export default App;
