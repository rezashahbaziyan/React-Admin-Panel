import React from 'react';
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className='top'><span className="logo">lamadmin</span></div>
        <hr />
        <div className='center'> 
            <ul>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>Dashboard</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>color options</div>
    </div>
  )
}

export default Sidebar