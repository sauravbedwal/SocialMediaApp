import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Profile = () => {
  return (
    <div className="container">
      <div className="followersMenuProfile">
        <div className="menuAvatar">
          <Link to="/chat">
            <div className="followersButton-back">
              <div className="arrow-icon">
                <ArrowBackIcon />
              </div>
            </div>
          </Link>
        </div>

        <div className="followersMenuName">
          <h1>Profile</h1>
        </div>

        <div className="profileMenubutton">
          <div className="chatMenubuttonBorder">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="chatMenubuttonBorder">
            <SearchOutlinedIcon />
          </div>
        </div>

        <div className="chatMenuSection"></div>

        {/* <div className="menuProfile">
          <div className="menuAvatar">
            <div className="menuAvatarImageBorder">
              <div className="menuAvatarImage"></div>
            </div>
          </div>
        </div> */}

        {/* <div className="chatFollowersMenuName">
          <div>@tomcruise</div>
          <p>Last active: 10 sec ago</p>
        </div> */}

        {/* <div className="chatMenubutton">
          <div className="chatMenubuttonBorder">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <PinterestIcon />
            <TwitterIcon />
          </div>
        </div> */}

        {/* <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="online-icon">
              <FiberManualRecordIcon />
            </div>
            <div className="chatMenubutton">
              <div className="chatMenubuttonBorder">
                <SmsOutlinedIcon />
              </div>
            </div>
            <div>
              <div className="followersMenubuttonBorder">
                <p>Following</p>
              </div>
            </div>
          </div>

          <div>
            <div className="followersMenuTotalBorder">
              <p>Follow</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
