import React from 'react'
import Button from './Button';

const Menu = () => {
  return (
    <div className='container'>
        <div className="menuProfile">
            <div className="menuAvatar">
                 <div className='menuAvatarImageBorder'>
                    <div className='menuAvatarImage'></div>
                 </div>
            </div>
            
            <span>
                <h1>Morsalin Nur</h1>
                <p>@morsalin.nur</p>
            </span>
        </div>
        {/* <div>
            <span>
                <h3>572</h3>
            <p>Post</p>
            </span>
            <span>
                <h3>6.3k</h3>
            <p>Followers</p>
            </span>
            <span>
                <h3>2.5k</h3>
            <p>Following</p>
            </span>
        </div>
        <div>
            <h3>Notification</h3>
            <p>See your recent activity</p>
        </div>
         <div>
            <h3>Friends</h3>
            <p>Friendlist totals</p>
        </div>
         <div>
            <h3>Messages</h3>
            <p>Message your friends</p>
        </div>
         <div>
            <h3>Albums</h3>
            <p>Save or post your albums</p>
        </div>
         <div>
            <h3>Favorites</h3>
            <p>Friends you love</p>
        </div>
         <div>
            <h3>Privacy Policy</h3>
            <p>Protect your privacy</p>
        </div>
        <Button title={"Sign in"} /> */}
    </div>
  )
}

export default Menu;