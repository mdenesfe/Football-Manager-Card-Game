import React from "react";

const Info = ({ daysInCharge, teamName }) => (
  <div className="info">
    <center>
      <p className="info__name">{teamName} Takımındasın</p>
    </center>
    <center>
      <p className="info__days">
        {daysInCharge} {daysInCharge > 1 ? "aydır" : "aydır"} takımın başındasın
      </p>
    </center>
    <center>
      <p className="info">Created by mdenesfe</p>
    </center>
  </div>
);

Info.propTypes = {
  daysInCharge: React.PropTypes.number.isRequired,
  teamName: React.PropTypes.string.isRequired
};

export default Info;
