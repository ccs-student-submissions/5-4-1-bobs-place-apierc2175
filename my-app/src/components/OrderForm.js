import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuList from './MenuList';
import { Row, Col, Grid, Container, Table } from 'react-bootstrap';

class OrderForm extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {

    let orderItems = this.props.orderItems.map((item, index) => (
    <div key={index}>
      <tr>
        <td>
          <ul>
            <li className="menu-item-name">{item.name}</li>
            <li>{item.description}</li>
          </ul>
        </td>
        <td>${item.price}</td>
      </tr>
      </div>
    ));

    return (
      <section className="order-form">
        <h2>Order Form</h2>
        <Table striped bordered hover wide-width>
          <tbody>
            {orderItems}
          </tbody>
        </Table>
        <p>{this.props.subtotal}</p>
        <a href="#"><button className="btn btn-primary sub-btn" onClick={() => this.props.submitOrder()}>Submit Order</button></a>
      </section>
    )
  }
}

export default  OrderForm;
