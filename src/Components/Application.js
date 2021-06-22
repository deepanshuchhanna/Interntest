import React from "react";
import "./application.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import LinearProgress from "@material-ui/core/LinearProgress";
function Campaign() {
  return (
    <>
      <div className="appi">
        <p style={{ marginTop: "2px" }}>Total Applications</p>

        <div className="appe">
          <FiberManualRecordIcon
            style={{ color: "white", width: "1vw", height: "2vh" }}
          />
          <p style={{ marginTop: "-3vh", marginLeft: "1vw" }}>Applications</p>
          <LinearProgress
            variant="determinate"
            value={40}
            style={{
              width: "10vw",
              height: "1vh",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="appe">
          <FiberManualRecordIcon
            style={{ color: "white", width: "1vw", height: "2vh" }}
          />
          <p style={{ marginTop: "-3vh", marginLeft: "1vw" }}>Short Listeed</p>
          <LinearProgress
            variant="determinate"
            value={60}
            style={{
              width: "10vw",
              height: "1vh",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
              borderRadius: "5px",
            }}
          />
        </div>

        <div className="appe">
          <FiberManualRecordIcon
            style={{ color: "white", width: "1vw", height: "2vh" }}
          />
          <p style={{ marginTop: "-3vh", marginLeft: "1vw" }}>Rejected</p>
          <LinearProgress
            variant="determinate"
            value={30}
            color="secondary"
            style={{
              width: "10vw",
              height: "1vh",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
              borderRadius: "5px",
            }}
          />
        </div>

        <div className="appe">
          <FiberManualRecordIcon
            style={{ color: "white", width: "1vw", height: "2vh" }}
          />
          <p style={{ marginTop: "-3vh", marginLeft: "1vw" }}>On Hold</p>
          <LinearProgress
            variant="determinate"
            value={15}
            style={{
              width: "10vw",
              height: "1vh",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="appe">
          <FiberManualRecordIcon
            style={{ color: "white", width: "1vw", height: "2vh" }}
          />
          <p style={{ marginTop: "-3vh", marginLeft: "1vw" }}>Responded</p>
          <LinearProgress
            variant="determinate"
            value={85}
            style={{
              width: "10vw",
              height: "1vh",
              float: "right",
              marginRight: "1vw",
              marginTop: "-3vh",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Campaign;
