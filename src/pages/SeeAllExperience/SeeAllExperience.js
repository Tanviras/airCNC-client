import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Map from '../../componets/Map/Map';
import ResultItem from '../../componets/SearchResults/ResultItem/ResultItem';
import SearchFilter from '../../componets/SearchResults/SearchFilter/SearchFilter';

const SeeAllExperience = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/experiences")
        .then(res=>res.json())
        .then(data => setResults(data))
    },[results.length])

    return (
        <div>
           <Container>
                <Row>

                    <Col md={6}>
                        <SearchFilter />
                        <div>

                            {
                                results.map(result => <ResultItem key={result._id} home={result} />)
                            }

                        </div>
                    </Col>

                    <Col md={6}>
                        <Map/>
                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default SeeAllExperience;