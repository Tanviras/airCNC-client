import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Experience = (props) => {
    const { _id, location, price, heading, image } = props.experience;

    return (
        <div className="home experience">

            <Link to={`/experience/${_id}`}>

                <img className="img-fluid rounded" src={`data:image/png;base64,${image.img}`} alt='' style={{width:'175px',height:'145.13px'}}/>
                <h6>{location}</h6>
                <h5>{heading}</h5>
                <p className="text-secondary small">${price} per person</p>
                <div className="d-flex small align-items-center">
                    {/* {
                    review[0].count ===5 && */}
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>

                    {/* }  */}
                    <span className="mx-1">5</span>
                </div>

            </Link>
        </div>

    );
};

export default Experience;