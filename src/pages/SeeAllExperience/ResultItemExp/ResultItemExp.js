import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const ResultItemExp = (props) => {
    const {_id,homeName,price,image} = props.home;

    return (
        <Link to={`/experience/${_id}`}>
        <Row className="border-bottom mb-4">

            <Col md={5}>
                <img className="img-fluid rounded" src={`data:image/png;base64,${image.img}`} alt="" style={{width:'221px', height:'221px'}}/>
            </Col>

            <Col md={7}>
                <h6>{homeName}</h6>
                <p className="text-secondary">Lorem ipsum dolor sit amet</p>
                <p className="text-secondary">Lorem ipsum dolor sit amet</p>
                <div className="d-flex justify-content-between">
                    <p className="text-secondary"><FontAwesomeIcon icon={faStar} className="text-primary"/> 45 reviews</p>
                    <div>
                        <p className="mb-0">{price}/<span className="small">Night</span></p>
                        <p className="small text-secondary">total</p>
                    </div>
                </div>
            </Col>

        </Row>
        </Link>
    );
};


export default ResultItemExp;