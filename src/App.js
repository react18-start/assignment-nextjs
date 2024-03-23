
import React from "react";
import {useState} from "react";
import { useNavigate, useParams} from 'react-router-dom';
import 'C:/Users/Faisal/Desktop/figma-app/src/App.css';
import image1 from '../src/images/image1.png';
import image2 from '../src/images/Rectangle 530.png';
import image3 from '../src/images/Rectangle 531.png';
import image4 from '../src/images/Rectangle 532.png';
import Card from "./Card";

const Home = () => {
  const [showRegions, setShowRegions] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const param =  useParams()
const originId = param?.id
  const toggleRegions = () => {
    setShowRegions(!showRegions);
  };

  const handleRegionClick = (region) => {
    navigate(`/en-${region.toLowerCase()}`);
  };

  return(
    <>
      <div className="figma">
          <div className="frame">
            <div className="header">
              <p>NETSOL</p>
              <div className="drop-down">
              <button className="btn" onClick={toggleRegions}>Regions</button>
              {showRegions && (
                <div className="dropdown">
                  <ul>
                    <li onClick={() => handleRegionClick("USA")} className={originId.includes("usa") && "active"}>
                      USA
                      <hr className="border-line"/>
                    </li>
                    <li onClick={() => handleRegionClick("UK")} className={originId.includes("uk") && "active"}>
                      UK
                      <hr className="border-line"/>
                    </li>
                    <li onClick={() => handleRegionClick("China")} className={originId.includes("china") && "active"}>
                      China
                      <hr className="border-line"/>
                    </li>
                    <li onClick={() => handleRegionClick("Pakistan")} className={originId.includes("pakistan") && "active"}>
                      Pakistan
                      <hr className="border-line"/>
                    </li>
                  </ul>
                </div>
              )}
              </div>
            </div>
            <div className="content">
              <button>News and Insight</button> 
              <div className="p3">Latest Insight from Leading Voices</div>
              <div className="p1">Solving the world’s problems through technology wouldn’t be possible without our most important <br/> invention: the NetSol. Have a look at our talented teams.</div>
              <div className="p2">
                View All News
                <hr className="border-line"/>
              </div>
              
            </div>
            <div className="cards">
              <Card
                image={image1}
                btnTitle={'NEWS'}
                heading={'Leasing Life Conference & Awards'}
                description={<p>Solving the world’s problems through technology wouldn’t be possible without our most important  invention.</p>}
              />
              <Card
                image={image2}
                btnTitle={'BLOG'}
                heading={'Auto Finance Summit 2023'}
                description={<p>Solving the world’s problems through technology wouldn’t be possible without our most important  invention.</p>}
              />
              <Card
                image={image3}
                btnTitle={'NEWS'}
                heading={'Careers at Netsol'}
                description={<p>Solving the world’s problems through technology wouldn’t be possible without our most important  invention.</p>}
              />

              <Card
                image={image4}
                btnTitle={'BLOG'}
                heading={'Leasing Life Conference & Awards'}
                description={<p>Solving the world’s problems through technology wouldn’t be possible without our most important  invention.</p>}
              />
            </div>
        </div>

      </div>.
    </>
  );
}
export default Home;