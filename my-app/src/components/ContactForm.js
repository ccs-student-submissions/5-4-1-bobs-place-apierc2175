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
          <li><p>Email: aidanwpierce@gmail.com</p></li>
          <li><p>Github Username: apierc2175</p></li>
        </ul>
      </section>
    )
  }
}

export default ContactForm;
