import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Followers = () => {
  //   const followersArray = [
  //     {
  //       name: "Shah Rukh Khan",
  //       handle: "@srk",
  //       status: "Follow",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersSrkImage.png",
  //     },
  //     {
  //       name: "Robert Downey Jr.",
  //       handle: "@rdj",
  //       status: "Following",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersImageAvatar2.png",
  //     },
  //     {
  //       name: "Tom Cruise",
  //       handle: "@tomcruise",
  //       status: "Follow",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersImageAvatar3.png",
  //     },
  //     {
  //       name: "Elezabeth",
  //       handle: "@elezabeth",
  //       status: "Follow",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersImageAvatar4.png",
  //     },
  //     {
  //       name: "Kate Winslet",
  //       handle: "@KateWinslet",
  //       status: "Follow",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersImageAvatar5.png",
  //     },
  //     {
  //       name: "Saoirse Hopper",
  //       handle: "@saoirsehop",
  //       status: "Following",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersImageAvatar2.png",
  //     },
  //     {
  //       name: "Melina Charlton",
  //       handle: "@melinacharlton",
  //       status: "Following",
  //       url: "F:Coding PROJECTTech Ocenaic Technologies ProjectSocialMediaAppmy-appsrcimages\followersImageAvatar4.png",
  //     },
  //   ];

  return (
    <div className="container">
      <div className="followersMenuProfile">
        <div className="menuAvatar">
          <Link to="/menu">
            <div className="followersButton-back">
              <div className="arrow-icon">
                <ArrowBackIcon />
              </div>
            </div>
          </Link>
        </div>
        <div className="followersMenuName">
          <h1>Followers(4K)</h1>
        </div>
      </div>

      <div className="menuSection"></div>

      <div className="menuSection">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div className="menuOptionLeft">
              <span>Shah Rukh Khan</span>
              <p>@srk</p>
            </div>
          </div>
          <div>
            <div className="followersMenuTotalBorder">
              <p>Follow</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div className="menuOptionLeft">
              <span>Robert Downey Jr.</span>
              <p>@rdj</p>
            </div>
          </div>
          <div>
            <div className="followersMenubuttonBorder">
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuSection">
        <Link to="/chat" style={{ textDecoration: "none" }}>
          <div className="followersMenuOptions">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="followersMenuAvatar">
                <div className="followersMenuAvatarImage"></div>
              </div>
              <div className="menuOptionLeft">
                <span>Tom Cruise</span>
                <p>@tomcruise</p>
              </div>
            </div>
            <div>
              <div className="followersMenuTotalBorder">
                <p>Follow</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="menuSection">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div className="menuOptionLeft">
              <span>Elezabeth</span>
              <p>@elezabeth</p>
            </div>
          </div>
          {/* <div>
                 <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                 </div>
            </div>                               */}
          <div>
            <div className="followersMenubuttonBorder">
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div className="menuOptionLeft">
              <span>Shah Rukh Khan</span>
              <p>@srk</p>
            </div>
          </div>
          {/* <div>
                 <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                 </div>
            </div>                               */}
          <div>
            <div className="followersMenubuttonBorder">
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div className="menuOptionLeft">
              <span>Shah Rukh Khan</span>
              <p>@srk</p>
            </div>
          </div>
          {/* <div>
                 <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                 </div>
            </div>                               */}
          <div>
            <div className="followersMenubuttonBorder">
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>

      <div className="menuSection">
        <div className="followersMenuOptions">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="followersMenuAvatar">
              <div className="followersMenuAvatarImage"></div>
            </div>
            <div className="menuOptionLeft">
              <span>Shah Rukh Khan</span>
              <p>@srk</p>
            </div>
          </div>
          {/* <div>
                 <div className='followersMenuTotalBorder'>
                    <p>Follow</p>
                 </div>
            </div>                               */}
          <div>
            <div className="followersMenubuttonBorder">
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
            <span>Image</span>
            <span>
                <h1>Shah Rukh Khan</h1>
                <p>@srk</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Robert Downey Jr.</h1>
                <p>@rdj</p>
            </span>
            <span>
                <button>following</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Tom Cruise</h1>
                <p>@tomcruise</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Elezabeth</h1>
                <p>@elezabeth</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Kate Winslet</h1>
                <p>@KateWinslet</p>
            </span>
            <span>
                <button>follow</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Saoirse Hopper</h1>
                <p>@saoirsehop</p>
            </span>
            <span>
                <button>following</button>
            </span>
        </div>

        <div>
            <span>Image</span>
            <span>
                <h1>Melina Charlton</h1>
                <p>@melinacharlton</p>
            </span>
            <span>
                <button>following</button>
            </span>
        </div>

        </div> */}
    </div>
  );
};

export default Followers;
