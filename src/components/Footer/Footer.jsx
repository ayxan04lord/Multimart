import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={6} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Multimart</h1>
              </div>
              <p>Discover a world of shopping at Multimart! Find products, compare prices, add to cart, and buy with ease. Enjoy a seamless and secure shopping experience with us.

</p>
            </Col>
            
            <Col md={6} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>Hasanbay Zardabi 192A, Baku, Azerbaijan</li>
                <li>Email: <a href="mailto:ayxan.mustafayev.2004@mail.ru">ayxan.mustafayev.2004@mail.ru</a></li>
                <li>Phone: <a href="tel:+994556772714">+994556772714</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
