import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';


const PricingHouseRules = () => {

  
    return (
        <Form className="p-4 rounded pricing shadow">
        <Row className="mb-4">
            
            <Col md={7}>
                <h4>Lorem ipsum dolor sit amet co.</h4>
                <p className="text-secondary"><FontAwesomeIcon icon={faStar} className="text-primary"/> 5 (40 reviews)</p>         
            </Col>

            <Col md={5}>
                <img className="img-fluid rounded" src="https://imgur.com/yHwJMpw.png" alt=""/>
            </Col>
        </Row>

        <Form.Group>
            <Form.Label>Dates</Form.Label>
            <div  className="d-flex align-items-center form-control">
                <Form.Control  name="arrival" type="date" readOnly={true}/>
                <FontAwesomeIcon className="mx-4" icon={faArrowRight}/>
                <Form.Control name="departure" className="text-right" type="date" readOnly={true}/>
            </div>
        </Form.Group>

        <Form.Group>
            <Form.Label>Guest</Form.Label>
            <Form.Control name="guest" as="select">
                <option>1 guest</option>
                <option >1 guest</option>
                <option >2 guests</option>
                <option >3 guests</option>
                <option >4 guests</option>
            </Form.Control>
        </Form.Group>
        
        <ul className="preview list-unstyled">
            <li>
                <span>34x1 night</span>
                
                <span> 34</span>
               
            </li>
            <li>
                <span>Cleaning fee</span>
                <span>$10</span>
            </li>
            <li>
                <span>Service fee</span>
                <span>$21</span>
            </li>
            <li className="total font-weight-bold">
                <span>Total</span>
                <span>$65</span>
                
            </li>
        </ul>

    </Form>
    );
};

export default PricingHouseRules;