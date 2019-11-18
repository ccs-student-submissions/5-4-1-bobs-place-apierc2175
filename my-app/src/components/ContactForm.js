import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Grid, Container } from 'react-bootstrap';

class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <section className="contact-form">
        <h2>Contact Aidan</h2>
        <ul>
          <li><p>Email: aidanpierce98@gmail.com</p></li>
        </ul>
      </section>
    )
  }
}

export default ContactForm;
