import React from 'react';
import "./Sidebar.scss";
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className='top'><span className="logo">lamadmin</span></div>
        <hr />
        <div className='center'> 
            <ul>
                <li>
                    <GridViewOutlinedIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <li>
                    <PersonOutlineOutlined className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                <StoreMallDirectoryRoundedIcon className='icon'/>
                    <span>Products</span>
                </li>
                <li>
                <CreditCardOutlinedIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                </li>
                <li>
                <InsertChartIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                <NotificationsNoneIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <li>
                <PsychologyIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                <SettingsIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                <PsychologyIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                <LogoutOutlinedIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>color options</div>
    </div>
  )


}

export default Sidebar