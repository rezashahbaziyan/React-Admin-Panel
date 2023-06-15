import React from 'react';
import "./Sidebar.scss";
// import PersonOutline from '@mui/icons-material/PersonOutline'

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
                    {/* <PersonOutlineIcon className="icon"/> */}
                    <span>Users</span>
                </li>
                <li>
                    <span>Products</span>
                </li>
                <li>
                    <span>Orders</span>
                </li>
                <li>
                    <span>Notifications</span>
                </li>
                <li>
                    <span>System Health</span>
                </li>
                <li>
                    <span>Logs</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Profile</span>
                </li>
                <li>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>color options</div>
    </div>
  )


}

export default Sidebar