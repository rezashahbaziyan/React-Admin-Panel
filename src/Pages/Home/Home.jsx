import React from 'react';
import "./Home.scss";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Widget from '../../Component/Widget/Widget';

const Home = () => {
  return (
    <div className="home">
          <Sidebar/>
          <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
              <Widget/>
              <Widget/>
              <Widget/>
              <Widget/>
            </div>
          </div>
    </div>
  )
}

export default Home