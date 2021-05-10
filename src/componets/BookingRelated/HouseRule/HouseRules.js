import React, { useContext, useEffect,useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './HouseRules.scss';
import { SearchContext } from "./../../../App";



const HouseRules = ({stepHandler}) => {
    const [rules, setRules] = useState([]);

    const {searchData} = useContext(SearchContext);
    console.log(searchData);


        const sda=searchData.data.arrival;
        const sdd=searchData.data.departure;

        
        const arrivalDate=sda.toISOString().slice(0, 10);
        // console.log(arrivalFullDate);
        const departureDate=sdd.toISOString().slice(0, 10);
        // console.log(departureFullDate);

        const arrivalMonth=sda.toLocaleString('default', { month: 'short'});
        const departureMonth=sdd.toLocaleString('default', { month: 'short'});

        // const arrivalSingleDate=sda.toISOString().slice(0, 10).getDate();
        // const departureSingleDate=sdd.toISOString().slice(0, 10).getDate();

        const arrivalTime=sda.getTime();
        const departureTime=sdd.getTime();

    
        const diffTime = departureTime - arrivalTime;
        const diffDays = diffTime / (1000 * 3600 * 24);

    


    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homeRules")
        .then(res=>res.json())
        .then(data=> setRules(data));
    },[])

    return (
        <div className="house-rules">
            <h3>Review House rules</h3>
            <h5>{diffDays} nights in Dhaka</h5>
           

            <Row className="my-5">


                <Col md={6} className="d-flex">
                    <div className="date">
                        <h6>{arrivalMonth}</h6>
                        
                        <p className="m-0  pb-1">{arrivalDate}</p>
                        
                    </div>

                    <div>
                        <p className="small m-0 text-secondary">Monday check-in</p>
                        <p className="small m-0 text-secondary">After 12:00 PM</p>
                    </div>

                </Col>


                <Col md={6} className="d-flex">
                    <div className="date">
                        <h6>{departureMonth}</h6>
                        
                        <p className="m-0 pb-1"> {departureDate}</p>
                       
                    </div>
                    <div>
                        <p className="small m-0 text-secondary">Thrusday check-out</p>
                        <p className="small m-0 text-secondary">After 12:00 PM</p>
                    </div>
                </Col>


                <Col md={12}>
                    <p className="py-5 border-bottom">Self check-in with building staff</p>
                </Col>


                <Col md={12} className="rules">
                    <h5>Things to keep in mind</h5>
                    <ul className="list-unstyled my-5">
                        {
                            rules.map(rule => <li><img src={rule.image} alt=""/>{rule.Condition}</li>)
                        }
                    </ul>
                    <Button onClick={() => stepHandler({})}>Agree and Continue</Button>
                </Col>


            </Row>
        </div>
    );
};

export default HouseRules;