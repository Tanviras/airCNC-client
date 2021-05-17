import React, {useEffect,useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const HouseRules2 = ({stepHandler}) => {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homeRules")
        .then(res=>res.json())
        .then(data=> setRules(data));
    },[])

    return (
        <div className="house-rules">
            <h3>Review House rules</h3>
            <h5>1 night in Dhaka</h5>

            <Row className="my-5">


<Col md={6} className="d-flex">
    <div className="date">
        <h6>April</h6>
        
        <p className="m-0  pb-1">30</p>
        
    </div>

    <div>
        <p className="small m-0 text-secondary">Thurs check-in</p>
        <p className="small m-0 text-secondary">After 12:00 PM</p>
    </div>

</Col>


<Col md={6} className="d-flex">
    <div className="date">
        <h6>May</h6>
        
        <p className="m-0 pb-1"> 1 </p>
       
    </div>
    <div>
        <p className="small m-0 text-secondary">Sat check-out</p>
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

export default HouseRules2;