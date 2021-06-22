import React from "react";
import "./chat.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import CallIcon from "@material-ui/icons/Call";
function Chatbox() {
  return (
    <>
      <div className="box1">
        <p style={{ marginTop: "1vh", textAlign: "center" }}>
          Hello John Bayer,
        </p>
        <p style={{ marginTop: "-1vh", textAlign: "center" }}>
          You have 8 New Applications Today!
          <ArrowForwardIcon style={{ marginTop: "-3vh", float: "left" }} />
        </p>
        <img
          src="./images/img.jpg"
          alt="pic"
          style={{ width: "450px", height: "120px", marginLeft: "1vw" }}
        />
        <div className="box2">
          <ol
            style={{ fontWeight: "bold", marginTop: "1px", marginLeft: "-2vw" }}
          >
            New Applicants
            <ArrowForwardIosIcon
              style={{ float: "right", marginRight: "2vw" }}
            />
            <ul
              style={{
                marginTop: "2vh",
                marginLeft: "-2vw",
              }}
            >
              <AccountCircleIcon style={{ width: "2vw", height: "3vh" }} />
              <p
                style={{
                  float: "right",
                  marginTop: "0vh",
                  marginRight: "22vw",
                }}
              >
                Rosie Metts.
              </p>
              <ChatIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-22vw",
                }}
              />
              <CallIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-25vw",
                }}
              />
              <p
                style={{
                  fontSize: "xx-small",
                  fontWeight: "lighter",
                  marginLeft: "2vw",
                  marginTop: "-1vh",
                }}
              >
                Applied for{" "}
                <span style={{ color: "skyblue" }}>iOS Developer</span>
              </p>
            </ul>
            {/*  */}
            <ul
              style={{
                marginTop: "2vh",
                marginLeft: "-2vw",
              }}
            >
              <AccountCircleIcon style={{ width: "2vw", height: "3vh" }} />
              <p
                style={{
                  float: "right",
                  marginTop: "0vh",
                  marginRight: "22vw",
                }}
              >
                James Scott
              </p>
              <ChatIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-22vw",
                }}
              />
              <CallIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-25vw",
                }}
              />
              <p
                style={{
                  fontSize: "xx-small",
                  fontWeight: "lighter",
                  marginLeft: "2vw",
                  marginTop: "-1vh",
                }}
              >
                Applied for{" "}
                <span style={{ color: "skyblue" }}>Node.js Developer</span>
              </p>
            </ul>
            {/*  */}
            <ul
              style={{
                marginTop: "2vh",
                marginLeft: "-2vw",
              }}
            >
              <AccountCircleIcon style={{ width: "2vw", height: "3vh" }} />
              <p
                style={{
                  float: "right",
                  marginTop: "0vh",
                  marginRight: "22vw",
                }}
              >
                Jamie Root
              </p>
              <ChatIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-22vw",
                }}
              />
              <CallIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-25vw",
                }}
              />
              <p
                style={{
                  fontSize: "xx-small",
                  fontWeight: "lighter",
                  marginLeft: "2vw",
                  marginTop: "-1vh",
                }}
              >
                Applied for{" "}
                <span style={{ color: "skyblue" }}>Marketing Manager</span>
              </p>
            </ul>
            {/*  */}
            <ul
              style={{
                marginTop: "2vh",
                marginLeft: "-2vw",
              }}
            >
              <AccountCircleIcon style={{ width: "2vw", height: "3vh" }} />
              <p
                style={{
                  float: "right",
                  marginTop: "0vh",
                  marginRight: "20vw",
                }}
              >
                Elizabrth Hurton
              </p>
              <ChatIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-22vw",
                }}
              />
              <CallIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-25vw",
                }}
              />
              <p
                style={{
                  fontSize: "xx-small",
                  fontWeight: "lighter",
                  marginLeft: "2vw",
                  marginTop: "-1vh",
                }}
              >
                Applied for{" "}
                <span style={{ color: "skyblue" }}>UI Designer</span>
              </p>
            </ul>
            {/*  */}
            <ul
              style={{
                marginTop: "2vh",
                marginLeft: "-2vw",
              }}
            >
              <AccountCircleIcon style={{ width: "2vw", height: "3vh" }} />
              <p
                style={{
                  float: "right",
                  marginTop: "0vh",
                  marginRight: "20vw",
                }}
              >
                Danny Watson
              </p>
              <ChatIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-22vw",
                }}
              />
              <CallIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-25vw",
                }}
              />
              <p
                style={{
                  fontSize: "xx-small",
                  fontWeight: "lighter",
                  marginLeft: "2vw",
                  marginTop: "-1vh",
                }}
              >
                Applied for{" "}
                <span style={{ color: "skyblue" }}>iOS Developer</span>
              </p>
            </ul>
            {/*  */}
            <ul
              style={{
                marginTop: "2vh",
                marginLeft: "-2vw",
              }}
            >
              <AccountCircleIcon style={{ width: "2vw", height: "3vh" }} />
              <p
                style={{
                  float: "right",
                  marginTop: "0vh",
                  marginRight: "22vw",
                }}
              >
                Reha Scarlett
              </p>
              <ChatIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-22vw",
                }}
              />
              <CallIcon
                style={{
                  width: "2vw",
                  height: "3vh",
                  float: "right",
                  marginRight: "-25vw",
                }}
              />
              <p
                style={{
                  fontSize: "xx-small",
                  fontWeight: "lighter",
                  marginLeft: "2vw",
                  marginTop: "-1vh",
                }}
              >
                Applied for{" "}
                <span style={{ color: "skyblue" }}>iOS Developer</span>
              </p>
            </ul>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Chatbox;
