import React from "react";
import "./style.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Chat = () => {
  // const navigate = useNavigate();

  // const handleNavigate = ()=> {
  //   navigate("/followers");
  // };

  return (
    <div className="container">
      <div className="followersMenuProfile">
        <Link to="/followers">
          <div className="followersButton-back">
            <div className="arrow-icon">
              <ArrowBackIcon />
            </div>
          </div>
        </Link>

        <div className="online-icon">
          <FiberManualRecordIcon />
        </div>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <div className="chatFollowersMenuName">
            <div>@tomcruise</div>
            <p>Last active: 10 sec ago</p>
          </div>
        </Link>
        <div className="chatMenubutton">
          <div className="chatMenubuttonBorder">
            <LocalPhoneOutlinedIcon />
          </div>
        </div>
      </div>

      <div className="menuSection"></div>

      <div className="chatUser">
        <div className="chatOwner">
          <p>Hey! How are you? It's been a while. How is your travel to UK?</p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>Hey too!</p>
        </div>

        <div className="chatFriendRepeat">
          <p>
            Its great, UK is awesome, espesially London. New job is good so far!
            How about you?
          </p>
        </div>

        <div className="chatOwner">
          <p>
            {" "}
            I'm fine, i'm thinking about new project. I want to open an online
            store
          </p>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatOwnerAvatarImage"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatOwnerRepeat">
          <p>
            But I don't know what to sell. Maybe I will sell stones and water
          </p>
        </div>

        <div className="chatFriend">
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="chatFriendAvatarImage"></div>
              </div>
            </div>
          </div>
          <p>
            Yeah it's great idea, you know - everyone needs water, I dont know
            about stones xD
          </p>
        </div>
      </div>

      <div className="chatMenuSection"></div>

      <div className="chatmsgsender">
        <div>
          <div className="secondary-btn">
            <input
              className="chatWhite-btn"
              type="text"
              placeholder="Say something"
            />
          </div>
        </div>

        <div>
          <div className="chatMenubutton">
            <div className="chatMenubuttonBorder">
              <div className="chatMenuAvatar">
                <div className="chatMenuAvatarImageBorder">
                  <div className="chatMenuAvatarImage"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
