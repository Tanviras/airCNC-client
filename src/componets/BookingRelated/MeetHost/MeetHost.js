import React from 'react';
import {Row,Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object().shape({
    description: yup.string().required()
   });

const MeetHost = ({stepHandler}) => {

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

            <form onSubmit={handleSubmit(onSubmit)}>

                <textarea rows="5" cols='60' className="my-4" name='description'  
                {...register("description")}/>
               

                <div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </form>

            </Col>

            <Col md={3} className="text-center">
                <img className="host-img" src="https://imgur.com/Gyu1TXZ.png" alt=""/>
                <p>Rowdra</p>
            </Col>

        </Row>
    );
};

export default MeetHost;