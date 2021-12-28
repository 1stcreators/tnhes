import React from 'react';
import { Nav, Row, Tab, Col } from 'react-bootstrap'

import fintechImg from '../../assets/images/ind-fintech.svg';

function Industriesweserve() {


  return (
    <div>
          <section className="indWeServe"> 
    <div className="container">
      
      <div className="row">

        <div className="col-md-12">
          
        <Tab.Container id="left-tabs-example" defaultActiveKey="fintech">
        <Row>
            <Col sm={9}>
            <Tab.Content className='titleOuter' >
                  <div className="serviceTitle">
                    <div className="headingTitle text-end"><span className="borderV"></span>Industries We Serve </div>
                  </div>
                <Tab.Pane eventKey="fintech">
                  <div className="infServeOuter">
                 
                  
                
                    <h2>Fintech</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="ecommerce">
                  <div className="infServeOuter">
                    <h2>E-Commerce</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="healthcare">
                  <div className="infServeOuter">
                    <h2>Healthcare</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fitness">
                  <div className="infServeOuter">
                    <h2>Fitness</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fooddelivery">
                  <div className="infServeOuter">
                    <h2>Food Delivery</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="realsstate">
                  <div className="infServeOuter">
                    <h2>Real Estate</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="travel">
                  <div className="infServeOuter">
                    <h2>Travel</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="sports">
                  <div className="infServeOuter">
                    <h2>Sports</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="socialnetworking">
                  <div className="infServeOuter">
                    <h2>Social Networking</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="business">
                  <div className="infServeOuter">
                    <h2>Business</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="education">
                  <div className="infServeOuter">
                    <h2>Education</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="entertainment">
                  <div className="infServeOuter">
                    <h2>Entertainment</h2>
                    <p>Make your customers digital banking and investing experience smooth without <br/>irritation like banking long queue lines.</p>
                    <img src={fintechImg} alt="Fintech" />
                  </div>
                </Tab.Pane>
            </Tab.Content>
            </Col>
            <Col sm={3}>
            <Nav variant="pills" className="flex-column indTabOuter">
                <Nav.Item>
                  <Nav.Link eventKey="fintech">Fintech</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="ecommerce">E-Commerce</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="healthcare">Healthcare</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fitness">Fitness</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fooddelivery">Food Delivery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="realsstate">Real Estate</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="travel">Travel</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sports">Sports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="socialnetworking">Social Networking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="business">Business</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="entertainment">Entertainment</Nav.Link>
                </Nav.Item>
                
            </Nav>
            </Col>
        </Row>
        </Tab.Container>
          
        </div>
        

      </div>

    </div>
  </section>

    </div>
  );
}

export default Industriesweserve;
