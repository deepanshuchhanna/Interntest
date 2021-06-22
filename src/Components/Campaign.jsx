import React from "react";
import "./campaign.css";
import Buttons from "./Buttons";
import NearMeIcon from "@material-ui/icons/NearMe";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
function Campaign() {
  return (
    <>
      <div className="cardi">
        <div className="card">
          <h3>Referals and Campaign stats</h3>
        </div>
        <div className="stat">
          <NearMeIcon
            style={{
              color: "red",
              marginLeft: "-2vw",
              width: "2vw",
              height: "3vh",
              marginTop: "-2vh",
            }}
          />
          <p style={{ color: "red", marginTop: "-4vh" }}>
            40 Campaigns sent in total
          </p>
          <p style={{ color: "white", marginTop: "-2vh" }}>
            4 Campaigns sent in last month
          </p>
        </div>
        <div className="smallcard1">
          <p>User's reached</p>
          <TrendingUpIcon style={{ color: "skyblue", marginTop: "1vh" }} />
          <p style={{ color: "skyblue", float: "right", marginRight: "1vw" }}>
            +3.59%
          </p>
          <h2 style={{ marginTop: "-1vh" }}>7956</h2>
        </div>
        <div className="smallcard2">
          <p style={{ marginTop: "0vh" }}>Referals</p>
          <TrendingUpIcon style={{ color: "skyblue", marginTop: "1vh" }} />
          <p style={{ color: "skyblue", float: "right", marginRight: "1vw" }}>
            +9.01%
          </p>
          <h2 style={{ marginTop: "-1vh" }}>0662</h2>
        </div>

        <div className="smallcard3">
          <p style={{ marginTop: "0vh" }}>Shares</p>
          <TrendingUpIcon style={{ color: "skyblue", marginTop: "1vh" }} />
          <p
            style={{
              color: "skyblue",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
            }}
          >
            +39.18%
          </p>
          <h2 style={{ marginTop: "-1vh" }}>1478</h2>
        </div>

        <div className="smallcard4">
          <p style={{ marginTop: "0vh" }}>Shares</p>
          <TrendingUpIcon style={{ color: "skyblue", marginTop: "1vh" }} />
          <p
            style={{
              color: "skyblue",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
            }}
          >
            +39.18%
          </p>
          <h2 style={{ marginTop: "-1vh" }}>1478</h2>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default Campaign;
