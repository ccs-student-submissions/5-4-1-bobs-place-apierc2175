import React, {Component} from 'react';
import ContactForm from './components/ContactForm';
import MenuList from './components/MenuList';
import OrderForm from './components/OrderForm';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Container } from 'react-bootstrap';



function App() {
  return (
//     <React.Fragment>
//     <Container>
//   <Row>
//     <Col>1 of 2</Col>
//     <Col>2 of 2</Col>
//   </Row>
//   <Row>
//     <Col>1 of 3</Col>
//     <Col>2 of 3</Col>
//     <Col>3 of 3</Col>
//   </Row>
// </Container>
// </React.Fragment>
    // <Container>
    //   <h1 class="text-primary">Aidan's Place</h1>
    //
    //   <Row>
    //     <Col>
    //       <MenuList />
    //     </Col>
    //     <Col>
    //       <ContactForm />
    //       <OrderForm />
    //     </Col>
    //   </Row>
    // </Container>
    <React.Fragment>
    <Container>
        <h1 class="text-primary">Aidan's Place</h1>
      <Row>
        <Col xs="6">
          <MenuList />
        </Col>
        <Col xs="6">
          <ContactForm />
          <OrderForm />
        </Col>
      </Row>
    </Container>
    </React.Fragment>
  );
}

export default App;
