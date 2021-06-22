import React from "react";
import Pup from "./Pup";
import "./card.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
function Card1() {
  return (
    <>
      <div className="cards">
        <div className="card">
          <h4>Total Appications</h4>
        </div>
        <div id="pup">
          <MoreHorizIcon style={{ color: "white" }} className="icon" />
          <Pup
            style={{
              width: "5vw",
              height: "5vh",
            }}
          />
        </div>
        <h2 className="number">7956</h2>
        <TrendingUpIcon
          style={{
            width: "2vw",
            height: "3vh",
            marginBottom: "-2vh",
            color: "purple",
          }}
        />

        <p className="reg">+3.59%</p>
      </div>
    </>
  );
}

export default Card1;
