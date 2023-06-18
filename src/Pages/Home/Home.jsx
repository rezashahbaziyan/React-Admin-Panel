import React from 'react';
import "./Home.scss";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';

const Home = () => {
  return (
    <div className="home">
          <Sidebar/>
          <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
              
            </div>
          </div>
    </div>
  )
}

export default Home