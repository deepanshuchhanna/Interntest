import React from "react";
import Ps from "./Ps";
import "./card2.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Card2() {
  return (
    <>
      <div className="cards2">
        <div className="card">
          <h4>Shortlisted Candidates</h4>
        </div>
        <div id="pup">
          <MoreHorizIcon style={{ color: "white" }} className="icon" />
          <Ps
            style={{
              width: "5vw",
              height: "5vh",
            }}
          />
        </div>
        <h2 className="number">4658</h2>
        <TrendingUpIcon
          style={{
            width: "2vw",
            height: "3vh",
            marginBottom: "-2vh",
            color: "white",
          }}
        />

        <p className="reading">+0.6%</p>
      </div>
    </>
  );
}

export default Card2;
