import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderForm from './OrderForm';
import { Row, Col, Grid, Container, Table } from 'react-bootstrap';
class MenuList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      price: ''
    };
  }

  // addItem(item) {
  //   // console.log(image);
  //   let items = [this.state];
  //   items.push(item);
  //   this.setState({items: items});
  //   console.log(items);
  // }


  render() {
    let menuItems = this.props.menuItems.map((item, index) => (
      <tr>
        <td>
          <ul>
            <li className="menu-item-name">{item.name}</li>
            <li>{item.description}</li>
            <li><button onClick={() => this.props.addToCart(item)}>Add To Order</button></li>
            <li><button onClick={() => this.props.removeFromCart(item)}>Remove From Order</button></li>
            <li><button onClick={() => this.props.submitOrder(item)}>Submit Order</button></li>
          </ul>
        </td>
        <td>${item.price}</td>
      </tr>
    ))
    return (
      <Table striped bordered hover>
        <tbody>
          {menuItems}
        </tbody>
      </Table>
    )
  }
}

export default  MenuList;
