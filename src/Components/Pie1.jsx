import React from "react";
import "./pie.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Doughnut } from "react-chartjs-2";

function Pie1() {
  return (
    <>
      <div className="pie">
        <p style={{ marginTop: "2px" }}>Open Positions By Departments</p>
        <MoreHorizIcon
          style={{
            color: "white",
            float: "right",
            marginTop: "-4vh",
            marginRight: "1vh",
          }}
        />
        <p
          style={{
            color: "white",
            fontSize: "xx-small",
            marginTop: "19vh",
            textAlign: "center",
          }}
        >
          Open positions
        </p>
        <Doughnut
          data={{
            // labels: ["45%", "30%", "25%"],

            datasets: [
              {
                data: [45, 30, 25],
                backgroundColor: ["purple", "red", "rgb(28, 129, 245)"],
              },
            ],
            Options: {
              cutoutpercentage: 50,
              animation: {
                animateScale: true,
              },
            },

            // These labels appear in the legend and in the tooltips when hovering different arcs
          }}
          height={400}
          width={580}
          style={{ marginLeft: "1vw", marginTop: "-24vh" }}
        />
      </div>
    </>
  );
}

export default Pie1;
