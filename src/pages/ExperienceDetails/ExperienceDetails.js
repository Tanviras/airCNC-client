import React, { useEffect, useState } from 'react';
import Header from '../../componets/Header/Header';
import { useParams } from "react-router-dom";
import SingleExperience from '../../componets/SingleExperience/SingleExperience';
import loadingSpinner from '../../imagesAll/images/loadingspinner3.gif';

const ExperienceDetails = () => {
    const {key} = useParams();
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

     //fetching particular experinece details using key
     useEffect(() => {
        fetch(`https://desolate-river-36921.herokuapp.com/experiencesById?_id=${key}`)
        .then(res=>res.json())
        .then(data=> 
            {
                setExperiences(data);
                setLoading(false);
            }
        );
      });

    return (
        <div>
            <Header/>
            {
                loading ? 
                (
                <center>
                <h3>Please wait for a while</h3>
                <img src={loadingSpinner} alt='' className="loadingPosition" />
                </center>
                ) :
                (
                    experiences.map(exp=><SingleExperience key={exp._id} experience={exp}></SingleExperience>)
                )  
            }
           
        </div>
    );
};

export default ExperienceDetails;