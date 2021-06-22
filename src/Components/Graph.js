import React from "react";
import { Line } from "react-chartjs-2";
import "./Graph.css";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const Graph = () => {
  return (
    <div style={{ color: "white", marginLeft: "10px" }} className="graph">
      <p className="p">Applications Recieved </p>
      <p className="year">This Year</p>
      <p className="month">This Month</p>
      <p className="today">Today</p>
      <div className="down">
        <CreateNewFolderIcon style={{ width: "2vw", height: "2vh" }} />
        <p style={{ marginTop: "0vh" }}>Download Report</p>
        <MoreVertIcon style={{ width: "2vw", height: "2vh" }} />
      </div>

      <Line
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: [" green for Up"],

              data: [50, 42, 48, 50, 40, 70, 65],
              backgroundColor: [
                "green",
                "black",
                "black",
                "black",
                "red",
                "black",
                "red",
              ],
              borderColor: "white",
              borderWidth: 1,
            },

            //

            {
              label: [" red for Down"],

              data: [30, 49, 39, 50, 80, 70, 60],
              backgroundColor: [
                "black",
                "red",
                "black",
                "black",
                "green",
                "black",
                "",
              ],
              borderColor: "white",
              borderWidth: 1,
            },
          ],
        }}
        height={600}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
        className="chart"
      />
    </div>
  );
};

export default Graph;
