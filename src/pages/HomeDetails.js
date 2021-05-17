import React, { useEffect, useState } from 'react';
import SingleHome from '../componets/SingleHome/SingleHome';
import Header2 from '../componets/Header/Header2';
import { useParams } from 'react-router-dom';

const HomeDetails = () => {

    const {key} = useParams();
    const [home, setHome] = useState([]);

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
            {
                home.map(h=><SingleHome key={h._id} hom={h}/>)
            }
           
        </div>
    );
};

export default HomeDetails;