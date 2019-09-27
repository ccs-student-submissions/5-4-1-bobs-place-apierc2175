import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Container, Table } from 'react-bootstrap';
class MenuList extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <section className="menu-list">
        <h2 className="item-type">Appetizers</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <ul>
                <li className="menu-item-name">Menu Item 1</li>
                <li>lorem ipsum the description of the food goes right here</li>
              </ul>
            </td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Menu Item 2</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Menu Item 3</td>
            <td>$3</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="item-type">Entrées</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <ul>
                <li className="menu-item-name">Menu Item 1</li>
                <li>lorem ipsum the description of the food goes right here</li>
              </ul>
            </td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Menu Item 2</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Menu Item 3</td>
            <td>$3</td>
          </tr>
        </tbody>
      </Table>
      <h2 className="item-type">Desserts</h2>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <ul>
                <li className="menu-item-name">Menu Item 1</li>
                <li>lorem ipsum the description of the food goes right here</li>
              </ul>
            </td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Menu Item 2</td>
            <td>$3</td>
          </tr>
          <tr>
            <td>Menu Item 3</td>
            <td>$3</td>
          </tr>
        </tbody>
      </Table>


      {/*
         <h2>Menu List</h2>
         <h2 className="menu-subhead">Appetizers</h2>
         <ul>
           <li>Menu Item 1 <span className="price">$3</span></li>
           <li>Menu Item 2 <span className="price">$4</span></li>
           <li>Menu Item 3 <span className="price">$7</span></li>
           <li>Menu Item 4 <span className="price">$9</span></li>
         </ul>
         <h2 className="menu-subhead">Entrée</h2>
         <ul>
           <li>Menu Item 5 <span className="price">$9</span></li>
           <li>Menu Item 6 <span className="price">$15</span></li>
           <li>Menu Item 7 <span className="price">$19</span></li>
           <li>Menu Item 8 <span className="price">$17</span></li>
         </ul>
         <h2 className="menu-subhead">Dessert</h2>
         <ul>
           <li>Menu Item 9 <span className="price">$8</span></li>
           <li>Menu Item 10 <span className="price">$12</span></li>
           <li>Menu Item 11 <span className="price">$7</span></li>
           <li>Menu Item 12 <span className="price">$8</span></li>
         </ul>
         */}
      </section>
    )
  }
}

export default  MenuList;
