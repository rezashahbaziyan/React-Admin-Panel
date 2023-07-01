import React from 'react';
import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                {/* blue circle line */}
                <CircularProgressbar value={70} text='70%' strokeWidth={1}/> 
            </div>
        </div>
    </div>
  )
}

export default Featured