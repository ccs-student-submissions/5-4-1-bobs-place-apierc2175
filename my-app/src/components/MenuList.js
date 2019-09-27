import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderForm from './OrderForm';
import { Row, Col, Grid, Container, Table } from 'react-bootstrap';
class MenuList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      menuItem: '',
      itemPrice: ''
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    console.log(this.state.menuItem);
  }


  render() {
    let menuItems = this.props.menuItems.map((menuItem, index) => (
      <tr>
        <td>
          <ul>
            <li className="menu-item-name">{menuItem.name}</li>
            <li>{menuItem.description}</li>
            <li><button onClick={this.addItem}>Add To Order</button></li>
          </ul>
        </td>
        <td>${menuItem.price}</td>
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
