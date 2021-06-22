import "./App.css";
import Menubar from "./Components/Menubar";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Graph from "./Components/Graph.js";
import Campaign from "./Components/Campaign";
import Application from "./Components/Application";
import Pie1 from "./Components/Pie1";
import Chatbox from "./Components/Chatbox";

import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "4vw",
          left: "0",
          top: "0",
        }}
        className="main"
      >
        <Menubar />
      </div>
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "96vw",
          left: "4vw",
          top: "0",
        }}
      >
        <div style={{ float: "right", marginRight: "10px", marginTop: "4vh" }}>
          <NotificationsIcon
            style={{
              width: "2vw",
              height: "4vh",
              color: "white",
              marginLeft: "11vw",
            }}
            className="bell"
          />
          <FiberManualRecordIcon
            style={{
              width: "1vw",
              height: "1.4vh",
              color: "skyblue",
              marginRight: "-20px",
            }}
            className="dot"
          />
          <p className="name">John Bayer</p>

          <AccountCircleIcon
            style={{
              width: "4vw",
              height: "5vh",
              color: "white",
              float: "right",
            }}
          />
          <ArrowDropDownIcon
            style={{
              width: "2vw",
              height: "4vh",
              color: "white",
              float: "right",
            }}
          />
          <br />

          <div style={{ marginTop: "20px" }} className="srch">
            <Button
              variant="outlined"
              color="primary"
              style={{
                marginRight: "20px",
                color: "white",
                backgroundColor: "rgb(3, 176, 245)",
              }}
            >
              <AddIcon
                style={{
                  width: "2vw",
                  height: "2vh",
                  color: "white",
                }}
              />
              Add
            </Button>
            <Button
              variant="contained"
              className="btn"
              style={{ color: "green" }}
            >
              <SearchIcon
                style={{
                  width: "3vw",
                  height: "3vh",
                  color: "black",
                }}
              />
            </Button>

            <input
              type="search"
              className="searchbar"
              placeholder=" Search for Application here"
            />
          </div>
        </div>

        <h2 className="dashboard">DashBoard</h2>
        <p className="day">
          Tuesday,<strong className="date">02 June 2021</strong>
        </p>

        <Card1 />
        <Card2 />
        <Card3 />
        <Graph />
        <Campaign />
        <Application />
        <Pie1 />
        <Chatbox />
      </div>
    </>
  );
}

export default App;
