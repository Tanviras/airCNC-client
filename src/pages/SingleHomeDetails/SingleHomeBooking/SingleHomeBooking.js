import React, { useContext } from 'react';
import Header from '../../../componets/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import StepIndicator from '../../../componets/BookingRelated/StepIndecator/StepIndicator';
import { useEffect } from 'react';
import { useState } from 'react';
import MeetHost from '../../../componets/BookingRelated/MeetHost/MeetHost';
import Payment from '../../../componets/BookingRelated/Payment/Payment';
import CreditCard from '../../../componets/BookingRelated/CreditCard/CreditCard';
import HouseRules2 from '../HouseRules2';
import PricingHouseRules from '../PricingHouseRules/PricingHouseRules';
import { HomeContext } from '../../../App';

const SingleHomeBooking = () => {
    const [step, setStep] = useState(1);
    const stepHandler = (data) => {
        setStep(step +1);
    }

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    
    // const {singleHomeData} = useContext(HomeContext);
    // console.log(singleHomeData);

    return (
        <div>
            <Header/>

            <Container className="my-5">
            <StepIndicator step={step}/>
            <Row className="my-4">

                <Col md={7}>
                    {
                        step === 1 ?
                        <HouseRules2 stepHandler={stepHandler}/>
                        :
                        step === 2 ?
                        <MeetHost stepHandler={stepHandler}/>
                        :
                        step === 3 ?
                        <Payment stepHandler={stepHandler}/>
                        :
                        <CreditCard stepHandler={stepHandler}/>

                    }
                </Col>

                <Col md={5}>
                    <PricingHouseRules/>
                </Col>
                
            </Row>
        </Container>
        </div>
    );
};

export default SingleHomeBooking;