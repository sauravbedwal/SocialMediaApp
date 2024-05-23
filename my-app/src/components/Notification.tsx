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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "300px",
        }}
      >
        <Link to="/profile">
          <div
            style={{
              border: "1px solid green",
              borderRadius: "50%",
              padding: "2px",
            }}
          >
            <div className="menuAvatarImage"></div>
          </div>
        </Link>
        <SearchOutlinedIcon />
      </div>
      <div className="notificationProfileFollowersMenuName">
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "27px",
            color: "#1A1B23",
            margin: "0 10px 0 0",
          }}
        >
          Notification
        </div>
        <div className="notificationMenuTotalBorder">
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "white",
            }}
          >
            35
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
            <div className="notificationMenuOptions">
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
            {index === 1 && (
              <button className="notification-tick">
                <DoneOutlinedIcon />
                <div>Read</div>
              </button>
            )}
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
      </div>*/}
    </div>
  );
};

export default Notification;
