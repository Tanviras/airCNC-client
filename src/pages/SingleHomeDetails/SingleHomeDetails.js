import React, { useEffect, useState } from 'react';
import Header from '../../componets/Header/Header';
import SingleHome2 from './SingleHome2';
import { useParams } from "react-router-dom";

const SingleHomeDetails = () => {

    const {key} = useParams();
    const [singleHome, setSingleHome] = useState([]);

    //fetching particular home details using key
    useEffect(() => {
      fetch(`https://desolate-river-36921.herokuapp.com/homesById?_id=${key}`)
      .then(res=>res.json())
      .then(data=> 
          {
            setSingleHome(data);
          }
      );
    });

    return (
        <div>
            <Header/>
            {
              singleHome.map(sh=><SingleHome2 key={sh._id} shome={sh}></SingleHome2>) 
            }
            
        </div>
    );
};

export default SingleHomeDetails;