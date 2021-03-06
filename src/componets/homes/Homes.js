import React from 'react';
import Home from './Home/Home';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';
import './Homes.scss'
import HomePreloader from '../Preloaders/HomePreloader';


const Homes = () => {
    const [preloader,setPreloader] = useState(true);
    const [allHomes, setAllHomes] = useState([]);


    useEffect(() => {
        fetch("https://desolate-river-36921.herokuapp.com/homes")
          .then((res) => res.json())
          .then(data => {
              setAllHomes(data);
              setPreloader(false)
          })
      },[allHomes.length]);


    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
 
    return (
        <section className="homes my-5">

            <div className="d-flex justify-content-between mb-3">
                <h5>Homes</h5>
                <Link to="/homes">See All</Link>
            </div>
            {
                preloader ?
                <HomePreloader/>
                :
            
                <div>
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={3}
                        gutter={12}
                        leftChevron={<button class="left-indecator">{'<'}</button>}
                        rightChevron={<button className="right-indecator">{'>'}</button>}
                        outsideChevron
                        chevronWidth={chevronWidth}
                    >
                        {
                            allHomes.map(home => <Home key={home._id} image={home.image.img} home={home}/>)
                        }
                    </ItemsCarousel>
                </div>
            }
        </section>
        
    );
};

export default Homes;