import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className='container'>
        <div className="menuProfile">
            <div className="menuAvatar">
                 <div className='menuAvatarImageBorder'>
                    <div className='menuAvatarImage'></div>
                 </div>
            </div>
            <div className='menuName'>
                <h1>Morsalin Nur</h1>
                <p>@morsalin.nur</p>
            </div>
             <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
        </div>

        
        <div className="menuStats">
            <div className="menuStatsPost">
                 <div className='menuStatsPostBorder'>
                <h3>572</h3>
            <p>Post</p>      
                 </div>
            </div>
            
            <Link to="/followers">
            <div className="menuStatsPost">
                 <div className='menuStatsPostBorder'>
                <h3>6.3k</h3>
            <p>Followers</p>      
                 </div>
            </div>
            </Link>

            <div className="menuStatsPost">
                 <div className='menuStatsPostBorder'>
                <h3>2.5k</h3>
            <p>Following</p>      
                 </div>
            </div>
        </div>

        <div className='menuSection'>
            <div className='menuOptions'>
            <div className='menuOptionLeft'>
                <span>Notification</span>
            <p>See your recent activity</p>
            </div>
            <div className="menuTotal">
                 <div className='menuTotalBorder'>
                    <p>35</p>
                 </div>
            </div>                              
            <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
            </div>

              <Link to="/followers">
            <div className='menuOptions'>
            <div className='menuOptionLeft'>
                <span>Friends</span>
            <p>Friendlist totals</p>
            </div>
            <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
            </div>
            </Link>

            <div className='menuOptions'>
            <div className='menuOptionLeft'>
                <span>Messages</span>
            <p>Message your friends</p>
            </div>
            <div className="menuTotal">
                 <div className='menuTotalBorder'>
                    <p>2</p>
                 </div>
            </div>

            <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
            </div>

            <div className='menuOptions'>
            <div className='menuOptionLeft'>
                <span>Albums</span>
            <p>Save or post your albums</p>
            </div>
            <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
            </div>

            <div className='menuOptions'>
            <div className='menuOptionLeft'>
                <span>Favorites</span>
            <p>Friends you love</p>
            </div>
            <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
            </div>
        </div>
            <div className='menuOptions'>
            <div className='menuOptionLeft'>
                <span>Privacy Policy</span>
            <p>Protect your privacy</p>
            </div>
            <div className="menubutton">
                 <div className='menubuttonBorder'>
                    <KeyboardArrowRightIcon />
                 </div>
            </div>
            </div>
  <div className='secondary-btn'>
          <button className='white-logoutbtn'>Log out</button>
          </div>
    </div>
  )
}

export default Menu;