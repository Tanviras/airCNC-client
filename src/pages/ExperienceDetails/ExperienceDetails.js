import React, { useEffect, useState } from 'react';
import Header from '../../componets/Header/Header';
import { useParams } from "react-router-dom";
import SingleExperience from '../../componets/SingleExperience/SingleExperience';

const ExperienceDetails = () => {
    const {key} = useParams();
    const [experiences, setExperiences] = useState([]);

     //fetching particular experinece details using key
     useEffect(() => {
        fetch(`http://localhost:5000/experiencesById?_id=${key}`)
        .then(res=>res.json())
        .then(data=> 
            {
                setExperiences(data);
            }
        );
      });


    return (
        <div>
            <Header/>
            <SingleExperience key={experiences._id} experience={experiences} ></SingleExperience>
        </div>
    );
};

export default ExperienceDetails;