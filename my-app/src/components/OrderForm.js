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

    let orderItems = this.props.orderItems.map((item, index) => (
      <div key={index}>
        <p>{item.name}</p>
        <h1>{item.description}</h1>
        <h1>{item.price}</h1>
      </div>
    ));

    return (
      <section className="order-form">
        <h2>Order Form</h2>
        {orderItems}
        <p>{this.props.subtotal}</p>
      </section>
    )
  }
}

export default  OrderForm;
