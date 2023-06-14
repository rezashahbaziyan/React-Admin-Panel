import React from 'react';
import "./Home.scss";
import Sidebar from '../../Component/Sidebar/Sidebar';

const Home = () => {
  return (
    <div className="home">
        <h1 className="title">
          <Sidebar/>
        </h1>
    </div>
  )
}

export default Home