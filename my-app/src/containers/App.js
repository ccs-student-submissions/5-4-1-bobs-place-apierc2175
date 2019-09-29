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
    this.submitOrder = this.submitOrder.bind(this);
  }

  componentDidMount() {
    let menuItems = [{name: 'Potato Salad', description: 'Yukon gold potatoes finely chopped and served with imported extra virgin olive oil, irish grassfed butter, mayo, and freshly picked chives and basil', price: 3}, {name: 'Fruit Salad', description: 'A seaonal assortment of our homegrown fruits', price: 5}, {name: 'Bison Filet Mignon', description: '12 ounces of bison filet served with mashed potatoes', price: 28}, {name: 'Rainbow Trout', description: 'Fresh wild caught rainbow trout served with gnocci and brussel sprouts', price: 18}, {name: 'Lobster Sandwich', description: '8 ounces of fresh lobster, caught this morning, served on our homemade sourdough with a generous serving of mayo', price: 14}, {name: 'Turkey On Rye', description: 'Turkey, provolone, mayo, dijon mustard, kale, sliced tomatoes, and raw honey on rye bread', price: 12}, {name: 'BLT Pimento', description: 'Uncured bacon, lettuce, tomato, extra virgin olive oil, grassfed irish butter, and our secret spice blend on sourdough', price: 11}, {name: 'Komboucha', description: 'ginger, berry, or honey flavored', price: 4}, {name: 'Water', description: 'Fiji or Voss', price: 4}, {name: 'Fresh pressed juice', description: 'Seasonal fruits and veggetables juiced fresh to order', price: 6}]
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

    if(this.state.subtotal > 0) {
      let items = [...this.state.orderItems];
      let index = items.indexOf(item);
      items.splice(index, 1);
      this.setState((prevState, props) => ({
        orderItems: items,
        subtotal: prevState.subtotal - item.price
      }));
    }
  }

  submitOrder() {
    alert("Thank you for your order! It has been submitted!");
    window.location.reload();
  }

  render() {
    return (
      <React.Fragment>
      <Container>
        <header>
          <h1 className="place-name">Aidan's Place</h1>
        </header>
        <Row>
          <Col xs="12" md="6">
            <MenuList menuItems={this.state.menuItems} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
          </Col>
          <Col xs="12" md="6">
            <OrderForm orderItems={this.state.orderItems} subtotal={this.state.subtotal} submitOrder={this.submitOrder} />

            <ContactForm />
          </Col>
        </Row>
      </Container>
      </React.Fragment>
    );
  }
}

export default App;
