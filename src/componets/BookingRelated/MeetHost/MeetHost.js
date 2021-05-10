import React, { useContext } from 'react';
import { Form, Button, Row,Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { SearchContext } from '../../../App';

const schema = yup.object().shape({
    description:yup.string().required()
   });


const MeetHost = ({stepHandler}) => {
    const {searchData} = useContext(SearchContext);
    console.log(searchData);

    const { register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
        });

    const onSubmit = data => {
        stepHandler();
    };

    return (
        <Row className="my-5 meet-host">
            <Col md={9}>
            <h3>Travelling for work?</h3>
            <p>Say hello to our host</p>
            <p>Let Rowdra know a little bit yourself and why you are coming</p>

            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Control {...register("description")} as="textarea" rows="5" className="my-4" name='description'>
                </Form.Control>

                <Form className="Group">
                    <Button type="submit">Continue</Button>
                </Form>

            </Form>
            </Col>

            <Col md={3} className="text-center">
                <img className="host-img" src="https://imgur.com/Gyu1TXZ.png" alt=""/>
                <p>Rowdra</p>
            </Col>
        </Row>
    );
};

export default MeetHost;