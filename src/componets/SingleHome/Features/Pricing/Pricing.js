import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import './Pricing.css'; 
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../../../App';




const Pricing = (props) => {

    const { register, handleSubmit} = useForm({});

    const {searchData} = useContext(SearchContext);
    const arrivalDate=searchData.data.arrival.toISOString().slice(0, 10)
    const departureDate=searchData.data.departure.toISOString().slice(0, 10)
    const arrivalTime=searchData.data.arrival.getTime();
    const departureTime=searchData.data.departure.getTime();


    const diffTime = departureTime - arrivalTime;
    const diffDays = diffTime / (1000 * 3600 * 24);
    // console.log(diffDays);

    const totalStayCharges=diffDays * 34;
    // console.log(totalStayCharges);

    const totalCharges=totalStayCharges+10+21;
    // console.log(totalCharges);

    const totalGuests=searchData.adult+searchData.child;
    // console.log(totalGuests);
    
    

    let history = useHistory();

    const redirect = () =>{
        history.push('/booking');
    }

    const onSubmit = data => {
        redirect();
    };
  
    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded pricing shadow">
            <h4>$34/<span className="font-weight-lighter">Night</span></h4>
            <p><FontAwesomeIcon className="text-primary" icon={faStar}/> <span>4.9(220 reviews)</span></p>

            <Form.Group>
                <Form.Label>Dates</Form.Label>
                <div  className="d-flex align-items-center form-control">
                    <Form.Control {...register("arrival")} value={arrivalDate} name="arrival" type="date"/>
                    <FontAwesomeIcon className="mx-4" icon={faArrowRight}/>
                    <Form.Control {...register("departure")} value={departureDate} name="departure" className="text-right" type="date"/>
                </div>
            </Form.Group>

            <Form.Group>
                <Form.Label>Guest</Form.Label>
                <Form.Control  as="select">
                    <option>{totalGuests} guests</option>
                    <option  defaultValue="1">1 guest</option>
                    <option  defaultValue="2">2 guests</option>
                    <option  defaultValue="3">3 guests</option>
                    <option  defaultValue="4">4 guests</option>
                </Form.Control>
            </Form.Group>
            
            <ul className="preview list-unstyled">
                <li>
                    <span>34x{diffDays} nights</span>
                    <span>{totalStayCharges}</span>
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

            <Form.Group>
                <Button type="submit" block variant="primary">Reserve</Button>
                <p className="text-secondary small mt-1 text-center">Don't worry to click, you won't be charged now</p>
            </Form.Group>
        </Form>
    );
};

export default Pricing;