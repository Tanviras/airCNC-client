import React, { useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../../App';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import { useHistory } from 'react-router-dom';




const PricingReview = () => {


    const {searchData} = useContext(SearchContext);
    console.log(searchData);

    const arrivalDate=searchData.data.arrival.toISOString().slice(0, 10);
    const departureDate=searchData.data.departure.toISOString().slice(0, 10);

    const arrivalTime=searchData.data.arrival.getTime();
    const departureTime=searchData.data.departure.getTime();

    const diffTime = departureTime - arrivalTime;
    const diffDays = diffTime / (1000 * 3600 * 24);
    // console.log(diffDays);

    const totalStayCharges=diffDays * 34;
    // console.log(totalStayCharges);

    const totalCharges=totalStayCharges+10+21;
    // console.log(totalCharges);

    const totalGuests=searchData.adult+searchData.child
    // console.log(totalGuests);



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
                    <Form.Control value={arrivalDate}  name="arrival" type="date" readOnly={true}/>
                    <FontAwesomeIcon className="mx-4" icon={faArrowRight}/>
                    <Form.Control value={departureDate}  name="departure" className="text-right" type="date" readOnly={true}/>
                </div>
            </Form.Group>

            <Form.Group>
                <Form.Label>Guest</Form.Label>
                <Form.Control name="guest" as="select">
                    <option>{totalGuests}  guests</option>
                    <option >1 guest</option>
                    <option >2 guests</option>
                    <option >3 guests</option>
                    <option >4 guests</option>
                </Form.Control>
            </Form.Group>
            
            <ul className="preview list-unstyled">
                <li>
                    <span>34x{diffDays}  night</span>
                    
                    <span> {totalStayCharges}</span>
                   
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
                    <span>${totalCharges}</span>
                    
                </li>
            </ul>

        </Form>
    );
};

export default PricingReview;