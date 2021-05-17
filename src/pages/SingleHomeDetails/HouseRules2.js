import React, {useContext, useEffect,useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { HomeContext } from '../../App';

const HouseRules2 = ({stepHandler}) => {
    const [rules, setRules] = useState([]);

    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homeRules")
        .then(res=>res.json())
        .then(data=> setRules(data));
    },[])

    const {singleHomeData} = useContext(HomeContext);
 

    // //dates in string
    const sda=singleHomeData.arrival;
    const sdd=singleHomeData.departure;

    // //dates in yyyy-mm-dd format
    // // const arrivalDate=sda.toISOString().slice(0, 10);
    // // const departureDate=sdd.toISOString().slice(0, 10);

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

    return (
        <div className="house-rules">
            <h3>Review House rules</h3>
            <h5>{diffDays} nights in Dhaka</h5>

            <Row className="my-5">


<Col md={6} className="d-flex">
    <div className="date">
        <h6>{arrivalMonth}</h6>
        
        <p className="m-0  pb-1">{arrivalSingleDate}</p>
        
    </div>

    <div>
        <p className="small m-0 text-secondary">{arrivalDay} check-in</p>
        <p className="small m-0 text-secondary">After 12:00 PM</p>
    </div>

</Col>


<Col md={6} className="d-flex">
    <div className="date">
        <h6>{departureMonth}</h6>
        
        <p className="m-0 pb-1">{departureSingleDate}</p>
       
    </div>
    <div>
        <p className="small m-0 text-secondary">{departureDay} check-out</p>
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
            rules.map(rule => <li key={rule.index}><img src={rule.image} alt=""/>{rule.Condition}</li>)
        }
    </ul>
    <Button onClick={() => stepHandler({})}>Agree and Continue</Button>
</Col>


</Row>
        </div>
    );
};

export default HouseRules2;