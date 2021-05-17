import React from 'react';
import { Form,Row,Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Pricing2.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { HomeContext } from '../../../App';


const schema = yup.object().shape({
    arrival:yup.date().required(),
    departure:yup.date().required(),
    guest:yup.number().required()
   });


const Pricing2 = () => {
    const {singleHomeData, setSingleHomeData} = useContext(HomeContext);

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    });

    let history = useHistory();

    const redirect = () => {
        history.push('/bookingSingleHome');
    }

    const onSubmit = data => {
        setSingleHomeData(data);
        redirect();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h4>$34/<span className="font-weight-lighter">Night</span></h4>
            <p><FontAwesomeIcon className="text-primary" icon={faStar} /> <span>4.9(220 reviews)</span></p>

        <Row>
            <Col>
                <Form.Group >
                    <Form.Label>Arrival</Form.Label>
                    <Form.Control 
                    {...register("arrival")} 
                    type="date" 
                    name="arrival"
                    >
                </Form.Control>
                </Form.Group>
            </Col>

            <Col>
                <Form.Group>
                    <Form.Label>Departure</Form.Label>

                    <Form.Control 
                    {...register("departure")} 
                     type="date" 
                     name="departure"
                     >
                    </Form.Control>

                </Form.Group>
            </Col>
        </Row>


        



        <Form.Group>
                <Form.Label>Guest</Form.Label>
                <Form.Control  
                     {...register("guest")} 
                     type="number" 
                     name="guest">
                 
                </Form.Control>
        </Form.Group>

            <Form.Group>
                <Button type="submit" block variant="primary">Reserve</Button>
                <p className="text-secondary small mt-1 text-center">Don't worry to click, you won't be charged now</p>
            </Form.Group>
    </Form>

    );
};

export default Pricing2;