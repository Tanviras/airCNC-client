import React , { useState }from 'react';
import logo from '../../imagesAll/images/aircncLogo.png';
import './HostingExperiences.css';
import { Link } from 'react-router-dom';



const HostingExperience = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
  
    const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
    };
  
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("file", file);

        formData.append("hostName", info.hostName);
        formData.append("email", info.email);
        formData.append("location",info.location);
        formData.append("price",info.price);
        formData.append("heading",info.heading);
        formData.append("description",info.description);
    
        fetch("http://localhost:5000/addExperiences", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Your experience is hosted successfully");
          })
          .catch((error) => {
            console.error(error);
          });
      };




    return (
        <div className='hostingPage'>

            <div className='text-center'>
            <Link to="/">
                <img src={logo} alt='logo' className='logoSize '/>
            </Link>
            </div>

            <form class="row g-3" onSubmit={handleSubmit}>

            <div class="col-md-6">
                <label for="hostName" class="form-label">Your Name</label>
                <input type="text" class="form-control" name="hostName" onBlur={handleBlur}/>
            </div>

            <div class="col-md-6">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" class="form-control" name="email"  onChange={handleBlur}/>
            </div>


            <div class="col-md-6">
                <label for="location" class="form-label">Location</label>
                <input type="text" class="form-control" name="location" placeholder="" onBlur={handleBlur}/>
            </div>



            <div class="col-md-6">
                <label for="price" class="form-label">Average cost/day</label>
                <input type="number" class="form-control" name="price" placeholder="" onBlur={handleBlur}/>
            </div>

            <div class="col-md-6">
                <label for="heading" class="form-label">Give a title of your story</label>
                <input type="text" class="form-control" name="heading" placeholder="" onBlur={handleBlur}/>
            </div>


            <div class="col-md-6">
                <label for="file" class="form-label">Upload a photo from your visit</label>
                <input type="file" class="form-control" name="file" onChange={handleFileChange}/>
            </div>


            <div class="col-md-12">
                <label for="description" class="form-label">Share your experiences</label>
                <textarea class="form-control" name="description" placeholder="" rows="3" onBlur={handleBlur}></textarea>
            </div>
        

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Upload</button>
            </div>

            </form>
        </div>
    );
};

export default HostingExperience;