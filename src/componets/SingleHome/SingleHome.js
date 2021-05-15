import React, {useContext, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Features from './Features/Features';
import Pricing from './Features/Pricing/Pricing';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import messi from '../../imagesAll/images/messi.jpg';
import { SearchContext } from '../../App';


const SingleHome = () => {
    const {key} = useParams();
    // console.log(key);//key has all keys of all homes

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    const [homeRules, setHomeRules] = useState({});
    const [home, setHome] = useState({});

    const {searchData} = useContext(SearchContext);



    //fetching homerules,homerules are same for every home
    useEffect(() => {
        fetch("https://air-cnc-homes-api.herokuapp.com/homeRules")
        .then(res=>res.json())
        .then(data=> setHomeRules(data));
    }, [homeRules.length]);


    //fetching particular home details using key
    useEffect(() => {
        fetch(`http://localhost:5000/homesById?_id=${key}`)
        .then(res=>res.json())
        .then(data=> 
            {
                setHome(data);
            }
        
        );
    });
    console.log(home[0].image.img);

  
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

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
                    <img className="w-100 d-block" src={`data:image/png;base64,${home[0].image.img}`} alt=""/>
                    <img className="w-100 d-block" src='https://i.imgur.com/k1rCcMU.jpg' alt=""/> 
                </ItemsCarousel>




                <Container>
                    <Row className="my-5">
                        <Col md={7} className="pr-5">
                            <div className="d-flex justify-content-between">

                                {/* home name */}
                                <h2>{home.name}</h2>

                                <div className="text-center">
                                <img src={messi}
                                className="host-img"
                                alt=""/>
                                <p>Messi</p>
                                </div>
                                
                            </div>
                            <p className="text-secondary">{searchData.data.city}</p>
                            <p className="text-secondary border-bottom pb-3">
                                <span className="mr-3">4 Guests</span>
                                <span className="mr-3">2 bedrooms</span>
                                <span className="mr-3">2 beds</span>
                                <span>2 bathrooms</span>
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
                            <Pricing/>
                        </Col>
                        
                    </Row>

                    
                </Container>
            </div>
            
        </div>
    );
};

export default SingleHome;