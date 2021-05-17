import React, { useContext } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { HomeContext } from '../../../App';


const PricingHouseRules = () => {

    const {singleHomeData} = useContext(HomeContext);
 

    // //dates in string
    const sda=singleHomeData.arrival;
    const sdd=singleHomeData.departure;

    //dates in yyyy-mm-dd format
    const arrivalDate=sda.toISOString().slice(0, 10);
    const departureDate=sdd.toISOString().slice(0, 10);

    //months
    const arrivalMonth=sda.toLocaleString('default', { month: 'short'});
    const departureMonth=sdd.toLocaleString('default', { month: 'short'});

    // //only the date from the whole dd-mm-yyyy
    const arrivalSingleDate=sda.getDate();
    const departureSingleDate=sdd.getDate();

    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    const arrivalDay = weekday[sda.getDay()];
    const departureDay = weekday[sdd.getDay()];



    //time
    const arrivalTime=sda.getTime();
    const departureTime=sdd.getTime();


    const diffTime = departureTime - arrivalTime;
    const diffDays = diffTime / (1000 * 3600 * 24);

    const livingCost=34*diffDays;
    const totalCost=livingCost+10+21;
  
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
                <Form.Control  name="arrival" type="date" value={arrivalDate} readOnly={true}/>
                <FontAwesomeIcon className="mx-4" icon={faArrowRight}/>
                <Form.Control name="departure" className="text-right" type="date" value={departureDate} readOnly={true}/>
            </div>
        </Form.Group>

        <Form.Group>
            <Form.Label>Guest</Form.Label>
            <Form.Control name="guest" as="select">
                <option>{singleHomeData.guest} guest</option>
                <option >1 guest</option>
                <option >2 guests</option>
                <option >3 guests</option>
                <option >4 guests</option>
            </Form.Control>
        </Form.Group>
        
        <ul className="preview list-unstyled">
            <li>
                <span>34x{diffDays} night</span>
                <span>{livingCost}</span>
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
                <span>${totalCost}</span>
            </li>

        </ul>

    </Form>
    );
};

export default PricingHouseRules;