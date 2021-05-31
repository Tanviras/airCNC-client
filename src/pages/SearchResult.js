import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Header2 from '../componets/Header/Header2';
import { SearchContext } from '../App';
import SearchFilter from '../componets/SearchResults/SearchFilter/SearchFilter';
import ResultItem from '../componets/SearchResults/ResultItem/ResultItem';
import loadingSpinner from '../imagesAll/images/loadingspinner3.gif';
const SearchResult = () => {
    const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    const { searchData } = useContext(SearchContext);

    useEffect(() => {
        fetch("https://desolate-river-36921.herokuapp.com/homes")
            .then(res => res.json())
            .then(data => {
                setResults(data)
                setLoading(false);
            })
    }, [results.length])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header2 />

            <Container>
                <Row>
                    <Col md={12}>
                        {
                            loading ? 
                            (
                            <center>
                            <h3>Please wait for a while</h3>
                            <img src={loadingSpinner} alt='' className="loadingPosition" />
                            </center>
                            ) :
                                        (<div className="search-results my-4">
                                                <h4>Stay in {searchData.city || "Dhaka"}</h4>

                                                <SearchFilter />
                                                <div>

                                                    {
                                                        results.map(result => <ResultItem key={result._id} home={result} />)
                                                    }

                                                </div>
                                        </div>)
                        }
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default SearchResult;