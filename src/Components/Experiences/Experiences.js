import React, { useState } from 'react';

const Experiences = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;//kono value/text neyar somoy e.target.value .Besides,e.target.name er name asche oi name="email" or, name="name" theke
    setInfo(newInfo);
  }

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];//e.target.files[0] means the first file. Actually we are taking a single file which is obviously the first file
    setFile(newFile);
  }

  const handleSubmit = () => {//files uploading special submit

    const formData = new FormData()
    console.log(info);

    formData.append('file', file);
    formData.append('semiTitle', info.semiTitle);
    formData.append('place', info.place);
    formData.append('mainTitle', info.mainTitle);
    formData.append('perPersonCost', info.perPersonCost);
    formData.append('reviewersNumbers', info.reviewersNumbers);


    fetch('http://localhost:5000/addExperiences', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }


  return (
    <div>

      <form className="row" onSubmit={handleSubmit}>

        <div class="col-md-6">
          <label for="semiTitle" class="form-label">Semi-title</label>
          <input onBlur={handleBlur} type="text" class="form-control" name="semiTitle" />
        </div>



        <div class="col-md-6">
          <label for="place" class="form-label">Place</label>
          <input onBlur={handleBlur} type="text" class="form-control" name="place" />
        </div>

        <div class="col-12">
          <label for="mainTitle" class="form-label">Main Title</label>
          <input onBlur={handleBlur} type="text" class="form-control" name="mainTitle" />
        </div>

        <div class="col-12">
          <label for="perPersonCost" class="form-label">Per Person Cost</label>
          <input onBlur={handleBlur} type="number" class="form-control" name="perPersonCost" />
        </div>

        <div class="col-md-6">
          <label for="reviewersNumbers" class="form-label">Reviewers number</label>
          <input onBlur={handleBlur} type="number" class="form-control" name="reviewersNumbers" />
        </div>

        <div class="col-md-6">
          <label for="uploadPic" class="form-label">Upload picture</label>
          <input onChange={handleFileChange} type='file' class="form-control" name="uploadPic" />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add experience</button>
        </div>

      </form>


    </div>


  );
};

export default Experiences;