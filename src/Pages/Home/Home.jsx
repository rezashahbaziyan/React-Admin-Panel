import React from 'react';
import "./Home.scss";
import Sidebar from '../../Component/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className="home">
          <Sidebar/>
          <div className="homeContainer">Cantainer</div>
    </div>
  )
}

export default Home