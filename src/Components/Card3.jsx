import React from "react";
import Pdown from "./Pdown";
import "./card3.css";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Card2() {
  return (
    <>
      <div className="cards3">
        <div className="card">
          <h4>Total Applications</h4>
        </div>
        <div id="pup">
          <MoreHorizIcon style={{ color: "white" }} className="icon" />
          <Pdown
            style={{
              width: "5vw",
              height: "5vh",
            }}
          />
        </div>
        <h2 className="number">1501</h2>
        <TrendingDownIcon
          style={{
            width: "2vw",
            height: "3vh",
            marginBottom: "-2vh",
            color: "maroon",
          }}
        />

        <p className="readings">+0.4%</p>
      </div>
    </>
  );
}

export default Card2;
