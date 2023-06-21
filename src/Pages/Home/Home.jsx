import React from 'react';
import "./Home.scss";
import Sidebar from '../../Component/Sidebar/Sidebar';
import Navbar from '../../Component/Navbar/Navbar';
import Widget from '../../Component/Widget/Widget';
import Featured from '../../Component/Featured/Featured';
import Chart from '../../Component/Chart/Chart';

const Home = () => {
  return (
    <div className="home">
          <Sidebar/>
          <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart/>
            </div>
          </div>
    </div>
  )
}

export default Home