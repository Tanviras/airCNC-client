import React, { useEffect, useState } from 'react';
import SingleHome from '../componets/SingleHome/SingleHome';
import Header2 from '../componets/Header/Header2';
import { useParams } from 'react-router-dom';

const HomeDetails = () => {

    const {key} = useParams();
    const [home, setHome] = useState([null]);

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

    return (
        <div>
            <Header2/>
            <SingleHome key={home._id} home={home}/>
        </div>
    );
};

export default HomeDetails;