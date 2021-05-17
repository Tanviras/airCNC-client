import React, { useEffect, useState } from 'react';

const SingleExperience = (props) => {

         const {image,hostName,location,heading,price}=props.experience;



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>

            <div className="row">

                <div className="col-md-6">
                    <img src={`data:image/png;base64,${image.img}`} alt='' style={{ width: '661px', height: '85vh', margin: 'auto' }} />
                </div>

                <div className="col-md-6">
                    <img src='https://i.imgur.com/K1NnCJP.jpg' alt='' style={{ width: '661px', height: '85vh', margin: 'auto' }} />
                </div>

            </div>

            <center className='mt-5 mb-5'>
                <h3>{heading}</h3>narrated by {hostName}
                
            </center>

            <div className="row">
                <div className="col-md-6" style={{ paddingLeft: '50px', paddingRight: '50px' }}>

                    <b>Description</b>
                    <h4>A beautiful place near {location}</h4>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloribus quam vel nam a numquam dolorem facilis atque quos perferendis sit ut laborum voluptatem debitis sint doloremque labore mollitia, totam fugit excepturi saepe maxime natus. Necessitatibus, qui totam consequatur dolorum tenetur reprehenderit animi placeat laboriosam vitae numquam sunt. Eveniet a magni nulla, culpa assumenda numquam, quam fugiat iusto sequi maiores consequuntur vitae voluptatum deleniti voluptatem asperiores repellendus libero tempora est nobis, quas error iure </p>
                </div>



                <div className="col-md-6" style={{ paddingLeft: '50px', paddingRight: '50px' }}>

                    <div>
                        <b> What to do</b>
                        <div className='text-secondary'>
                            <li type='none'>Lorem ipsum dolor sit amet.</li>
                            <li type='none'>Lorem ipsum dolor sit amet.</li>
                            <li type='none'>Lorem ipsum dolor sit amet.</li>
                        </div>
                    </div>

                    <div>
                        <b> What not to do</b>
                        <div className='text-secondary'>
                            <li type='none'>Lorem ipsum dolor sit amet.</li>
                            <li type='none'>Lorem ipsum dolor sit amet.</li>
                            <li type='none'>Lorem ipsum dolor sit amet.</li>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className='col-md-6' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                    <b>Recommended tour season</b>
                    <p className='text-secondary'>November-December</p>
                </div>

                <div className='col-md-6' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                    <b>Recommended hotel/cottage nearby</b>
                    <p className='text-secondary'>The Pan Pacific Sonargaon</p>
                </div>
            </div>


            <div className='row'>
                <div className='col-md-6' style={{ paddingLeft: '50px', paddingRight:'50px' }}>
                    <b>Cost</b>
                    <p className='text-secondary'>${price}/night</p>
                </div>

                <div className='col-md-6' style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                    <b>Best Route to come from Dhaka airport</b>
                    <p className='text-secondary'>Lorem - ipsum - dolor - sit -amet</p>
                </div>

            </div>



        </div>
    );
};

export default SingleExperience;