import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const {_id,homeName,location,price,image} = props.home;

    return (
        
        <div className="home">

            <Link to={`/singleHome/${_id}`}>
            <img className="img-fluid rounded" src={`data:image/png;base64,${image.img}`} alt=''/>
            </Link>

                <h6>{location}</h6>
                <h5>{homeName}</h5>
                <p className="text-secondary small">${price} per person</p>
                <div className="d-flex small align-items-center">
 
                    <div className="stars">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    
                <span className="mx-1">5</span> superhost
                </div>
        </div>
    
    );
};

export default Home;