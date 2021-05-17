import React, { useState } from 'react';
import { Form,Row,Col, Button,Accordion,Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faAngleUp,faAngleDown } from '@fortawesome/free-solid-svg-icons'

import './AdvanceSearch.scss'
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../App';
import { useContext } from 'react';

const schema = yup.object().shape({
   city: yup.string().required(),
   arrival:yup.date().required(),
   departure:yup.date().required(),
  });

const AdvanceSearch = () => {
    const {searchData, setSearchData} = useContext(SearchContext);

    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [baby, setBaby] = useState(0);
    const [collapsed, setCollapsed] = useState(false);
    let history = useHistory();

     const { register, handleSubmit } = useForm({
     resolver: yupResolver(schema),
     });

    const redirect = () =>{
        history.push('/search-result');
    }
    
    const onSubmit = data => {
        const allData={data,adult,child,baby}
        setSearchData(allData);
        redirect();
    }

    
    
    

    return (
        <div className="advance-search pr-md-3">
            <h5 className="mb-4">Where do you want to go</h5>

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group className="rounded shadow p-3">
                    <Form.Label className="font-weight-bold">Location</Form.Label>
                    
                    <Form.Control 
                    {...register("city")} 
                    defaultValue={searchData.city && searchData.city} 
                    name="city" 
                    type="text" 
                    placeholder="Add city, landmark, area "
                    >
                    </Form.Control>
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="rounded shadow p-3">
                            <Form.Label className="font-weight-bold">Arrival</Form.Label>
                            <Form.Control 
                            {...register("arrival")} 
                            type="date" 
                            defaultValue={searchData.arrival && searchData.arrival} 
                            name="arrival"
                            >
                        </Form.Control>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="rounded shadow p-3">
                            <Form.Label  className="font-weight-bold">Departure</Form.Label>

                            <Form.Control 
                            {...register("departure")} 
                            defaultValue={searchData.departure && searchData.departure}
                             type="date" 
                             name="departure"
                             >
                            </Form.Control>

                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="shadow">
                    <Accordion defaultActiveKey="0">
                    {/* accordion =collapsible content */}

                    <Card>
                        <Accordion.Toggle
                        onClick={() => {collapsed ? setCollapsed(false) : setCollapsed(true) }}
                         as={Card.Header} className="bg-white d-flex justify-content-between align-items-center" eventKey="0">
                            
                            <div>
                            <Form.Label className="text-secondary">Guest</Form.Label>
                            <p className="font-weight-bold">{adult} Adults -{child} Children - {baby} Babies</p>
                            </div>
                            
                            {
                            collapsed ? 
                            <FontAwesomeIcon  icon={faAngleDown}/>
                            : 
                            <FontAwesomeIcon  icon={faAngleUp}/>

                            }

                        </Accordion.Toggle>


                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="persons">

                            <div className="d-flex justify-content-between">
                                <h6 className="text-uppercase">Adults</h6>
                                <div className="d-flex align-items-center">

                                    <Button 
                                     onClick={() => adult > 0 && setAdult(adult - 1)}
                                     variant="default" size="sm">-
                                     </Button>

                                    {adult}
                                   
                                    <Button variant="default" size="sm"
                                    onClick={() =>  setAdult(adult + 1)}
                                    >+</Button>

                                </div>
                            </div>



                            
                            <div className="d-flex justify-content-between my-2">
                                <div>
                                    <h6 className="text-uppercase">Child</h6>
                                    <p className="text-secondary">age 2-12</p>
                                </div>
                                <div className="d-flex align-items-center">

                                <Button 
                                     onClick={() => child > 0 && setChild(child - 1)}
                                     variant="default" size="sm">-
                                     </Button>

                                  
                                    {child}
                                   

                                    <Button variant="default" size="sm"
                                    onClick={() =>  setChild(child + 1)}
                                    >+</Button>

                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h6 className="text-uppercase">Babies</h6>
                                    <p className="text-secondary">Younger than 2</p>
                                    <p className="text-secondary">(No fees applicable for babies)</p>
                                </div>

                                <div className="d-flex align-items-center">

                                <Button 
                                     onClick={() =>  baby> 0 && setBaby(baby - 1)}
                                     variant="default" size="sm">-
                                </Button>

                            
                                    {baby}
                                   

                                    <Button variant="default" size="sm"
                                    onClick={() =>  setBaby(baby + 1)}
                                    >+</Button>

                                </div>

                            </div>
                        </Card.Body>
                        </Accordion.Collapse>

                    </Card>
                    </Accordion>
                </Form.Group>


                <Form.Group>
                    <Button block type="submit" variant="primary">
                        <FontAwesomeIcon className="mr-2" icon={faSearch} /> 
                        Search
                    </Button>
                </Form.Group>
                
            </Form>
        </div>
    );
};

export default AdvanceSearch;