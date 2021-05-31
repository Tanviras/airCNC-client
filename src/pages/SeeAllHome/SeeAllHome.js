import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Header from '../../componets/Header/Header';
import Map from '../../componets/Map/Map';
import SearchFilter from '../../componets/SearchResults/SearchFilter/SearchFilter';
import ResultItem2 from '../SingleHomeDetails/ResultItem2/ResultItem2';

const SeeAllHome = () => {

    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://desolate-river-36921.herokuapp.com/homes")
            .then(res => res.json())
            .then(data => setResults(data))
    }, [results.length])

    return (
        <div>

            <Header/>

            <Container>
                <Row>

                    <Col md={6}>
                        <SearchFilter/>
                        <div>

                            {
                                results.map(result => <ResultItem2 key={result._id} home={result} />)
                            }

                        </div>
                    </Col>

                    <Col md={6}>
                        <Map />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default SeeAllHome;