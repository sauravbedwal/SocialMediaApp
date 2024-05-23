import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Follower {
  name: string;
  username: string;
  buttonText: string;
}

const Followers = () => {
  // const promise = new Promise((resolve, reject) => {
  //   let foodAvailable = true;

  //   if (foodAvailable) {
  //     resolve(foodAvailable);
  //   } else {
  //     const error = new Error("Error: 404 Something is Wrong!!!");
  //     reject(error);
  //   }
  // });

  // const promise = fetch("")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // async function getData() {
  //   const data = await fetch(promise);
  //   const json = await data.json();
  // }

  // getData();

  const followersArray: Follower[] = [
    {
      name: "Shah Rukh Khan",
      username: "@srk",
      buttonText: "follow",
    },
    {
      name: "Robert Downey Jr.",
      username: "@rdj",
      buttonText: "following",
    },
    {
      name: "Tom Cruise",
      username: "@tomcruise",
      buttonText: "follow",
    },
    {
      name: "Elezabeth",
      username: "@elezabeth",
      buttonText: "follow",
    },
    {
      name: "Kate Winslet",
      username: "@KateWinslet",
      buttonText: "follow",
    },
    {
      name: "Saoirse Hopper",
      username: "@saoirsehop",
      buttonText: "following",
    },
    {
      name: "Melina Charlton",
      username: "@melinacharlton",
      buttonText: "following",
    },
  ];

  return (
    <div className="container container-padding2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "85px",
          width: "300px",
        }}
      >
        <div style={{ width: "14vw" }}>
          <Link to="/menu">
            <div className="followersButton-back">
              <div className="arrow-icon">
                <ArrowBackIcon />
              </div>
            </div>
          </Link>
        </div>
        <div className="followersMenuProfile">
          <div style={{ fontWeight: "bold", fontSize: "14px" }}>
            Followers(4K)
          </div>
        </div>
      </div>

      <div className="menuSection"></div>

      {followersArray.map((input: Follower, index: number) => {
        return (
          <div
            key={input.name}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              height: "100px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                className={
                  index === 0
                    ? "followersMenuAvatarImage1"
                    : index === 1
                    ? "followersMenuAvatarImage2"
                    : index === 2
                    ? "followersMenuAvatarImage3"
                    : index === 3
                    ? "followersMenuAvatarImage4"
                    : index === 4
                    ? "followersMenuAvatarImage5"
                    : index === 5
                    ? "followersMenuAvatarImage6"
                    : index === 6
                    ? "followersMenuAvatarImage7"
                    : "followersMenuAvatarImage1"
                }
              ></div>
              <div
                style={{
                  margin: "0 0 0 5px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "22.5px",
                    color: "#1D1D20",
                  }}
                >
                  {input.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "#919191",
                  }}
                >
                  {input.username}
                </div>
              </div>
            </div>
            <div
              className={
                input.buttonText === "follow"
                  ? "followersMenuTotalBorder"
                  : "followersMenubuttonBorder"
              }
            >
              <p>{input.buttonText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
