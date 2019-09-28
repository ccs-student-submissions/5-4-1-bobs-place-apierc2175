import React, {Component} from 'react';
import ContactForm from './../components/ContactForm';
import MenuList from './../components/MenuList';
import OrderForm from './../components/OrderForm';
import './App.css';

import { Row, Col, Grid, Container } from 'react-bootstrap';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [],
      orderItems: [],
      subtotal: 0
    }
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    let menuItems = [{name: 'Menu Item One', description: 'here is a description', price: 2, }, {name: 'Menu Item Two', description: 'here is a description', price: 3}, {name: 'Menu Item Three', description: 'here is a description', price: 4}, {name: 'Menu Item four', description: 'here is a description', price: 2}];
    this.setState({menuItems: menuItems});
  }

  addToCart(item) {
    // here is where you need to add the item to the cart
    let items = [...this.state.orderItems];
    items.push(item);
    this.setState((prevState, props) => ({
      orderItems: items,
      subtotal: prevState.subtotal + item.price
    }));
  }

  removeFromCart(item) {
    let items = [...this.state.orderItems];
    let index = items.indexOf(item);
    items.splice(index, 1);
    this.setState((prevState, props) => ({
      orderItems: items,
      subtotal: prevState.subtotal - item.price
    }));
  }

  render() {
    return (
      <React.Fragment>
      <Container>
          <h1 className="text-primary">Aidan's Place</h1>
        <Row>
          <Col xs="6">
            <MenuList menuItems={this.state.menuItems} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
          </Col>
          <Col xs="6">
            <OrderForm orderItems={this.state.orderItems} subtotal={this.state.subtotal} />

            <ContactForm />
          </Col>
        </Row>
      </Container>
      </React.Fragment>
    );
  }
}

export default App;
