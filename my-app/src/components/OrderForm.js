import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuList from './MenuList';
import { Row, Col, Grid, Container } from 'react-bootstrap';

class OrderForm extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <section className="order-form">
        <h2>Order Form</h2>
      </section>
    )
  }
}

export default  OrderForm;
