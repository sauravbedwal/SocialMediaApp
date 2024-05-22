import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const Notification = () => {
  // const notificationArray = [
  //   {
  //     name: "Aarush Galloway",
  //     noti: "Shared your post",
  //     time: "52 min ago",
  //     url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\notificationImageAvatar1.png",
  //   },
  //   {
  //     name: "Arthur Aguilar",
  //     noti: "Liked your photo",
  //     time: "2 h ago",
  //     url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\notificationImageAvatar2.png",
  //   },
  //   {
  //     name: "Addie Barrera",
  //     noti: "Commented on your post",
  //     time: "3 h ago",
  //     url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\notificationImageAvatar3.png",
  //   },
  //   {
  //     name: "Anne Southern",
  //     noti: "added photo in group Awesome UI Kit",
  //     time: "4 h ago",
  //     url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\notificationImageAvatar4.png",
  //   },
  //   {
  //     name: "Brenden Ramirez",
  //     noti: "Liked your post",
  //     time: "5 h ago",
  //     url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\notificationImageAvatar5.png",
  //   },
  //   {
  //     name: "Braxx Stott",
  //     noti: "Liked your comments",
  //     time: "6 h ago",
  //     url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\notificationImageAvatar6.png",
  //   },
  // ];

  return (
    <div className="container">
      <div className="profileFollowersMenuProfile">
        <Link to="/profile">
          <div className="notificationmenuAvatar">
            <div className="menuAvatarImageBorder">
              <div className="menuAvatarImage"></div>
            </div>
          </div>
        </Link>

        <div className="notificationProfileMenubutton">
          <div className="profileMenubuttonBorder">
            <SearchOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="notificationProfileFollowersMenuName">
        <h1>Notification</h1>
        <div>
          <div className="notificationMenuTotalBorder">
            <p>35</p>
          </div>
        </div>
      </div>

      <div className="menuSection"></div>

      <div className="notification-span">
        <span style={{ color: "#B4B4B4" }}>Show all</span>
        <span style={{ color: "#8B8B8B" }}>Mark all us read</span>
      </div>

      <div id="notification-info">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div>
              <span id="notification-name">Shah Rukh Khan</span>
              <span id="notification-msg">Shared your post</span>
              <p id="notification-time">52 min ago</p>
            </div>
          </div>
        </div>
      </div>

      <div className="notification-read">
        <div id="notification-info">
          <div className="notificationFollowersMenuOptions">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="followersMenuAvatarImage"></div>
              </div>
              <div>
                <span id="notification-name">Shah Rukh Khan</span>
                <span id="notification-msg">Shared your post</span>
                <p id="notification-time">52 min ago</p>
              </div>
            </div>
          </div>
        </div>
        <button className="notification-tick">
          <DoneOutlinedIcon />
          <div>Read</div>
        </button>
      </div>

      <div id="notification-info">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div>
              <span id="notification-name">Shah Rukh Khan</span>
              <span id="notification-msg">Shared your post</span>
              <p id="notification-time">52 min ago</p>
            </div>
          </div>
        </div>
      </div>

      <div id="notification-info">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div>
              <span id="notification-name">Shah Rukh Khan</span>
              <span id="notification-msg">Shared your post</span>
              <p id="notification-time">52 min ago</p>
            </div>
          </div>
        </div>
      </div>

      <div id="notification-info">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div>
              <span id="notification-name">Shah Rukh Khan</span>
              <span id="notification-msg">Shared your post</span>
              <p id="notification-time">52 min ago</p>
            </div>
          </div>
        </div>
      </div>

      <div id="notification-info">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div>
              <span id="notification-name">Shah Rukh Khan</span>
              <span id="notification-msg">Shared your post</span>
              <p id="notification-time">52 min ago</p>
            </div>
          </div>
        </div>
      </div>

      <div id="notification-info">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div>
              <span id="notification-name">Shah Rukh Khan</span>
              <span id="notification-msg">Shared your post</span>
              <p id="notification-time">52 min ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
