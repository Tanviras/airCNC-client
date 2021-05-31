import React, { useEffect, useState } from 'react';
import SingleHome from '../componets/SingleHome/SingleHome';
import Header2 from '../componets/Header/Header2';
import { useParams } from 'react-router-dom';
import loadingSpinner from '../imagesAll/images/loadingspinner3.gif';

const HomeDetails = () => {
    const [loading, setLoading] = useState(true);
    const {key} = useParams();
    const [home, setHome] = useState([]);

      //fetching particular home details using key
      useEffect(() => {
        fetch(`https://desolate-river-36921.herokuapp.com/homesById?_id=${key}`)
        .then(res=>res.json())
        .then(data=> 
            {
                setHome(data);
                setLoading(false);
            }
        );
      });


    return (
        <div>
            <Header2/>
            {
                loading ? 
                (
                <center>
                <h3>Please wait for a while</h3>
                <img src={loadingSpinner} alt='' className="loadingPosition" />
                </center>
                ) :
                (
                home.map(h=><SingleHome key={h._id} hom={h}/>)
                )  
            }
           
        </div>
    );
};

export default HomeDetails;