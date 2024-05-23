import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const Notification = () => {
  const notificationArray = [
    {
      name: "Aarush Galloway",
      noti: "Shared your post",
      time: "52 min ago",
    },
    {
      name: "Arthur Aguilar",
      noti: "Liked your photo",
      time: "2 h ago",
    },
    {
      name: "Addie Barrera",
      noti: "Commented on your post",
      time: "3 h ago",
    },
    {
      name: "Anne Southern",
      noti: "added photo in group Awesome UI Kit",
      time: "4 h ago",
    },
    {
      name: "Brenden Ramirez",
      noti: "Liked your post",
      time: "5 h ago",
    },
    {
      name: "Braxx Stott",
      noti: "Liked your comments",
      time: "6 h ago",
    },
  ];

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

      {notificationArray.map((input, index) => {
        return (
          <div id="notification-info">
            <div className="followersMenuOptions">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  className={
                    index == 0
                      ? "notificationFollowersMenuAvatarImage1"
                      : index == 1
                      ? "notificationFollowersMenuAvatarImage2"
                      : index == 2
                      ? "notificationFollowersMenuAvatarImage3"
                      : index == 3
                      ? "notificationFollowersMenuAvatarImage4"
                      : index == 4
                      ? "notificationFollowersMenuAvatarImage5"
                      : index == 5
                      ? "notificationFollowersMenuAvatarImage6"
                      : "notificationFollowersMenuAvatarImage1"
                  }
                ></div>
                <div style={{ marginLeft: "10px" }}>
                  <span id="notification-name">{input.name}</span>
                  <span id="notification-msg">{input.noti}</span>
                  <div id="notification-time">{input.time}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="notification-read">
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
      </div> */}
    </div>
  );
};

export default Notification;
