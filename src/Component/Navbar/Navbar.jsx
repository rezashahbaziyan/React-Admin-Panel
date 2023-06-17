import React from 'react';
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListAltOutlined';



const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className='search'>
          <input type="text" placeholder='Search...' />
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
          <div className="item">
            <LanguageOutlinedIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar