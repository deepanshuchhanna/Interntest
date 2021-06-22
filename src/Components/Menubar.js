import React from "react";
import PolymerIcon from "@material-ui/icons/Polymer";
import HomeIcon from "@material-ui/icons/Home";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import FolderIcon from "@material-ui/icons/Folder";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import MessageIcon from "@material-ui/icons/Message";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import "./Menubar.css";

export const Menubar = () => {
  return (
    <>
      <div className="menu">
        <PolymerIcon
          style={{
            width: "4vw",
            height: "5vh",
            marginTop: "1.5vh",
            marginLeft: "0vw",
            color: "goldenrod",
          }}
        />

        <HomeIcon style={{ width: "3vw", height: "5vh" }} className="tab" />
        <InsertChartIcon
          style={{ width: "3vw", height: "5vh" }}
          className="tabs"
        />
        <FolderIcon style={{ width: "3vw", height: "5vh" }} className="tabs" />
        <EventAvailableIcon
          style={{ width: "3vw", height: "5vh" }}
          className="tabs"
        />
        <SupervisorAccountIcon
          style={{ width: "3vw", height: "5vh" }}
          className="tabs"
        />
        <MessageIcon style={{ width: "3vw", height: "5vh" }} className="tabs" />
        <ExitToAppIcon
          style={{ width: "3vw", height: "5vh" }}
          className="tabs"
        />
        <SettingsIcon
          style={{ width: "3vw", height: "5vh" }}
          className="setting"
        />
      </div>
    </>
  );
};

export default Menubar;
