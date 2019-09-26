import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Container } from 'react-bootstrap';
class MenuList extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <section className="menu-list">
        <h2>Menu List</h2>
        <h2 className="menu-subhead">Appetizers</h2>
        <ul>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
        </ul>
        <h2 className="menu-subhead">Entrée</h2>
        <ul>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
        </ul>
        <h2 className="menu-subhead">Dessert</h2>
        <ul>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
          <li>Menu Item</li>
        </ul>
      </section>
    )
  }
}

export default  MenuList;
