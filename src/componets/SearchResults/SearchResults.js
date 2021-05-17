import React from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import ResultItem from './ResultItem/ResultItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { SearchContext } from '../../App';

const SearchResults = () => {

    const [results, setResults] = useState([]);
    const {searchData} = useContext(SearchContext);

    useEffect(() => {
        fetch("http://localhost:5000/homes")
        .then(res=>res.json())
        .then(data => setResults(data))
    },[results.length])

    return (
        <div className="search-results my-4">
           <h4>Stay in {searchData.city || "Dhaka"}</h4> 

           <SearchFilter/>
           <div>
              
               {
                   results.map(result => <ResultItem key ={result._id} home={result}/> )
               }
               
           </div>
        </div>
    );
};

export default SearchResults;