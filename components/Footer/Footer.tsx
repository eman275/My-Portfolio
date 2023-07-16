import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Contact from "../UI/Contact";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg="12" >

          <Contact/>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Eman M.Mostafa All right
                reserved.{" "}
              </p>
            </div>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
};

export default Footer;
