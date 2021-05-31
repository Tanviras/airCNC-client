import React  from 'react';
import { Row,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const ResultItem = (props) => {
    const {_id,homeName,price,image} = props.home;

    return (
        
        <Link to={`/home/${_id}`}>
        <Row className="border-bottom mb-4">

            <Col md={7}>
                <img className="img-fluid rounded" src={`data:image/png;base64,${image.img}`} alt="" style={{width:'635px'}}/>
            </Col>

            <Col md={5}>
                <h6>{homeName}</h6>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis? Sed rem fuga, iusto quasi eveniet aspernatur corrupti, necessitatibus, nostrum ad culpa voluptatibus cumque fugiat.</p>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, debitis? Sed rem fuga, iusto quasi eveniet aspernatur corrupti, necessitatibus, nostrum ad culpa voluptatibus cumque fugiat.</p>
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

export default ResultItem;