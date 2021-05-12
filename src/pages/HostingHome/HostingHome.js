import React, { useState } from 'react';
import './HostingHome.css';
import logo from '../../imagesAll/images/aircncLogo.png';
import { Link } from 'react-router-dom';

const HostingHome = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    const [fileTwo ,setFileTwo] = useState({});
  
    const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
    };
  
    const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
    };

    const handleFileChangeTwo = (e) => {
        const newFileTwo = e.target.files[0];
        setFileTwo(newFileTwo);
      };


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
    
        formData.append("file", file);
        formData.append("fileTwo", fileTwo);

        formData.append("hostName", info.hostName);
        formData.append("email", info.email);
        formData.append("homeName", info.homeName);
        formData.append("category",info.category);
        formData.append("location",info.location);
        formData.append("guest", info.guest);
        formData.append("bedrooms", info.bedrooms);
        formData.append("beds", info.beds);
        formData.append("bathrooms", info.bathrooms);
        formData.append("swimmingPool",info.swimmingPool);
        formData.append("price",info.price);
    
        fetch("http://localhost:5000/addHomes", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Your home is hosted successfully");
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
                <label for="fileTwo" class="form-label">Upload a photo of you</label>
                <input type="file" class="form-control" name="fileTwo" onChange={handleFileChangeTwo}/>
            </div>

            

            <div class="col-md-6">
                <label for="homeName" class="form-label">Give a name of your home</label>
                <input type="text" class="form-control" name="homeName" onBlur={handleBlur} placeholder='Unique Cob Cottage'/>
            </div>

            <div class="col-md-3">
                <label for="category" class="form-label">Category</label>
                <select name="category" class="form-select" onBlur={handleBlur}>
                <option selected>Cottage</option>
                <option>Flat</option>
                <option>Townhome</option>
                <option>Cape Cod</option>
                <option>Contemporary</option> 
                <option>Farmhouse</option>
                <option>Ranch</option>
                </select>
            </div>

            <div class="col-md-3">
                <label for="guest" class="form-label">Maximum no. of guests</label>
                <input type="number" class="form-control" name="guest" placeholder="" onBlur={handleBlur}/>
            </div>

            <div class="col-md-6">
                <label for="location" class="form-label">Location</label>
                <input type="text" class="form-control" name="location" placeholder="" onBlur={handleBlur}/>
            </div>

            

            <div class="col-md-3">
                <label for="bedrooms" class="form-label">Total Bedrooms</label>
                <input type="number" class="form-control" name="bedrooms" placeholder="" onBlur={handleBlur}/>
            </div>

            <div class="col-md-3">
                <label for="beds" class="form-label">Total Beds</label>
                <input type="number" class="form-control" name="beds" placeholder="" onBlur={handleBlur}/>
            </div>

            <div class="col-md-3">
                <label for="bathrooms" class="form-label">Total Bathrooms</label>
                <input type="number" class="form-control" name="bathrooms" placeholder="" onBlur={handleBlur}/>
            </div>

            <div class="col-md-3">
                <label for="swimmingPool" class="form-label">Have swimming pool?</label>
                <input type="text" class="form-control" name="swimmingPool" placeholder="Yes/No?" onBlur={handleBlur}/>
            </div>

            <div class="col-md-6">
                <label for="price" class="form-label">Cost/night</label>
                <input type="number" class="form-control" name="price" placeholder="" onBlur={handleBlur}/>
            </div>

            <div class="col-md-6">
                <label for="file" class="form-label">Upload a photo of your home</label>
                <input type="file" class="form-control" name="file" onChange={handleFileChange}/>
            </div>
        

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Upload</button>
            </div>

            </form>
        </div>
    );
};

export default HostingHome;