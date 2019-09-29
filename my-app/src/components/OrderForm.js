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
            <li className="menu-item-name"><h2>{item.name}</h2></li>
            <li><p>{item.description}</p></li>
          </ul>
        </td>
        <td><p>${item.price}</p></td>
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
        <p>Total Price ${this.props.subtotal}.00</p>
        <a href="#"><button className="btn btn-primary sub-btn" onClick={() => this.props.submitOrder()}>Submit Order</button></a>
      </section>
    )
  }
}

export default  OrderForm;
