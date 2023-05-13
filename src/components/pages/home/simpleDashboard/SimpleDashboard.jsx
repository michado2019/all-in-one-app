import React from "react";
import "./SimpleDashboard.css";
const SimpleDashboard = ({ setPage, page, pages }) => {
  return (
    <div className="simpleDashboard-wrapper">
      <div className="simpleDashboard-contents">
        <div className="simpleDashboard-contents-1">
          <h2
           style={{
            backgroundColor: page <= 1 ? "#a9a6a6" : "",
            display: page <= 1 ? "none" : "block",
          }}
            className="simpleDashboard-contents-1_btns"
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </h2>
          <h2
          style={{
            backgroundColor: page >= pages ? "#a9a6a6" : "",
            display: page >= pages ? "none" : "block",
          }}
            className="simpleDashboard-contents-1_btns"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SimpleDashboard;
