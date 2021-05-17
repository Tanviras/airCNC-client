import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Features from '../../componets/SingleHome/Features/Features';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pricing2 from './Pricing2/Pricing2';


const SingleHome2 = (props) => {
    const {hostName,homeName,location,guest,bedrooms,beds,bathrooms,image,imageTwo}=props.shome;



    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const [homeRules, setHomeRules] = useState({});




    //fetching homerules,homerules are same for every home
    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homeRules")
            .then(res => res.json())
            .then(data => setHomeRules(data));
    }, [homeRules.length]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="images">
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={2}
                    gutter={0}
                    leftChevron={<button class="left-indecator">{'<'}</button>}
                    rightChevron={<button className="right-indecator">{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    {/* particular home er image */}
                    <img className="w-100 d-block" src={`data:image/png;base64,${image.img}`} alt="" />
                    <img className="w-100 d-block" src='https://i.imgur.com/k1rCcMU.jpg' alt="" />
                </ItemsCarousel>


                <Container>
                    <Row className="my-5">
                        <Col md={7} className="pr-5">
                            <div className="d-flex justify-content-between">

                            <h2>{homeName}</h2>

                                <div className="text-center">
                                     <img src={`data:image/png;base64,${imageTwo.img}`}
                                        className="host-img"
                                        alt="" />
                                     <p>{hostName}</p>
                                </div>

                            </div>

                            <p className="text-secondary">{location}</p>
                            <p className="text-secondary border-bottom pb-3">
                                <span className="mr-3">{guest} Guests</span>
                                <span className="mr-3">{bedrooms} bedrooms</span>
                                <span className="mr-3">{beds} beds</span>
                                <span>{bathrooms} bathrooms</span>
                            </p>

                            <Features/>
                            <p className="border-top pt-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, veniam aperiam saepe aliquam sit libero non voluptates tempore est totam numquam, perferendis dolore a minus dolores ullam quaerat necessitatibus hic? Consequuntur commodi provident vero soluta placeat pariatur dolor corporis repudiandae! Distinctio maxime ad, aspernatur, eos dignissimos sed dolor repellendus tempore a sint quae facilis nesciunt quasi ullam tempora ut. Doloribus exercitationem dicta maxime adipisci! Necessitatibus, nihil? Ipsam repellat, aut distinctio sint et laboriosam, esse, corporis consequatur praesentium aliquam saepe fugit repellendus. Aliquam quos excepturi molestias cumque iusto? Fugiat consequuntur, cupiditate quos accusamus ipsam distinctio voluptatibus sit fuga. Facere, consequuntur sint!
                            </p>
                            <h6 className="mt-5">Reviews</h6>
                            <p>
                            <FontAwesomeIcon className="text-primary" icon={faStar}/> 5 (200 reviews)
                            </p> 

                        </Col>

                        <Col md={5}>
                            <Pricing2/>
                        </Col>

                    </Row>
                </Container>


            </div>
        </div>
    );
};

export default SingleHome2;