
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class MainFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Thank you for choosing us!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="/"
                  id="tooltip475038074"
                  // target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="/"
                  id="tooltip837440414"
                  // target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
              
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="/"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="/"
                    target="_blank"
                  >
                    Emergency Dispatcher
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="/"
                      // target="_blank"
                    >
                      E-Dispatcher
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/about"
                      // target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/license"
                      // target="_blank"
                    >
                      MIT License
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default MainFooter;
